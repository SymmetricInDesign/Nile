import React from 'react'
class ProductIndexItem extends React.Component{

    render(){
        return(
            <li>
                <h2>{this.props.product.name}</h2>
                <p>{this.props.product.details}</p>
            </li>
        )
    }
}

export default ProductIndexItem