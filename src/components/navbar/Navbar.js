import React from "react";
import { NavButton, NavbarContainer } from "./styles";



export const Navbar = ({navigate, goToCharactersPage, goToSpellsPage}) => {
    

    return (
        <NavbarContainer>
            <NavButton onClick={() => goToCharactersPage(navigate)}>Home</NavButton>
            <NavButton onClick={() => goToSpellsPage(navigate)}>Spells</NavButton>
        </NavbarContainer>
    );
};

