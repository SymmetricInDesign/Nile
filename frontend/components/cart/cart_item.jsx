import React from 'react'

class CartItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            qty: this.props.cartItem.quantity
        }
        this.updateQty = this.updateQty.bind(this)
    }
    
    updateQty(e){
        e.preventDefault()
        this.setState({qty: parseInt(e.target.value)})
        let updatedCartItem = Object.assign({}, this.props.cartItem)
        updatedCartItem.quantity = e.target.value 
        this.props.updateCartItem(updatedCartItem)
    }

    render(){

        const {cartItem, product} = this.props

        let qtyOptions = []
        for (let i = 1; i< 31; i++){
            qtyOptions.push( <option key={i} value={i}>{i}</option> )
        }

        return(
            <div className='cart-item-div'>
                <div className="cart-img-container">
                    <img className="cart-img" src={product.photoUrls[0]} alt={product.name} />
                </div>
                <div className="cart-item-info">
                    <h2>{product.name}</h2>
                    <p className="in-stock">In Stock</p>
                    <p className="returns"></p>
                    <div className="qty-select-container">
                        <p>Qty: </p>
                        <select className="qty-select-container" defaultValue={cartItem.quantity} onChange={this.updateQty}>
                            {qtyOptions}
                        </select>
                    </div>
                    
                </div>
            </div>
        )
    }



}
    
export default CartItem