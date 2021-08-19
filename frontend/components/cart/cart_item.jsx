import React from 'react'
import {Link} from 'react-router-dom'

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
                    <Link to={`/products/${product.id}`}><img className="cart-img" src={product.photoUrls[0]} alt={product.name} /></Link>
                </div>
                <div className="cart-item-info">
                    <Link to={`/products/${product.id}`}><span className="title">{product.name}</span></Link>
                    <p className="in-stock">In Stock</p>
                    <p className="returns"></p>
                    <p className="price">{product.price}</p>
                    <div className="qty-select-container">
                        <p>Qty: </p>
                        <select className="qty-select-container" defaultValue={cartItem.quantity} onChange={this.updateQty}>
                            {qtyOptions}
                        </select>
                        <p className="delete-link" onClick={()=>this.props.removeCartItem(cartItem.id)}>
                            Delete
                        </p>
                    </div>
                    
                </div>
            </div>
        )
    }



}
    
export default CartItem