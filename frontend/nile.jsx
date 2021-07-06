import Root from "./components/root"
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from "./store/store"
// import './app.css'

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root")
    const store = configureStore()
    window.store = store //TODO: Remove
    
    ReactDOM.render(<Root store={store}/>, root)
})