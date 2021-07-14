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

export const createCartItem = (product_id, qty) => (
    $.ajax({
        url: "/api/cart_items",
        method: "POST",
        data: {product_id, qty}
    })
)

export const updateCartItem = (cartItem) => (
    $.ajax({
        url: `/api/cart_items/${cartItem.id}`,
        method: "PATCH",
        data: {cart_item: cartItem}
    })
)

export const deleteCartItem = (cartItemId) => (
    $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: "DELETE"
    })
)