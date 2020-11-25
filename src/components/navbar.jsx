import React from 'react';
import { Link } from "react-router-dom";
// import SearchIcon from '@material-ui/icons/Search';
import '../static/css/navbar.css'
import AccountMenu from './accountMenu'

export default function NavBar() {
  let user = JSON.parse(localStorage.getItem('user')) ?? null;

  console.log(user)

  return <div className="container-fluid special-color-dark"> 
  <div className="container"></div>   
      <nav className="container-fluid navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">NICE URL</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/enterprise">Enterprise</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-outline-secondary" to="/#shortenpart">get started</Link>
            </li>
          </ul>
          <span className="inline-text">
            {
              user  ?
                  <span>
                    <Link className="nav-link-left btn btn-primary" to="#quotes">get a Quote</Link>
                   <AccountMenu />
                  </span>:
                  <span>
                    <Link className="nav-link-left btn" to="/signup">Signup</Link>
                    <Link className="nav-link-left btn btn-outline-secondary" to="/login">Login</Link>
                    <Link className="nav-link-left btn btn-primary" to="#quotes">get a Quote</Link>
                  </span>
            }
          </span>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control" style={{borderRadius:'0px'}} type="search" placeholder="Search " aria-label="Search" />
            <button className="btn btn-secondary" style={{borderRadius:'0px'}} type="submit">
              <SearchIcon/>
            </button>
          </form> */}
        </div>
      </nav>
  </div>
}