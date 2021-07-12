export const All_DEPARTMENTS = 'All Departments'

export const fetchProducts = (category=All_DEPARTMENTS, searchTerm=-1) => {
    debugger
    return $.ajax({
        url: "/api/products",
        method: "GET",
        data: {
            category: category,
            searchTerm: searchTerm
        }
    })
}


export const fetchProduct = (productId) => (
    $.ajax({
        url: `/api/products/${productId}`,
        method: "GET"
    })
)