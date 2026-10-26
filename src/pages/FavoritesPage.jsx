import {useFavorites} from "../contexts/FavoritesContext.jsx";
import CharacterCard from "./CharacterCard.jsx";

function FavoritesPage() {
    const {favorites} = useFavorites()
    return (
        <main className="max-w-5xl mx-auto px-4 bg-slate-100 py-6 rounded-xl ">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">
                Избранные персонажи: ({favorites.length})
            </h1>

            {favorites.length === 0 ? (
                <div className="bg-white p-8 rounded-2xl text-center text-slate-500">
                    Вы пока не добавили ни одного персонажа в избранное.
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {favorites.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            )}
        </main>
    )
}



export default FavoritesPage;