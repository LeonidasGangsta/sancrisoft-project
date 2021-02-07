const initialState = {
    myCart: {
        products: [],
        //The product index in the array matches the quantity index
        quantity: [],
        total: 0
    },

    productsList: []

}

const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

    case 'ADD_PRODUCT':
        //Payload: Product
        return {
            ...state,
            myCart: {
                products: [...state.myCart.products, payload],
                quantity: [...state.myCart.quantity, 1],
                total: state.myCart.total + payload.product_price
            }
        }
    
    case 'REMOVE_PRODUCT':
        //Payload: ID of the product
        return {
            ...state,
            myCart: {
                total: state.myCart.total - state.myCart.products[payload].product_price * state.myCart.quantity[payload],
                products: [...state.myCart.products.slice(0,payload), ...state.myCart.products.slice(payload + 1)],
                quantity: [...state.myCart.quantity.slice(0,payload), ...state.myCart.quantity.slice(payload + 1)]
            }
        }

    case 'INCREMENT_QUANTITY':
        //Payload: ID of the product
        return {
            ...state,
            myCart: {
                ...state.myCart,
                quantity: state.myCart.quantity.map( (value, index) => index === payload ? value + 1: value),
                total: state.myCart.total + state.myCart.products[payload].product_price
            }
        }
    
    case 'DECREMENT_QUANTITY':
        //Payload: ID of the product
        return {
            ...state,
            myCart: {
                ...state.myCart,
                quantity: state.myCart.quantity.map( (value, index) => index === payload ? value + 1: value),
                total: state.myCart.total - state.myCart.products[payload].product_price
            }
        }

    case 'EMPTY_CART':
        //Empty the cart state after an order it's submitted
        return {
            myCart: {
                products: [],
                quantity: [],
                total: 0
            },
        
            productsList: []
        }

    case 'ADD_PRODUCTS_LIST':
        //Add the products fetche to the Store
        return {
            ...state,
            productsList: payload
        }

    default:
        return state
    }
}

export default reducer;