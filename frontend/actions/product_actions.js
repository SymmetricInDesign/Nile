import * as ProductApiUtil from "../util/product_api_util"
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS"

export const receiveProducts = (products) => {
    debugger
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}



export const fetchProducts = () => dispatch => (
    ProductApiUtil.fetchProducts().then(products => dispatch(receiveProducts(products)))
)