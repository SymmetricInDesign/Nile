export const All_DEPARTMENTS = 'All Departments'

export const fetchProducts = (category=All_DEPARTMENTS, searchText=-1) => {
    // debugger
    return $.ajax({
        url: "/api/products",
        method: "GET",
        data: {
            category: category,
            searchText: searchText
        }
    })
}


export const fetchProduct = (productId) => (
    $.ajax({
        url: `/api/products/${productId}`,
        method: "GET"
    })
)