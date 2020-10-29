import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../www-rafiki.png'


export default function Index() {
    return <div className="indexPage">
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-md-7">
                    <div>
                        <h1 className="app-fn-title mt-3 mb-3">Short links, big results</h1>
                        <p className="app-todo-message text-center">Create simple,short and easily memorable links and share them to your friends.<br/>Make the web better by sharing memories</p>
                        <p className="app-todo-message text-center">A URL shortener built with powerful tools to help you grow and protect your brand.</p>
                    </div>
                    <div className="mt-5">
                        <button className="btn btn-primary btn-lg">Get started for free</button>
                        <p className="text-center mt-3">
                        Feeling demotivated?<Link to="/getaquote" className="text-primary"> get a quote</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={Background} style={{maxWidth:"100%",minWidth:"100%",height:"500px"}} className="d-block" alt=''/>
                </div>
            </div>

        </div>
    </div>
}