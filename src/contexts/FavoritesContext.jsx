import {createContext,useContext,useState} from "react";

const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([])


const addFavorite = (character) => {
    setFavorites((prev) => {
        if (prev.some((item) => Number(item.id) === Number (character.id))) {
            return prev;
        }
         return [...prev, character]
    })
}

const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) =>Number (item.id) !== Number(id)))
};

const isFavorite = (id) => {
    return favorites.some((item) => Number(item.id) === Number(id));
};

const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
};

return (
    <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite,isFavorite}}
    >
        {children}
    </FavoritesContext.Provider>
);
}

export function useFavorites() {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
}