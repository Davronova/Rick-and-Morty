import CharacterListPage from "./pages/CharacterListPage.jsx";
import Layout from "./components/Layout.jsx";
import CharacterDetailPage from "./pages/CharacterDetailPage.jsx";
import {Routes, Route} from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage.jsx";


function App() {
  return (

          <Routes>
              <Route element={<Layout />}>
              <Route path="/" element={<CharacterListPage on/>} />
              <Route path="/characters/:id" element={<CharacterDetailPage/>} />
              <Route path="/favorites" element={<FavoritesPage/>} />
              </Route>
          </Routes>

  )
}

export default App;