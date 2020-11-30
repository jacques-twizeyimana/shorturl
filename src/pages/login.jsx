import React from 'react'
import loginImage from '../static/img/Login.png'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import ErrorIcon from '@material-ui/icons/Error';

import '../static/css/login.css'
import '../static/css/login-1.css'
import { Link } from 'react-router-dom';
import userService from '../services/user_service'
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Login() {
    const [invalidData,setInvalidData] = React.useState({status:false,message:''})
    const [loading, setLoading] = React.useState(false);
    const [values, setValues] = React.useState({
        password:'',
        email:''
    })
    const [showPass,setShowPass] =React.useState(0)
    let history = useHistory();

    let user = JSON.parse(localStorage.getItem('user'))
    if(user ) history.push('/')

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true)
        userService.login(values)
            .then(res =>{
                setLoading(false)
                if(res.data.error) {
                    setInvalidData({status: true,message: res.data.error.message})
                }else{
                    setLoading(false)
                    setInvalidData({status: false,message: ''})
                    localStorage.setItem('user',JSON.stringify(res.data.user))
                    localStorage.setItem('token',JSON.stringify(res.data.token))

                    history.push('/')
                }
            })
            .catch(err =>{
                setLoading(false)
                setInvalidData({status: true,message: 'Unknown error occurred.May be your internet connection was interrupted.Please try again later'})
            })
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
     };

    const showOrHidePassword = () =>{
       setShowPass(!showPass)
    }
    
    return <div className="login-page">
        <NavBar />
        <div className="container-fluid">
            <div className="container pt-4 pb-3">
                <div className="d-flex login-img-form-div">
                    <div className="col-sm-12 col-md-6 bg-white bg-light border-r border-b mt-sm-3 mt-md-0 col-md-push-6">
                        <img src={loginImage} alt="Login here" className="d-block w-100"/>
                    </div>
                    <div className="col-sm-12 col-md-6 border-r border-b bg-light p-sm-0 pmd-3">
                        <div className="limiter">
                            <div className="container-login100">
                                <div className="wrap-login100">
                                    <form className="login100-form validate-form" method="POST" onSubmit={handleSubmit}>
                                        <span className="login100-form-title pb-4">
                                            Welcome
                                        </span>
                                        <span className="login100-form-title pb-5">
                                            <FontDownloadIcon fontSize="large" />
                                        </span>

                                        <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                                            <input className="input100" type="email" onChange={handleChange('email')}  autoComplete="off" name="email" />
                                            <span className="focus-input100" data-placeholder="Email"></span>
                                        </div>

                                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                                            <span className="btn-show-pass">
                                            {showPass === 0 ? <VisibilityOffIcon onClick={showOrHidePassword} />:<VisibilityIcon onClick={showOrHidePassword}/> } 
                                            </span>
                                            <input className="input100" onChange={handleChange('password')} type={showPass === 0 ?"password":"text"}  autoComplete="off" name="pass" />
                                            <span className="focus-input100" data-placeholder="Password"></span>
                                        </div>
                                        <div className={"pt-3"}>
                                            {
                                                loading ? <CircularProgress /> : invalidData.status ?
                                                        <div className='text-center text-danger'>
                                                            <ErrorIcon/> {invalidData.message}
                                                        </div>
                                                :''
                                            }
                                        </div>

                                        <div className="container-login100-form-btn">
                                            <div className="wrap-login100-form-btn">
                                                <div className="login100-form-bgbtn"></div>
                                                <button className="login100-form-btn">
                                                    Login
                                                </button>
                                            </div>
                                        </div>

                                        <div className="text-center pt-5">
                                            <span className="txt1">
                                                Don’t have an account?&nbsp;<Link className="text-primary" to='/signup'>Sign Up</Link>
                                            </span>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}