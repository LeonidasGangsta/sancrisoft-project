const initialState = {
    products: [],
    //The product index in the array matches the quantity index
    total: 0
}

const myCartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_PRODUCT':
            const product = {
                ...payload,
                quantity: 1
            }
            //Payload: Product
            return {
                products: [...state.products, product],
                total: state.total + product.product_price
            }
        
        case 'REMOVE_PRODUCT':
            //Payload: ID of the product
            const productToRemove = state.products.find(product => product.id === payload)
            const subtotal = productToRemove.quantity * productToRemove.product_price
            return {
                total: subtotal,
                products: state.products.filter(product => product.id !== payload),
            }
    
        case 'INCREMENT_QUANTITY':
            //Payload: ID of the product
            return {
                products: state.products.map(product => product.id === payload ? {...product, quantity: product.quantity + 1} : product),
                total: state.total + state.products.find(product => product.id === payload).product_price
            }
        
        case 'DECREMENT_QUANTITY':
            //Payload: ID of the product
            return {
                products: state.products.map(product => {
                    return product.id === payload ? {...product, quantity: product.quantity - 1} : product
                }),
                total: state.total - state.products.find(product => product.id === payload).product_price
            }
    
        case 'EMPTY_CART':
            //Empty the cart state after an order it's submitted
            return {
                products: [],
                total: 0
            }
    
        default:
            return state;
    }
}

export default myCartReducer;