import { Typography } from '@material-ui/core'
import React from 'react'
import Footer from './footer'
import NavBar from './navbar'
import '../loading.css'
export default function Loading(){
    return <div className="loading-main">    
        <NavBar />
        <div className="bg-light p-5 col-12" style={{minHeight:'80vh'}}>
            <div className="m-auto">
                <p className="mx-auto col-4 loading h-70"></p>
                <div className="mx-auto mt-5 row">
                    <Typography className="mx-auto col-2 mr-4 loading h-50"></Typography>
                    <Typography className="col-6 mx-auto loading h-40"></Typography>
                </div>
                <Typography className="col-8 mx-auto mt-5 loading h-30"></Typography>
                <p className="mt-5 loading h-20"></p>
                <div className="bg-light mt-5 mx-auto loading-hover border-grey h-60 w-200">
                </div>
            </div>
        </div>
        <Footer />
    </div>
}