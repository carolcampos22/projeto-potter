export const gotToHomePage = (navigate) => {
    navigate("/")
}

export const goToCharactersPage = (navigate) => {
    navigate("/characters");
}

export const goToSpellsPage = (navigate) => {
    navigate("/spells");
}

export const goToDetailsPage = (navigate, character) => {
    navigate("/details", {state: {character}})
}
