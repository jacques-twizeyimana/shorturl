import React, { useRef } from 'react'
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import UrlService from '../services/urlService'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Shorten() {
    const shortCodeRef = useRef(null);
    const [recentUrl,setRecentUrl] = React.useState(JSON.parse(localStorage.getItem("recenturl")) ?? {link:'https://www.youtube.com/watch?v=xnY9VUdHwWU',"code": "aU5y9rKG"})
    const [linkCopied,setLinkCopied] = React.useState(false)
    const [loadingUrl,setLoadingUrl]  = React.useState(false)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const myRef = useRef(null)

    const shortenURL = (url)=>{

        let data = {link:url}

        if(localStorage.getItem('user')){
            data.user_id = localStorage.getItem('user')
        }

        setLoadingUrl(true)
        handleClickOpen()
        myRef.current.scrollIntoView()

        UrlService.shorten(data)
        .then(resp =>{
            if(!resp.data.error){
                console.log(resp.data)
                localStorage.setItem('recenturl',JSON.stringify({link:resp.data.link,code:resp.data.code}))
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
        setOpen(false)

        setTimeout(() => {
            setLinkCopied(false)
        }, 3000);
    }

    return <div className="shorten-part ">
    <div className="special-color-dark pt-5 pb-5" id="shortenpart" ref={myRef}>
        <h1 className="app-fn-title mt-3 mb-3" style={{fontFamily:'Poppins'}}>try niceurls today!</h1>
        <p className="text-grey text-center"> Its easy: Just copy the link you want to share &amp; paste it int the input bellow!</p>
        <div className="pt-2  pl-md-5 pr-md-5 pb-3 container col-md-10  col-lg-8 mx-auto">
            <form className="" onSubmit={validateURL}>
                <div className="input-group mb-3 input-group-lg">
                    <input type="text" id={"urlToGo"} className="form-control" placeholder="Paste url here..."
                           aria-label="url to shorten" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary btn-lg" type="button" onClick={validateURL}>Shorten</button>
                    </div>
                </div>
            </form> 
        </div>
        <div className="container rounded bg-white p-5" >
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    {loadingUrl ? <div><p className="loading h-40"></p><p className="loading h-40 mt-3"></p></div>:
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
                        {loadingUrl ? <p className="loading h-40 border"></p>:
                        <button className="btn btn-outline-primary" onClick={copyShortLink}>Copy</button>
                    }
                    </div>                    
                </div>
            </div>
        </div>
    </div>

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-short-link"
            aria-describedby="alert-short-link-and-copy-it"
            fullWidth={true}
            maxWidth={"sm"}
        >
            <h2 className={"text-center pt-3 pb-3 text-gray"}> Copy short url </h2>
            <hr className={"text-light"} />
            <DialogContent>
                <div className="rounded bg-white" >
                        <div className="row mt-5 mt-md-0">
                            <div className={"col-10"}>
                                {loadingUrl ?
                                    <p className="loading h-40"></p>:
                                    <Link style={{color:"rgba(16, 16, 151, 0.671)"}} to={`/${recentUrl.code}`}>
                                        <Typography variant="h6" className="wrap-text">niceurl.tk/{recentUrl.code}</Typography>
                                    </Link>

                                }
                            </div>
                            <div className="col-2">
                                {loadingUrl ? <p className="loading h-40 border"></p>:
                                    <button className="btn btn-outline-primary" onClick={copyShortLink}>Copy</button>
                                }
                            </div>
                        </div>
                </div>

            </DialogContent>
            <hr className={"text-light mt-3 mb-3"} />
            <DialogActions>
                <button onClick={handleClose} className="btn btn-danger" autoFocus>
                    close
                </button>
            </DialogActions>
        </Dialog>
    {linkCopied ?
        <div className="container-fluid bg-light border-top p-4 text-copied">
            <h5 className="text-center">Your short link copied to clipboard</h5>
            <button className="btn btn-danger cancel-btn" onClick={()=>{setLinkCopied(false)}}>ok</button>
        </div> : ''
    }
    </div>
}