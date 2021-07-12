import * as CategoryApiUtil from "../util/category_api_util"
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"

export const receiveCategories = (categories) => {
    // debugger
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}


//fetch categories from database and update redux state accordingly
export const fetchCategories = () => dispatch => (
    CategoryApiUtil.fetchCategories().then(categories => dispatch(receiveCategories(categories)))
)
