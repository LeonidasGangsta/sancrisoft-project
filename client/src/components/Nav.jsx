import { shoppingCartLogo as MyCartIcon } from "../Icons/logo.jsx"
import sancrisoftLogo from "../Icons/logoSancrisoft.png"
import { useSelector } from "react-redux";

//Links
import { Link } from 'react-router-dom';

const NavHeader = () => {

    const myCart = useSelector(state => state.myCart)

    return (
        <nav className='navBar'>
            {/* Change buttons for React Links and take to Main and myCart component */}
            <Link to='/' id='sancrisoft-logo' className='w-52'>
                <img src={sancrisoftLogo} alt=""/>
            </Link>
            <Link to='/my-cart' id='cart-with-bubble'>
                {myCart.products.length ? 
                    <span className="absolute top-1 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {myCart.products.length}
                    </span> : null
                }
                <MyCartIcon classNameProp='myCartIcon'/>
            </Link>
        </nav>
    )
}

export default NavHeader