import {Typography } from '@material-ui/core'
import React from 'react'
// import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default function NotFound() {
    const goBack = () =>{
        window.history.back()
    }
    return <div className="not-found">
        <Navbar/>
        <div className="container-fluid p-5 bg-light">
            <h1 className="text-center font-roboto text-bold app-fn-title text-primary col-12"> Oops!</h1>
            <Typography className="text-center app-fn-title font-roboto" variant='h4'> <span className="text-bold"> 404</span>&nbsp;<small>Page not found</small></Typography>
            <div className="mb-2 p-5 col-md-9 mx-auto">
                <Typography className='app-todo-message mb-5' variant='h6'>It Looks like you’ve followed a broken link or entered a URL that doesn’t exist on this site.Please double check to URL you followed and come back again</Typography>
                <button className="btn btn-outline-primary text-bold btn-lg" onClick={goBack}>GO BACK</button>
            </div>
            
        </div>
        <Footer/>
    </div>
}