import Root from "./components/root"
import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root")
    
    ReactDOM.render(<Root/>, root)
})