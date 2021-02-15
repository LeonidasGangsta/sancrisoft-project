import { useDispatch, useSelector } from "react-redux";
import { DeleteIcon } from "../Icons/Icons";
import { decrementQuantity, incrementQuantity, removeProduct, emptyCart } from "../actions";

const MyCart = () => {

    const myCart = useSelector(state => state.myCart)
    const dispatch = useDispatch();

    const removeHandler = (id) => {
        dispatch(removeProduct(id))
    }

    const columnsHeaders = ['Products', 'Category', 'Unit Price', 'Quantity', '', 'Total'];

    return (
        <div className="myCartContainer">
            <div className="py-8">
                <div className='flex'>
                    <button className='clearCartBtn' onClick={() => dispatch(emptyCart())}>Clear cart</button>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="tableStyle">
                            <thead>
                                <tr>
                                    {columnsHeaders.map((header, id) =>
                                        <th key={id} scope="col" className="tableHeader">
                                            {header}
                                        </th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {myCart.products.length ? myCart.products.map(({ id, product_name, product_category, product_price, quantity }) =>
                                    <tr key={id}>
                                        <td className="tableData">
                                            <p>
                                                {product_name}
                                            </p>
                                        </td>
                                        <td className="tableData">
                                            <p>
                                                {product_category}
                                            </p>
                                        </td>
                                        <td className="tableData">
                                            <p>
                                                {product_price}
                                            </p>
                                        </td>
                                        <td className="tableData">
                                            <div className='flex justify-around'>
                                                <button
                                                    className='shadow px-1 rounded-lg w-5 bg-blue-500 font-bold text-white hover:bg-blue-600'
                                                    onClick={quantity !== 1 ? () => dispatch(decrementQuantity(id)) : () => removeHandler(id)}
                                                >
                                                    -
                                                </button>
                                                <p>
                                                    {quantity}
                                                </p>
                                                <button
                                                    className='shadow px-1 rounded-lg w-5 bg-blue-500 font-bold text-white hover:bg-blue-600'
                                                    onClick={() => dispatch(incrementQuantity(id))}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className='tableData'>
                                            <button onClick={() => removeHandler(id)}>
                                                <DeleteIcon classNameProp='h-5 w-5' />
                                            </button>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                </span>
                                                <span className="relative">
                                                    ${(quantity * product_price).toFixed(2)}
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                ) : <tr><td>There are no products added on your cart yet...</td></tr>}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td className='tableData font-bold'>
                                        <p>Total: </p>
                                    </td>
                                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                        <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                                            <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                            </span>
                                            <span className='relative'>
                                                ${myCart.total.toFixed(2)}
                                            </span>
                                        </span>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCart;