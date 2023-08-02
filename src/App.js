import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import {CharactersPage} from './pages/charactersPage/CharactersPage'
import { HomePage } from "./pages/homepage/HomePage";
import { SpellsPage } from "./pages/spellsPage/SpellsPage";

function App() {

  return (
    <div>
      <Header />
      <Navbar />
      <h4>Site em desenvolvimento</h4>
      <CharactersPage />
    </div>
  );
}

export default App;
