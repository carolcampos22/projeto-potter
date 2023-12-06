import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharactersPage } from "../pages/charactersPage/CharactersPage";
import { SpellsPage } from "../pages/spellsPage/SpellsPage";
import { CharacterDetailsPage } from "../pages/characterDetail/CharacterDetailsPage";
import { HomePage } from "../pages/homepage/HomePage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/spells" element={<SpellsPage />} />
                <Route path="/details" element={<CharacterDetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
};
