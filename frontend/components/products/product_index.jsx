import React from 'react'
import ProductIndexItem from './product_index_item'
class ProductIndex extends React.Component{

    componentDidMount(){
        this.props.requestProducts(this.props.searchCategory, this.props.searchText)
    }

    render(){
        const productDivs = this.props.products.map(product => (
            <ProductIndexItem key={product.id} product={product}/> 
        )) 
        return(
            <div className="product-index">
                {productDivs}
                <p id="img-src-credit">Photo by <a href="https://unsplash.com/@rhfhanssen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ruben Hanssen</a> on <a href="https://unsplash.com/s/photos/nile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            </div>
        )
    } }

export default ProductIndex