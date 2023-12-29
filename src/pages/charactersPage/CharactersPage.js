import React from "react";
import { CharacterCard } from "../../components/characterCard/CharacterCard";
import { Button, Characters, CharactersPageContainer, PageContent } from "./styles";
import { useRequestData } from "../../hooks/useRequestData"
import { goToDetailsPage, goToSpellsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const CharactersPage = () => {
  const url = "https://hp-api.onrender.com/api/characters";

  const [characters, isLoading, isError] = useRequestData(url);

  const navigate = useNavigate()


  return (
    <>


      <CharactersPageContainer>
        <Button>
          <button onClick={() => goToSpellsPage(navigate)}>Spells</button>
        </Button>

        <Characters>
          {isLoading ? (
            <div>Carregando...</div>
          ) : isError ? (
            <div>Ocorreu um erro ao carregar os dados.</div>
          ) : (
            characters.slice(0, 25).map((char, index) => (
              <>
                {console.log(char.house)}
                <CharacterCard
                  name={char.name}
                  image={char.image}
                  actor={char.actor}
                  house_char={char.house}
                  alternate_names={char.alternate_names}
                  dateOfBirth={char.dateOfBirth}
                  ancestry={char.ancestry}
                  patronus={char.patronus}
                  species={char.species}
                  key={index}
                  wand={char.wand}
                  alive={char.alive}
                  goToDetailsPage={() => goToDetailsPage(navigate, char.id)}
                />
              </>
            ))
          )}
        </Characters>
      </CharactersPageContainer>

    </>
  );
};
