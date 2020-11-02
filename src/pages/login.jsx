import React from 'react'
import loginImage from '../Login.png'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import ErrorIcon from '@material-ui/icons/Error';

import '../login.css'
import '../login-1.css'
import { Link } from 'react-router-dom';
import userService from '../services/user_service'


export default function Login() {

    const handleSubmit = (e) =>{
        e.preventDefault();

        userService.login(values)
            .then(res =>{
                if(res.error) {
                    window.alert(res.error)
                    return
                }

                let user = res.data 
                console.log(user)
            })
    }

    const [values, setValues] = React.useState({
        password:'',
        email:''
    })

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
     };

    const [showPass,setShowPass] =React.useState(0)
    const [errorOccured,setErrorOccured] = React.useState({status:false,message:''})

    const showOrHidePassword = () =>{
        if(showPass === 0) setShowPass(1)
        else setShowPass(0)
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
                        <div class="limiter">
                            <div class="container-login100">
                                <div class="wrap-login100">
                                    <form class="login100-form validate-form" method="POST" onSubmit={handleSubmit}>
                                        <span class="login100-form-title pb-4">
                                            Welcome
                                        </span>
                                        <span class="login100-form-title pb-5">
                                            <FontDownloadIcon fontSize="large" />
                                        </span>

                                        <div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                                            <input class="input100" type="email" onChange={handleChange('email')}  autoComplete="off" name="email" />
                                            <span class="focus-input100" data-placeholder="Email"></span>
                                        </div>

                                        <div class="wrap-input100 validate-input" data-validate="Enter password">
                                            <span class="btn-show-pass">
                                            {showPass === 0 ? <VisibilityOffIcon onClick={showOrHidePassword} />:<VisibilityIcon onClick={showOrHidePassword}/> } 
                                            </span>
                                            <input class="input100" onChange={handleChange('password')} type={showPass === 0 ?"password":"text"}  autoComplete="off" name="pass" />
                                            <span class="focus-input100" data-placeholder="Password"></span>
                                        </div>

                                        <div className={errorOccured.status ? ' d-block' : ' d-none'}>
                                            <span  id="pswdErrMsg" className={ 'text-danger d-none  text-center font-roboto'}> <ErrorIcon /> {errorOccured.message} </span>
                                        </div>

                                        <div class="container-login100-form-btn">
                                            <div class="wrap-login100-form-btn">
                                                <div class="login100-form-bgbtn"></div>
                                                <button class="login100-form-btn">
                                                    Login
                                                </button>
                                            </div>
                                        </div>

                                        <div class="text-center pt-5">
                                            <span class="txt1">
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