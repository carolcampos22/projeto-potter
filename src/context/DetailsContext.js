import { createContext, useState } from "react";
import { ThemeContext } from "styled-components";

export const DetailsContext = createContext()

export const DetailsProvider = ({children}) => {
    return (
        <ThemeContext.Provider>
            {children}
        </ThemeContext.Provider>
    )
}