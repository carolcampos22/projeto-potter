import { HomePageContainer } from "./styles"

export const HomePage = () => {
    return (
        <HomePageContainer>
            <button>
                <div className="characters">
                    <h1>Characters</h1>
                </div>
            </button>

            <button>
                <div className="spells">
                    <h1>Spells</h1>
                </div>
            </button>
        </HomePageContainer>
    )
}