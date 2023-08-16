import React from "react";
import { CharacterCard } from "../../components/characterCard/CharacterCard";
import { Button, CharactersPageContainer } from "./styles";
import { useRequestData } from "../../hooks/useRequestData"
import { goToSpellsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const CharactersPage = () => {
  const url = "https://hp-api.onrender.com/api/characters";

  const [characters, isLoading, isError] = useRequestData(url);

  const navigate = useNavigate()
  return (
    <>
    <Button>
      <button onClick={() => goToSpellsPage(navigate)}>Spells</button>
      <h1>Site em desenvolvimento</h1>
    </Button>
    
    <div>
    <CharactersPageContainer>
      
      {isLoading ? (
        <div>Carregando...</div>
      ) : isError ? (
        <div>Ocorreu um erro ao carregar os dados.</div>
      ) : (
        characters.slice(0, 25).map((char, index) => (
          <CharacterCard
            name={char.name}
            image={char.image}
            actor={char.actor}
            key={index}
          />
        ))
      )}
    </CharactersPageContainer>
    </div>
    </>
  );
};
