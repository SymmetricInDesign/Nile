import React from 'react'
import ProductIndexItem from './product_index_item'
import { withRouter } from 'react-router'
const queryString = require('query-string')
class ProductSearch extends React.Component{
    componentDidMount(){
        const searchFilter = queryString.parse(this.props.location.search)
        this.props.requestProducts(searchFilter.category, searchFilter.searchText)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
          const searchFilter = queryString.parse(this.props.location.search)
          this.props.requestProducts(searchFilter.category, searchFilter.searchText)
        }
    }

    render(){
        const productDivs = this.props.products.map(product => (
            <ProductIndexItem key={product.id} product={product}/> 
        )) 
        return(
            <div className="product-index">
                <h2>Searching In {this.props.category}</h2>
                {productDivs}
                <p id="img-src-credit">Photo by <a href="https://unsplash.com/@rhfhanssen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ruben Hanssen</a> on <a href="https://unsplash.com/s/photos/nile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            </div>
        )
    } }

export default withRouter(ProductSearch)
