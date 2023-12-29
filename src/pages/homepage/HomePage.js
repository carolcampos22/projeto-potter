import { useNavigate } from "react-router-dom"
import { HomePageContainer } from "./styles"
import { goToCharactersPage, goToSpellsPage } from "../../routes/coordinator"

export const HomePage = () => {
    const navigate = useNavigate()
    return (
        <HomePageContainer>
           
            <button onClick={() => goToCharactersPage(navigate)}>
                <div className="characters">
                    <h1>Characters</h1>
                </div>
            </button>

            <button onClick={() => goToSpellsPage(navigate)}>
                <div className="spells">
                    <h1>Spells</h1>
                </div>
            </button>
        </HomePageContainer>
    )
}