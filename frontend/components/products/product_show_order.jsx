import React from "react"
import {Link} from 'react-router-dom'
class ProductShowOrderSection extends React.Component{
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

    render(){
        const product = this.props.product 
        const qtyOptions = this.props.qtyOptions

        return(
            <div className="show-order-section">
                <h2 className="price">{product.price}</h2>
                <h3>FREE Delivery</h3>
                <h2 className="information-text">In Stock</h2>
                {this.props.itemInCart ?
                    <h3>Item is already in your <Link to="/cart">Cart</Link></h3>
                :
                    <>
                        <div className="qty-select-container">
                            <p>Qty: </p>
                            <select name="quantity" className="qty-select" onChange={this.updateQty}>
                                {qtyOptions}
                            </select>
                        </div>
                        <button className='order-button' onClick={() => this.props.createCartItem(product.id, this.state.qty)}>Add to Cart</button>
                        <button className='order-button'>Buy Now</button>
                    </>
                }
             </div>
        )
    }
}

export default ProductShowOrderSection