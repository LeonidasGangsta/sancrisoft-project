const Pagination = ({ postsPerPage, totalProducts, handlePagination, currentPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='flex justify-center my-4'>
            <ol className='flex shadow rounded-lg'>
                {pageNumbers.map(number => 
                    <li key={number} className='text-xl hover:bg-gray-300'>
                        <button onClick={() => handlePagination(number)} className={`px-3 ${currentPage === number ? 'bg-yellow-500 rounded-lg text-white focus:outline-none' : null}`}>{number}</button>
                    </li>
                    )}
            </ol>
        </div>
    )
}

export default Pagination;