import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextRotationDownIcon from '@material-ui/icons/TextRotationDown';
import Axios from 'axios';

export default function Shorten() {
    const shortenURL = (url)=>{
        Axios.post('/shorten',{url:url,user_id:null})
        .then(resp =>{
            url = resp.data
        })
        .catch(err => console.error(err))
    }

    const validateURL = (event)=>{
        event.preventDefault()

        var urlToGo = document.getElementById('urlToGo').value
        // var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        // var expression = 'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]'
        var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        var regex = new RegExp(expression);        

        if (urlToGo.match(regex)) {
            shortenURL(urlToGo)
        } else {
        console.error('invalid link')
        }
    }

    return <div className="shorten-part special-color-dark p-4" id="shortenpart">
        <hr className="text-white"/>
        <h1 className="app-fn-title mt-3 mb-3" style={{fontFamily:'Poppins'}}>try shorturls today!</h1>
        <h4 className="font-roboto text-nobold text-grey text-center">have an long URL? type it here and see magic!</h4>
        <p className="app-todo-message text-nobold text-grey text-center"> <TextRotationDownIcon/> Its easy: Just copy the link you want to share &amp; paste it int the input bellow!</p>
        <div className="pt-2  pl-md-5 pr-md-5 pb-3 mx-auto">
            <form className="form-inline my-lg-0" onSubmit={validateURL}>
                <div className="col-lg-3 col-md"></div>
                <input className="form-control d-inline-block col-xs-9 col-sm-9 col-md-7 col-lg-6" id="urlToGo" style={{borderRadius:'0px'}} type="search" placeholder="Copy paste the link here .... " aria-label="Search" />
                <button className="btn btn-secondary  d-inline-block col-xs-3 col-sm-3 col-md-2 col-lg-1" onClick={validateURL} style={{borderRadius:'0px'}} type="submit">
                    <ArrowForwardIcon/>
                </button>
            </form> 
        </div>
        
    </div>
}