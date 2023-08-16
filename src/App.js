import React from "react";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Router } from "./routes/Router";


function App() {
  
    return (
        <div>
            <Header />
             {/* <Navbar navigate={navigate} goToCharactersPage={goToCharactersPage} goToSpellsPage={goToSpellsPage} />  */}
            <Router />
        </div>
    );
}

export default App;

