// CharacterDetailsPage.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DetailsContainer, Details, Title, Image, Content, Button, PageHeader } from "./styles";
import { goToCharactersPage } from "../../routes/coordinator";

export const CharacterDetailsPage = () => {
    const { state } = useLocation();
    const character = state && state.character;
    const navigate = useNavigate()

    const formatAlternateNames = () => {
        if (character.alternate_names && character.alternate_names.length > 0) {
            return character.alternate_names.join(", ");
        }
        return "N/A";
    };

    return (
        <>

            <DetailsContainer>
                <PageHeader>
                    <Title>{character.name}</Title>
                    <Button onClick={() => goToCharactersPage(navigate)}>Voltar</Button>
                </PageHeader>
                <Content>
                    <Image src={character.image} />
                    <Details>
                        <h3>Alternate names: </h3><span>{formatAlternateNames()}</span>
                        <h3>House: </h3><span>{character.house_char}</span>
                        <h3>Date of birth: </h3><span>{character.dateOfBirth}</span>
                        <h3>Ancestry: </h3>{character.ancestry}
                        <h3>Patronus: </h3><span>{character.patronus}</span>
                        <h3>Species: </h3><span>{character.species}</span>
                    </Details>
                </Content>

            </DetailsContainer>
        </>
    );
};
