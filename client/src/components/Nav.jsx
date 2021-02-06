import { shoppingCartLogo as MyCartIcon } from "../Icons/logo.jsx"
import sancrisoftLogo from "../Icons/logoSancrisoft.png"

//Links
import { Link } from 'react-router-dom';

const NavHeader = () => {
    return (
        <nav className='navBar'>
            {/* Change buttons for React Links and take to Main and myCart component */}
            <Link to='/' id='sancrisoft-logo' className='w-52'>
                <img src={sancrisoftLogo} alt=""/>
            </Link>
            <Link to='/my-cart' id='cart-with-bubble'>
                <MyCartIcon classNameProp='myCartIcon'/>
            </Link>
        </nav>
    )
}

export default NavHeader