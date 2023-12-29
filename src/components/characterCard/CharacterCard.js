
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { CardContainer } from "./styles"

export const CharacterCard = ({ name, image, actor, house_char, alternate_names, dateOfBirth, ancestry, patronus, species, alive }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        goToDetailsPage(navigate, { name, image, actor, house_char, alternate_names, dateOfBirth, ancestry, patronus, species, alive });
      };
    
    const pickBackgroundColor = (house) => {
        switch (house) {
            case "Gryffindor":
                return "#7F0909";

            case "Slytherin":
                return "#366447";

            case "Ravenclaw":
                return "#222F5B";

            case "Hufflepuff":
                return "#EEB939";

            default:
                return "#D3D3D3"

        }
    }

    return (
        <CardContainer color={() => pickBackgroundColor(house_char)}>

            <h1>{name}</h1>
            <img src={image} alt={name} />
            <h2>Actor: {actor}</h2>
            <button onClick={handleClick}>Details</button>
        </CardContainer>
    )
}

//estilizar utilizando bootstrap

