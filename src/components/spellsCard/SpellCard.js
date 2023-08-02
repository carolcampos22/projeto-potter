import { SpellCardContainer } from "./style"

export const SpellCard = ({ name, description }) => {
    return (
        <SpellCardContainer>
            
                <h2>{name}</h2>
                <p>{description}</p>
            
        </SpellCardContainer>
    )
}