import * as ProductApiUtil from "../util/product_api_util"
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
})


export const fetchProducts = (category="All Departments", searchText="-1") => dispatch => (
    ProductApiUtil.fetchProducts(category, searchText).then(products => dispatch(receiveProducts(products)))
)

export const fetchProduct = productId => dispatch => (
    ProductApiUtil.fetchProduct(productId).then(product=> dispatch(receiveProduct(product)))
)