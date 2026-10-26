import {useNavigate} from "react-router-dom";

import {useState, useEffect} from "react";
import Pagination from "../components/Pagination.jsx";
import CharacterCard from "./CharacterCard.jsx";

function CharacterListPage() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    // const itemsPerPage = 10;
    const [totalPages, setTotalPages] = useState(1);
    const [totalCount,setTotalCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    function handlePageChange({id}) {

        navigate(`/characters/${id}`)
    }


    useEffect(() => {
        setLoading(true);
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setTotalPages(data.info.pages);
                setTotalCount(data.info.count);
                setLoading(false);
            })

            .catch(error => {
                setError(error.message)
            },)

            .finally(() => {
                setLoading(false);
            });
    }, [page]);

    if (error) {
        return <h1>Ошибка:{error}</h1>
    }

    if (loading) {
        return <h1>Загрузка...</h1>
    }


    return (
        <>
            <main className={"max-w-5xl mx-auto px-4  bg-slate-100 rounded-md"}>
                <h2>Список персонажей</h2>
                <p>Всего персонажей:826</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {characters.map((char) => (
                        <CharacterCard key={char.id} character={char} />
                        ))}
                </div>
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            </main>
        </>

    )
}


export default CharacterListPage;