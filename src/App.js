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
      <h1>Site em desenvolvimento</h1>
      <CharactersPage />
      {/* <SpellsPage /> */}

    </div>
  );
}
//git branch -d nome-da-branch => remover a branch "roteamento"

export default App;
