const productsReducer = (state = [], { type, payload }) => {
    switch (type) {

    case 'ADD_PRODUCTS_LIST':
        //Add the products fetched to the Store
        return payload

    default:
        return state
    }
}

export default productsReducer;
