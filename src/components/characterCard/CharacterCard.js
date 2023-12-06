
import { CardContainer } from "./styles"

export const CharacterCard = ({name, image, actor}) => {  
    
    return (
        <CardContainer>

            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>Actor: {actor}</p>
            <button>Details</button>
        </CardContainer>
    )
}

//estilizar utilizando bootstrap

