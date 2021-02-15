export const addProduct = ( product ) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

export const removeProduct = ( id ) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: id
    }
}

export const incrementQuantity = ( id ) => {
    return {
        type: 'INCREMENT_QUANTITY',
        payload: id
    }
}

export const decrementQuantity = ( id ) => {
    return {
        type: 'DECREMENT_QUANTITY',
        payload: id
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART',
    }
}

export const addProductsList = ( productsList ) => {
    return {
        type: 'ADD_PRODUCTS_LIST',
        payload: productsList
    }
}
