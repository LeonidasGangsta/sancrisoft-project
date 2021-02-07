import { Link } from 'react-router-dom';

const ThanksPage = ( {name} ) => {

    const firstName = name.split(' ')[0]

    return (
        <div className='mx-4 text-xl flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl mb-4'>Thanks for your purcharse!</h1>
            <p className='text-center'>{firstName}, we have created your order. Your items will be soon at your door.</p>
            <Link to='/' className='yellowBtn mt-4 text-xl'>
                <button>Start again</button>
            </Link>
        </div>
    )
}

export default ThanksPage