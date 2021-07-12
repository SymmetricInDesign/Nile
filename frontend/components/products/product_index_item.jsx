import React from 'react'
import {Link, withRouter} from 'react-router-dom'
class ProductIndexItem extends React.Component{

    render(){
        return(
            <div className="product-card">
                <h2>{this.props.product.name}</h2>
                <Link to={`/products/${this.props.product.id}`}>
                    <img src={this.props.product.photoUrls[0]} alt={this.props.product.name} />
                </Link>
                <h2>{this.props.product.price}</h2>
            </div>
        )
    }
}

export default ProductIndexItem