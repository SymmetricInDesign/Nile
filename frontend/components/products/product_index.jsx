import React from 'react'
import ProductIndexItem from './product_index_item'
class ProductIndex extends React.Component{

    componentDidMount(){
        // debugger
        // console.log(this.props)
        this.props.requestProducts()
    }

    render(){
        const productDivs = this.props.products.map(product => (
            <ProductIndexItem key={product.id} product={product}/> 
        )) 
        return(
            <div className="product-index">
                {productDivs}
            </div>
        )
    }
}

export default ProductIndex