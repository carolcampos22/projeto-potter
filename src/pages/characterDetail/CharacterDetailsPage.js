import { Details, DetailsContainer } from "./styles"


export const CharacterDetailsPage = () => {
   
    return (
        <DetailsContainer>
            <h1>Detalhes de Harry Potter</h1>
            <Details>
                <p>Alternate names: alternate_names </p>
                <p>House: house </p>
                <p>Date of birth: dateOfBirth</p>
                <p>Ancestry: ancestry</p>
                <p>Patronus: patronus</p>
            </Details>
            <button>Voltar</button>
        </DetailsContainer>
    )
}