import React from "react";
import { CharacterCard } from "../../components/characterCard/CharacterCard";
import { CharactersPageContainer } from "./styles";
import { useRequestData } from "../../hooks/useRequestData"

export const CharactersPage = () => {
  const url = "https://hp-api.onrender.com/api/characters";

  const [characters, isLoading, isError] = useRequestData(url);


  return (
    
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
  );
};
