import React from 'react'
class ProductShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            slideIndex: 0
        }   
        this.numSlides = 0
        this.nextSlide = this.nextSlide.bind(this)
        this.prevSlide = this.prevSlide.bind(this)
        this.setCurrentSlide = this.setCurrentSlide.bind(this)
    }

    componentDidMount(){
        this.props.requestProduct(this.props.match.params.productId)
    }

    nextSlide(){
        let currentSlide = this.state.slideIndex
        if (currentSlide < this.numSlides-1){
            this.setState({slideIndex: currentSlide + 1})
        }
    }

    prevSlide(){
        let currentSlide = this.state.slideIndex
        if (currentSlide > 0){
            this.setState({slideIndex: currentSlide - 1})
        }
    }

    setCurrentSlide(slideIndex){
        this.setState({slideIndex: slideIndex})
    }

    render(){
        let product
        if (this.props.product) {
            product = this.props.product

            const images = product.photoUrls.map((url, index) => <img key={index} src={url}/> )
            this.numSlides = images.length
            const imageSlides = images.map((image, index) => (
                <div key={index} className="slide-image fade">
                    <div className="image-index">{index+1} / {images.length}</div>
                    {image}
                    {/* <div className="image-caption">Caption</div> */}
                </div>
            ) )

            const slideShowDots = product.photoUrls.map((url, index) => (
                this.state.slideIndex == index ? 
                    <span key={index} className="dot active-dot" onClick={()=>this.setCurrentSlide(index)}></span>
                :
                    <span key={index} className="dot" onClick={()=>this.setCurrentSlide(index)}></span>
                )
            )
            let qtyOptions = []
            for (let i = 1; i< 31; i++){
                qtyOptions.push( <option key={i} value={i}>{i}</option> )
            }

            return(
                <div className="product-show">
                    <div className="product-show-main">
                        <div className="slideshow-container">
                            {imageSlides[this.state.slideIndex]}
                            {this.numSlides > 1 ? 
                                <>
                                    <a className="prev" onClick={this.prevSlide}>&#10094;</a>
                                    <a className="next" onClick={this.nextSlide}>&#10095;</a>
                                    <div className="slideshow-dots-container">
                                        {slideShowDots}
                                    </div>
                                </>
                                :
                                null
                            }
                        </div>
                        <div className="show-details-section">
                            <h1>{product.name}</h1>
                            <hr />
                            <h2>
                                Price: <span className="price">{product.price}</span>
                            </h2>
                            <hr />
                            <h2>About this item</h2>
                            <div dangerouslySetInnerHTML={{ __html: product.details }} />
                        </div>
                        <div className="show-order-section">
                            <h2 className="price">{product.price}</h2>
                            <h3>FREE Delivery</h3>
                            <h2 className="information-text">In Stock</h2>
                            <div className="qty-select-container">
                                <p>Qty: </p>
                                <select name="quantity" className="qty-select">
                                    {qtyOptions}
                                </select>
                            </div>
                            <button className='order-button'>Add to Cart</button>
                            <button className='order-button'>Buy Now</button>
                        </div>
                    </div>
                    <hr />
                </div>
            )
            
        }else{
            return <h1></h1>
        }
    }
}

export default ProductShow