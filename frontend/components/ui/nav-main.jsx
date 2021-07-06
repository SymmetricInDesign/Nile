import React from 'react'
class NavMain extends React.Component{

    componentDidMount(){
        // this.props.requestCategories()
    }

    render(){
        return(
            <div className="nav-main">
                <img src="/assets/nile.jpg" alt="" width='200' height="100"/>
            </div>
        )
    }
}

export default NavMain