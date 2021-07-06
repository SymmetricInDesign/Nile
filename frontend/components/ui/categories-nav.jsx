import React from 'react'
class CategoriesNav extends React.Component{

    componentDidMount(){
        // this.props.requestCategories()
    }

    render(){
        return(
            <div className="categories-nav">
                <button>Category</button>
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
        )
    }
}

export default CategoriesNav