import Card from './Card';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsList } from '../actions';


const Cards = () => {

    //Loading State, products list and dispatch
    const [loading, setLoading] = useState(true)

    const productsList = useSelector(state => state.productsList)
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_SERVER_URL}/api/products`)
            .then(({data}) => {
                setLoading(false);
                dispatch(addProductsList(data))
            })
    }, [dispatch])

    return (
        <div className='cardsContainer'>
            
            {loading ? <h1>Loading</h1> : productsList.map(product => (
                <Card key={product.id} product={product}/>
            ))} 
        </div>
    )
}

export default Cards