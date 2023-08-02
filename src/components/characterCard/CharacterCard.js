

import { CardContainer } from "./styles"

export const CharacterCard = ({name, image, actor}) => {
    
    
    //estilizar utilizando bootstrap
    //criar um componente de requisição da api - separação de responsabilidades, código limpo!
    
    return (
        <CardContainer>

            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>Actor: {actor}</p>
            <button>Details</button>
        </CardContainer>
    )
}

