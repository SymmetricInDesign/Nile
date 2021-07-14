export const fetchCartItems = () => (
    $.ajax({
        url: "/api/cart_items",
        method: "GET"
    })
)

export const fetchCartItem = (cartItemId) => (
    $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: "GET"
    })
)

export const createCartItem = (cartItem) => (
    $.ajax({
        url: "/api/cart_items",
        method: "POST",
        data: {cartItem}
    })
)

export const updateCartItem = (cartItem) => (
    $.ajax({
        url: `/api/cart_items/${cartItem.id}`,
        method: "PATCH",
        data: {cartItem}
    })
)

export const deleteCartItem = (cartItemId) => (
    $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: "DELETE"
    })
)