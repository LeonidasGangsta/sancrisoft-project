import { LeftArrow, RightArrow } from "../Icons/Icons";

const MyCart = () => {

    const columnsHeaders = ['Products', 'Category', 'Unit Price', 'Quantity', 'Total'];

    return (
        <div className="myCartContainer">
            <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="tableStyle">
                            <thead>
                                <tr>
                                    {columnsHeaders.map( (header, id) => 
                                        <th key={id} scope="col" className="tableHeader">
                                            {header}
                                        </th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="tableData">
                                        <p>
                                            Alexa Custom
                                        </p>
                                    </td>
                                    <td className="tableData">
                                        <p>
                                            Amazon
                                        </p>
                                    </td>
                                    <td className="tableData">
                                        <p>
                                            $200
                                        </p>
                                    </td>
                                    <td className="tableData">
                                        <input type="number" placeholder="2"/>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                            </span>
                                            <span className="relative">
                                                $400
                                            </span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                            <div className="flex items-center">
                                <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                    <LeftArrow/>
                                </button>
                                <button type="button" className="activePageTable">
                                    1
                                </button>
                                <button type="button" className="unactivePageTable">
                                    2
                                </button>
                                <button type="button" className="unactivePageTable">
                                    3
                                </button>
                                <button type="button" className="extremePageTable">
                                    4
                                </button>
                                <button type="button" className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                    <RightArrow/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCart;