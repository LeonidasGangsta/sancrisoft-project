import Card from './Card';
import Pagination from './Pagination';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsList } from '../actions';


const Cards = () => {

    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20)
    const productsList = useSelector(state => state.productsList)
    const dispatch = useDispatch()
    
    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_SERVER_URL}/api/products`)
            .then(({data}) => {
                setLoading(false);
                dispatch(addProductsList(data))
            })
    }, [dispatch])

    const indexOfLastProduct = currentPage * postsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
    const currentProducts = productsList.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePagination = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div>
            <div className='flex flex-col justify-between items-center mx-5 sm:flex-row'>
                <h1 className='mainTitle'>Products</h1>
                <Pagination totalProducts={productsList.length} postsPerPage={postsPerPage} handlePagination={handlePagination} currentPage={currentPage} />
            </div>
            <div className='cardsContainer'>
                {loading ? <h1>Loading</h1> : currentProducts.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
            <Pagination totalProducts={productsList.length} postsPerPage={postsPerPage} handlePagination={handlePagination} currentPage={currentPage} />
        </div>
    )
}

export default Cards