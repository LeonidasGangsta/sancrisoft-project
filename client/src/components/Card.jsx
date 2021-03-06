import { useDispatch, useSelector } from "react-redux";
import { addProduct, decrementQuantity, incrementQuantity, removeProduct } from "../actions";

const Card = ({product}) => {

    let {id, product_name, product_description, product_image, product_category, product_price} = product;
    
    const myCart = useSelector(state => state.myCart)
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(addProduct(product))
    }

    const handleDecrement = () => {
        myCart.products.find(product => product.id === id).quantity > 1 ? dispatch(decrementQuantity(id)) : dispatch(removeProduct(id))
    }

    return (
        <div className="cardContainer">
            <div className="w-1/3">
                <img
                src={product_image}
                alt=""
                className="min-h-full object-cover"/>
            </div>
            <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                    {product_name}
                </h1>
                <h2 className="text-gray-700 font-semibold text-sm">
                    {product_category}
                </h2>
                <p className="mt-2 text-gray-600 text-sm">
                    {product_description}
                </p>
                <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">
                        ${product_price}
                    </h1>
                    {!myCart.products.filter(product => product.id === id).length ? 
                        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" onClick={() => handleClick()}>
                            Add to Card
                        </button>
                        : <>
                            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" onClick={() => handleDecrement()}>
                                -
                            </button>
                            <p>{myCart.products.find(product => product.id === id).quantity}</p>
                            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" onClick={() => dispatch(incrementQuantity(id))}>
                                +
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;