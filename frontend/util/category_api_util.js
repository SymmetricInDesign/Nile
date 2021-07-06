export const fetchCategories = () => (
    $.ajax({
        url: "/api/categories",
        method: "GET"
    })
)

export const fetchCategory = (categoryId) => (
    $.ajax({
        url: `/api/products/${categoryId}`,
        method: "GET"
    })
)