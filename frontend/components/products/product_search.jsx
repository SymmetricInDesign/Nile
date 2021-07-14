import React from 'react'
import ProductIndexItem from './product_index_item'
import { withRouter } from 'react-router'
const queryString = require('query-string')
class ProductSearch extends React.Component{
    componentDidMount(){
        console.log("from product-search#mount")
        console.log(this.props.location.search)
        const searchFilter = queryString.parse(this.props.location.search)
        this.props.requestProducts(searchFilter.category, searchFilter.searchText)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
          console.log("from product-search#update")
          console.log(prevProps)
          console.log(this.props)
          const searchFilter = queryString.parse(this.props.location.search)
          this.props.requestProducts(searchFilter.category, searchFilter.searchText)
        }
    }

    render(){
        console.log(`PROPS:`, this.props)
        
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

    // constructor(props){
    //     super(props)
    //     props.updateBounds(queryString.parse(props.location.search))
    // }

    // componentDidMount(){
    //     const searchFilter = queryString.parse(this.props.location.search)
    //     console.log(searchFilter)
    //     console.log("AAAAAA")
    //     // this.props.requestProducts(this.props.bounds.category, this.props.bounds.searchTerm)
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     const searchFilter = queryString.parse(this.props.location.search)
    //     console.log("CCCCCC")
    //     if (this.props.location !== prevProps.location) {
    //         console.log("BBBBBB")
    //         this.props.requestProducts(this.props.bounds.category, this.props.bounds.searchText)

    //     //   this.props.updateBounds(queryString.parse(this.props.location.search))
    //     }else{

    //     }
    // }