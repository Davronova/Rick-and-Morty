import {Search} from 'lucide-react';
import {useEffect, useState} from "react";



function SearchInput() {
    const [search,setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [error,setError] = useState('');
    const [result,setResult] = useState([]);
    console.log(search);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search)
        },500)
        return () => clearTimeout(timer)
    }, [search]);

    useEffect(() => {
        const url = debouncedSearch.trim()
        ? `https://rickandmortyapi.com/api/character?name=${encodeURIComponent(debouncedSearch.trim())}`
        : `https://rickandmortyapi.com/api/character`;

        setError(null)
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error (res.status.toString());
                }
                return res.json()
            })
            .then((data) => {
                setResult(data.result || [])
            })
            .catch((err) => {
                setResult([]); // Очищаем список при ошибке

                // Проверяем статус 404
                if (err.message === '404') {
                    setError('Ничего не найдено');
                } else {
                    setError('Произошла ошибка при загрузке данных');
                }
            });
    }, [debouncedSearch]);



    return (
        <>
            <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 "  />

                <input
                    type="text"
                    placeholder="Поиск персонажей..."
                    value={search}
                    className="w-full bg-[#0F172A] text-sm text-white pl-9 pr-4 py-2 rounded-xl border border-slate-700 focus:outline-none focus:border-emerald-400"
                    onChange={(e) => setSearch(e.target.value)}
                />

                {error && <p style={{ color: 'orange' }}>{error}</p>}

                <div>
                    {result.map((char) => (
                        <div key={char.id}>
                            {char.name}
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}






export default SearchInput;



