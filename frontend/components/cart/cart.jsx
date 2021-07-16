import React from 'react'
import CartItemContainer from './cart_item_container'
class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // subtotal: 0
        }
        this.subtotal = 0
        this.totalItems = 0
        this.updateQty = this.updateQty.bind(this)
    }

    updateQty(e){
        e.preventDefault()
        this.setState({qty: parseInt(e.target.value)})
    }

    updateSubtotal(){
        const products = Object.values(this.props.cartItemProducts)
        if (products.length > 0 && products[0] != undefined){
            this.subtotal=0
            this.totalItems = 0
            const {cartItems, cartItemProducts} = this.props 
            cartItems.forEach(cartItem => {
                this.subtotal += cartItem.quantity * cartItemProducts[cartItem.id].price
                this.totalItems += cartItem.quantity
            })
        }else{
            this.subtotal=0;
        }
    }

    componentDidMount(){
        // this.props.requestCartItems()
        this.props.requestProducts()
    }

    render(){
        this.updateSubtotal()
        const {cartItems, cartItemProducts} = this.props
        if (cartItemProducts && cartItems && Object.values(cartItemProducts).length > 0 && Object.values(cartItemProducts)[0] != undefined){
            const cartItemDivs = cartItems.map(cartItem => (
                <CartItemContainer key={cartItem.id} 
                    product={cartItemProducts[cartItem.id]}
                    cartItem={cartItem}
                />
            ))
            return (
                <div className="cart-container">
                    <div className="cart-items-container">
                        <div className="cart-items-header">
                            <h1>Shopping Cart</h1>
                        </div>
                        {cartItemDivs}
                        <div className="cart-items-footer">
                            <p className="subtotal">Subtotal ({this.totalItems} items): <span className="price">{Math.ceil(this.subtotal * 100) / 100}</span></p>
                        </div>
                    </div>
                    <div className="cart-info-container">
                        <p className="subtotal">Subtotal ({this.totalItems} items): <span className="price">{Math.ceil(this.subtotal * 100) / 100}</span></p>
                        <button>Proceed to checkout</button>
                    </div>
                </div>
            )
        }else{
            return (
                <h1>No cart items to display</h1>
            )
        }
    }
}

export default Cart