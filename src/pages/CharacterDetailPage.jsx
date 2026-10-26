import {useState,useEffect} from "react";
import {Heart} from 'lucide-react';
import {useParams,useNavigate} from "react-router-dom";
import {useFavorites} from "../contexts/FavoritesContext.jsx";

function CharacterDetailPage() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);

    const {addFavorite, removeFavorite, isFavorite} = useFavorites();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
            .then(data => setCharacter(data))
                .catch(error => console.log(error));
    }, [id]);

        if (!character) return <div>Загрузка...</div>
    const favorite = isFavorite(character.id);

    const toggleFavorite = () => {
        if (favorite) {
            removeFavorite(character.id);
        } else {
            addFavorite(character);
        }
    };
    return (

        <div className={"max-w-5xl mx-auto px-4 py-6 bg-slate-100 rounded-xl"}>
           <div className={"mb-4 flex items-center gap-1"}>
               <button className={"cursor-pointer text-slate-600 font-medium"}
                       onClick={() => navigate("/")}
               >
                   Назад к списку
               </button>
           </div>

            <div className={"flex flex-col md:flex-row gap-8"}>
                <div className={"w-full md:w-1/2"}>
                    <div className={"w-full h-80 rounded-2xl overflow-hidden bg-slate-200"}>
                        <img
                            src={character.image}
                            alt={character.name}
                            className={"w-full h-full object-cover"}
                        />
                    </div>
                    <button
                        onClick={() => favorite ? removeFavorite(character.id) : addFavorite(character) }
                        className={`mt-4 w-full py-3 rounded-xl font-semibold transition-colors ${
                        favorite
                            ? "bg-red-500 hover:bg-red-600 text-white" 
                            : "bg-emerald-500 hover:bg-emerald-600 text-white"
                    }`}

                    >
                        {favorite ? "Remove from favorites" : "Add to favorites"}
                    </button>

                </div>

            <div className={"flex-1 p-6 rounded-2xl shadow-sm"}>
                <div className={"flex justify-between items-center mb-6"}>
                    <h1 className={"text-2xl font-bold text-slate-900"}>
                        {character.name}
                    </h1>

                     <span>
                         <Heart className={
                            "text-slate-500"
                         }
                         />
                     </span>


                </div>

                <div className={"mb-6"}>
                    <p className={"mb-2"}>{character.species}</p>
                    <h2 className={"text-xl font-bold text-slate-900 mb-2"}>
                        О персонаже
                    </h2>
                    <p className={"text-slate-600"}>
                        {character.name} is a genius scientist
                    </p>
                </div>

                <div className={"flex justify-between py-3 border-b"}>
                    <span className={"text-slate-500"}>Gender</span>
                    <span className={"font-medium"}>{character.gender}</span>
                </div>

                <div className={"flex justify-between py-3 border-b"}>
                    <span className={"text-slate-500"}>Status</span>
                    <span className={"font-medium"}>{character.status}</span>
                </div>

                <div className={"flex justify-between py-3"}>
                    <span className={"text-slate-500"}>Location</span>
                    <span className={"font-medium"}>{character.location.name}</span>
                </div>

            </div>




            </div>

        </div>
    )
}




export default CharacterDetailPage;