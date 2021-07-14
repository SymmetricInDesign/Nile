import React from 'react'
import CartItemContainer from './cart_item_container'
class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            qty: 1
        }
        this.updateQty = this.updateQty.bind(this)
    }

    updateQty(e){
        e.preventDefault()
        this.setState({qty: parseInt(e.target.value)})
    }

    componentDidMount(){
        // this.props.requestCartItems()
        this.props.requestProducts()
    }

    render(){
        const {cartItems, cartItemProducts} = this.props
        if (cartItemProducts && this.props.cartItems && Object.values(cartItemProducts).length > 0 && Object.values(cartItemProducts)[0] != undefined){
            const cartItemDivs = cartItems.map(cartItem => (
                <CartItemContainer key={cartItem.id} 
                    product={cartItemProducts[cartItem.id]}
                    cartItem={cartItem}
                />
            ))
            console.log(cartItemProducts)
            return (
                <div className="cart-container">
                    <div className="cart-items-container">
                        <div className="cart-items-header">

                        </div>
                        {cartItemDivs}
                    </div>
                    <div className="cart-info-container">
                        <p>cart info</p>
                    </div>
                </div>
            )
        }else{
            return (
                <h1></h1>
            )
        }
    }
}

export default Cart