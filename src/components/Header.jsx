import { NavLink } from "react-router-dom";
import SearchInput from "./SearchInput.jsx";
import {useTheme} from "../contexts/ThemeContext.jsx";
import {Moon,Sun} from 'lucide-react'

function Header() {
    const {theme,toggleTheme} = useTheme();
    return (
        <header className={"max-w-5xl mx-auto px-6 py-4 bg-[#1b2533] rounded-xl flex items-center justify-between gap-12"}>
            <h1 className={"text-emerald-400 font-bold text-xl"}>Rick and Morty</h1>
            <nav className={"flex items-center gap-4"}>
                <NavLink className={"flex items-center gap-2 text-white font-medium border-b-2 border-emerald-400 pb-1"} to="/">Персонажи</NavLink>
                <NavLink to="/favorites">
                    Избранное
                </NavLink>
            </nav>
            <div className="flex items-center gap-4">
                <SearchInput />

                {/* Кнопка переключения темы */}
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-slate-700 text-slate-200 hover:text-white hover:bg-slate-600 transition-colors"
                    title={`Переключить на ${theme === "light" ? "тёмную" : "светлую"} тему`}
                >
                    {theme === "light" ? <Moon className="w-5 h-5 text-indigo-300" /> : <Sun className="w-5 h-5 text-amber-400" />}
                </button>
            </div>
        </header>
    );
}

export default Header;