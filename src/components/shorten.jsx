import React, { useRef } from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextRotationDownIcon from '@material-ui/icons/TextRotationDown';
import Axios from 'axios';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Shorten() {
    const shortCodeRef = useRef(null);
    const [recentUrl,setRecentUrl] = React.useState({link:'https://www.youtube.com/watch?v=xnY9VUdHwWU',"code": "aU5y9rKG"})
    const [linkCopied,setLinkCopied] = React.useState(false)
    const [loadingUrl,setLoadingUrl]  = React.useState(false)

    const shortenURL = (url)=>{
        let config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        let data = {
            link:url
        }

        if(localStorage.getItem('user')){
            config.headers.token = localStorage.getItem('token')
            data.user_id = localStorage.getItem('user')
        }
        setLoadingUrl(true)
        Axios.post('/urls/',data,config)
        .then(resp =>{
            if(!resp.data.error){
                console.log(resp.data)
                setRecentUrl({link:resp.data.link,code:resp.data.code})
            }
            else console.error(resp.data)

            setLoadingUrl(false)
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

    const copyShortLink = (e) =>{
        document.getElementById("shortLinkInput").removeAttribute('class')
        shortCodeRef.current.select();
        document.execCommand('copy');

        document.getElementById("shortLinkInput").setAttribute('class','d-none')
        setLinkCopied(true)

        setTimeout(() => {
            setLinkCopied(false)
        }, 3000);
    }

    return <div className="shorten-part ">
    <div className="special-color-dark pt-5 pb-5" id="shortenpart">
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
        <div className="container-fluid bg-white p-5">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    {loadingUrl ? <p className="loading h-40"></p>:
                    <Typography className="text-bold font-roboto text-black" variant="h5" >
                       <a className="wrap-text" href={recentUrl.link}>{recentUrl.link} </a> 
                    </Typography>
                    }
                </div>
                <div className="col-sm-12 col-md-6 row mt-5 mt-md-0">
                    <div className="col-10">
                        {loadingUrl ?
                            <p className="loading h-40"></p>:
                        <Link style={{color:"rgba(16, 16, 151, 0.671)"}} to={`/${recentUrl.code}`}>
                            <Typography variant="h6" className="wrap-text">niceurl.tk/{recentUrl.code}</Typography>
                            <input type="text" id="shortLinkInput" className="d-none" ref={shortCodeRef} value={`shorturl.tk/${recentUrl.code}`} />
                        </Link>                        

                    }
                     </div>
                    <div className="col-2">
                        {loadingUrl ? <p className="loading h-50 border"></p>:
                        <button className="btn btn-outline-primary" onClick={copyShortLink}>Copy</button>
                    }
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    {linkCopied ?
        <div className="container-fluid bg-dark p-4 text-copied">
            <h5 className="text-light">Your short link copied to clipboard</h5>
            <button className="btn btn-danger cancel-btn" onClick={()=>{setLinkCopied(false)}}>ok</button>
        </div> : ''
    }
    </div>
}