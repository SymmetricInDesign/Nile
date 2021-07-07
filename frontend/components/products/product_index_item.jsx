import React from 'react'
class ProductIndexItem extends React.Component{

    render(){
        return(
            <div className="product-card">
                <h2>{this.props.product.name}</h2>
                <p>{this.props.product.details}</p>
            </div>
        )
    }
}

export default ProductIndexItem