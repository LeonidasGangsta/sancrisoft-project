const Card = () => {
    return (
        <div className="cardContainer">
            <div className="w-1/3">
                <img
                src="https://images.unsplash.com/photo-1543512214-318c7553f230?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
                alt=""
                className="min-h-full object-cover"/>
            </div>
            <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                    Tomorow
                </h1>
                <h2 className="text-gray-700 font-semibold text-sm">
                    Category
                </h2>
                <p className="mt-2 text-gray-600 text-sm">
                    You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything.
                </p>
                <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">
                        $220
                    </h1>
                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                        Add to Card
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;