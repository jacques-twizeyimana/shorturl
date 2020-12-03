import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import {useHistory,Link} from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar';
import '../static/css/profile.css'
export default function Profile() {
    const [recentlyVisited,setRecentlyVisited] = React.useState([])
    const [createdByMe,setCreatedByMe] = React.useState([])

    const [myLinksLoading,setMyLinksLoading] = React.useState(false)
    const [recentlyVisitedLoading,setRecentlyVisitedLoading] = React.useState(false)
    
    React.useEffect(()=>{
        getRecentlyVisited()
        getCreatedByMe()
    },[])

    
    let history = useHistory()
    if(!localStorage.getItem('user')){
        history.push('/login')
        return <></>
    } 

    let user = JSON.parse(localStorage.getItem('user'))   
    let bgs=["#bcbdbd","#eee","#027afe","#bcbdbd","#e2e3e4","##a8b3b0","#b5aeae","#e8fcf7"]

    const getRecentlyVisited = ()=>{
        setMyLinksLoading(true)
    }

    const getCreatedByMe = () =>{
        setRecentlyVisitedLoading(true)
    }

    return <>
        <Navbar />
        <div className="main-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="sidebar bg-light p-4 col-sm-12 col-md-3 col-lg-2">
                        <div>
                            <Avatar alt={user.fname.toUpperCase()} src="/broken-image.jpg"
                                style={{backgroundColor:"orange",color:"white",width:"100px",height:"100px"}} />
                            <h4 className="text-bold text-left mt-2">{user.fname + " "+user.lname}</h4>
                        </div>
                        <div className="links">
                        <h6 className="text-left mt-3"><Link to={"/profile"}><svg className={"mr-2"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg> My Profile</Link></h6>
                <h6 className="text-left mt-3"><Link to={"/analytics"}><svg className={"mr-2"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0H24V24H0z"/><path d="M5 3v16h16v2H3V3h2zm14.94 2.94l2.12 2.12L16 14.122l-3-3-3.94 3.94-2.12-2.122L13 6.88l3 3 3.94-3.94z"/></svg>Analytics</Link></h6>
                <h6 className="text-left mt-3"><Link to={"/analytics"}><svg className={"mr-2"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg>My links</Link></h6>
                <h6 className="text-left mt-3"><Link to={"/help"}><svg className={"mr-2"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.501 3.501 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2v-.645z"/></svg>Help</Link></h6>
                <h6 className="text-left mt-3"><Link to={"/settings"}><svg className={"mr-2"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>Account settings</Link></h6>
                <h6 className="text-left mt-3"><Link to={"/logout"}><svg className={"mr-2"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5zm10-6l5-4-5-4v3H9v2h6v3z"/></svg>Logout</Link> </h6>
                        </div>
                    </div>
                    <div className="col-md-9 col-lg-10 px-5">
                        <h2 className="text-center text-bold mt-5 mb-5">Recently visited links</h2>
                        {
                            recentlyVisitedLoading ? 
                            <div className="row my-links"> 
                            <div className="col-sm-6 col-md-3 rounded">
                                <div className="recently-visited bg border loading"></div>
                                <div className="border">
                                    <p className="h-20 loading mt-1"></p>
                                    <p className="mt-1 loading h-50"></p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 rounded">
                                <div className="recently-visited bg border loading"></div>
                                <div className="border">
                                    <p className="h-20 loading mt-1"></p>
                                    <p className="mt-1 loading h-50"></p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 rounded">
                                <div className="recently-visited bg border loading"></div>
                                <div className="border">
                                    <p className="h-20 loading mt-1"></p>
                                    <p className="mt-1 loading h-50"></p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 rounded">
                                <div className="recently-visited bg border loading"></div>
                                <div className="border">
                                    <p className="h-20 loading mt-1"></p>
                                    <p className="mt-1 loading h-50"></p>
                                </div>
                            </div>
                        </div>:
                        <div className="row my-links">{
                            recentlyVisited.map((url) =>
                            <div className="col-sm-6 col-md-3 rounded" key={url.toString()}>
                                <div className="recently-visited bg border"
                                    style={{backgroundColor:bgs[Math.floor(Math.random() * Math.floor(bgs.length))] }}>
                                </div>
                                <div className="border">
                                    <p className="text-center link elpsis p-3">
                                        {url.link}
                                    </p>
                                    <h6 className="text-center text-bold mt-4 mb-4">niceurl.tk/{url.code}</h6>
                                </div>
                            </div>
                        )}
                        </div>
                        }

                        <h2 className="text-center text-bold mt-5 mb-5">Links created by me</h2>
                        {
                            myLinksLoading ? 
                            <div className="row my-links mb-5"> 
                            <div className="col-sm-6 col-md-3 rounded">
                                <div className="recently-visited bg border loading"></div>
                                <div className="border">
                                    <p className="h-20 loading mt-1"></p>
                                    <p className="mt-1 loading h-50"></p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 rounded">
                                <div className="recently-visited bg border loading"></div>
                                <div className="border">
                                    <p className="h-20 loading mt-1"></p>
                                    <p className="mt-1 loading h-50"></p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 rounded">
                                <div className="recently-visited bg border loading"></div>
                                <div className="border">
                                    <p className="h-20 loading mt-1"></p>
                                    <p className="mt-1 loading h-50"></p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 rounded">
                                <div className="recently-visited bg border loading"></div>
                                <div className="border">
                                    <p className="h-20 loading mt-1"></p>
                                    <p className="mt-1 loading h-50"></p>
                                </div>
                            </div>
                        </div>:
                        <div className="row my-links">{
                        createdByMe.map((url) =>
                            <div className="col-sm-6 col-md-3 rounded" key={url.toString()}>
                                <div className="recently-visited bg border"
                                    style={{backgroundColor:bgs[Math.floor(Math.random() * Math.floor(bgs.length))] }}>
                                </div>
                                <div className="border">
                                    <p className="text-center link elpsis p-3">
                                        https://chrome.google.com/webstore/detail/site-palette/pekhihjiehdafocefoimckjpbkegknoh/related?utm_source=chrome-ntp-icon
                                    </p>
                                    <h6 className="text-center text-bold mt-4 mb-4">niceurl.tk/RCA91GM</h6>
                                </div>
                            </div>
                        )}
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
}