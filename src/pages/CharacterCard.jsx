import {useFavorites} from "../contexts/FavoritesContext.jsx";
import {Heart,ChevronRight} from 'lucide-react'
import {useNavigate} from "react-router-dom";

function CharacterCard({character}) {
    const navigate = useNavigate();
    const {addFavorite, removeFavorite, isFavorite} = useFavorites();
    const favorite = isFavorite(character.id);

    const toggleFavorite = (e) => {
        e.stopPropagation();
        if (favorite) {
            removeFavorite(character.id);
        } else {
            addFavorite(character);
        }
    };

    return (
        <div
            onClick={() => navigate(`/characters/${character.id}`)}
            className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm relative flex flex-col cursor-pointer hover:shadow-md transition-shadow"
        >
            <div className="relative w-full h-36 mb-3 overflow-hidden rounded-xl bg-slate-100">
                <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                />

                <button
                    type="button"
                    onClick={toggleFavorite}
                    className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full transition-colors"
                >
                    <Heart
                        className={`w-4 h-4 ${
                            favorite
                                ? "text-red-500 fill-red-500"
                                : "text-slate-400 hover:text-red-500"
                        }`}
                    />
                </button>
            </div>

            <div className="flex justify-between items-end">
                <div>
                    <h3 className="font-bold text-slate-900 text-sm truncate max-w-[130px]" title={character.name}>
                        {character.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                        {character.species}
                    </p>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-300" />
            </div>
        </div>
    );

}

export default CharacterCard;