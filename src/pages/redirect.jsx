import { Typography } from '@material-ui/core';
import React,{ useState,useEffect } from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navbar';

import NotFound from './not-found';
import UrlService from '../services/urlService'


export default function RedirectLink() {
    let currentURL = window.location.href.split('/')
    let code = currentURL[currentURL.length - 1]

    const [invalidLink,setInvalidLink] = useState(false)
    const [errorOccured,setErrorOccured] = useState(false)

    useEffect(()=>{
        callData();
    },[])
    
    const callData = () =>{
        UrlService.getByCode(code)
        .then(resp =>{
            if(resp.data.error){
                console.error(resp.data.error)
                setInvalidLink(true)
            }
            else{
                window.location.href = resp.data.link
            }
            return 0;
        })
        .catch(err => {
            setErrorOccured(true)
            console.error(err)
        })
    }
    
    
    return <div className="redirectPage">
        {
            invalidLink ? <NotFound />:errorOccured ? 
            <div>
                <NavBar />
                <div className="bg-light p-5 col-12" style={{minHeight:'80vh'}}>
                    <div className="m-auto">
                        <h2 className=" text-center font-roboto text-bold app-fn-title text-danger">Error occurred</h2>
                        <Typography className="text-center app-fn-title font-roboto mt-2" variant='h4'> <span className="text-bold"> 500</span>&nbsp;<small>Internal server error</small></Typography>
                        <p className="mt-5">Unknown error occurred.We could n't redirect you to the link at this time.</p>
                        <button className="btn btn-outline-primary text-bold btn-lg mt-5" onClick={()=>window.location.reload()}>RETRY AGAIN</button>
                    </div>
                </div>
                <Footer />
            </div>: <></> 
            
        }
    </div>    
}