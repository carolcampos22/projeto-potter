import { Header } from "./components/header/Header";
import {CharactersPage} from './pages/charactersPage/CharactersPage'
import { HomePage } from "./pages/homepage/HomePage";
import { SpellsPage } from "./pages/spellsPage/SpellsPage";

function App() {

  return (
    <div>
      <Header />
      <SpellsPage />
    </div>
  );
}

export default App;
