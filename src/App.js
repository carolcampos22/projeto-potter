import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import {CharactersPage} from './pages/charactersPage/CharactersPage'
import { HomePage } from "./pages/homepage/HomePage";
import { SpellsPage } from "./pages/spellsPage/SpellsPage";

function App() {
  //criar rotas
  
  return (
    <div>
      <Header />
      <Navbar />
      <CharactersPage />
      {/* <SpellsPage /> */}

    </div>
  );
}

export default App;
