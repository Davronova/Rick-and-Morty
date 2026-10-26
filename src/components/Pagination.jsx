import { ChevronLeft, ChevronRight } from 'lucide-react';

function Pagination({ totalPages, currentPage, onPageChange }) {
    // Создаем массив [1, 2]
    const getPageNumbers = () => {

        if (totalPages <= 4) {
            return Array.from({length: totalPages}, (_, i) => i + 1)
    }
    const pages = [1, 2]

    if (currentPage > 2 && currentPage < totalPages) {
        if (currentPage > 3) {
            pages.push('...')
        }
        pages.push(currentPage);
    }

    if (currentPage < totalPages - 1) {
        pages.push('...')
    }

    pages.push(totalPages);

    return pages;
}
const pages = getPageNumbers();

    return (
        <div className="flex justify-center items-center gap-2 mt-8">
            {/* Кнопка Prev */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-4 py-2 bg-[#1b2533] text-white text-xs font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
            >
                <ChevronLeft className="w-4 h-4 text-emerald-400" />
                <span>Prev</span>
            </button>

            {/* Кнопки 1 и 2 */}
            {pages.map((page,index) => {
                if (page === '...') {
                    return (
                        <span key={`dots-${index}`} className={"px-1 text-xs text-slate-500 font-bold select-none"}>
                            ...
                        </span>
                    );
                }
                return (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-lg transition-all ${
                            currentPage === page
                                ? 'bg-emerald-400 text-slate-900 shadow-sm scale-105'
                                : 'text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        {page}
                    </button>
                );
            })}


            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-4 py-2 bg-[#1b2533] text-white text-xs font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
            >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
        </div>
    );
}




export default Pagination