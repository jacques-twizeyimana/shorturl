import React from 'react'

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import AppleIcon from '@material-ui/icons/Apple';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ArrowBack, Visibility, VisibilityOff } from '@material-ui/icons';

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import {Button, TextField} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Footer from '../components/footer'
import { Link, useHistory } from 'react-router-dom'
import { Typography } from '@material-ui/core';
import Axios from 'axios';

export default function Signup(){
  let history = useHistory()
    const [validationError,setValidationError] = React.useState({status:false,message:""})
    const [values, setValues] = React.useState({
        lname: '',
        fname:'',
        password: '',
        rpassword: '',
        email: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const makeValidation = () =>{
        setValidationError({status:false,message:''})
        var specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var passwordRegex=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        if(specialChars.test(values.fname)|| specialChars.test(values.lname)) setValidationError({status:true,message:"A name cannot contain special characters!"})

        else if(values.fname.trim().length === 0) setValidationError({status:true,message:"First name is required!"})
        else if(values.password.trim().length === 0) setValidationError({status:true,message:"Password is required.Please fill its field!"})
        else if(values.email.trim().length === 0) setValidationError({status:true,message:"Email adress is required!"})
        else if(values.lname.trim().length === 0) setValidationError({status:true,message:"Last name is s required field!"})
        else if(values.rpassword.trim().length === 0) setValidationError({status:true,message:"Please repeat the password before continuing."})

        else if(values.fname.trim().length < 3) setValidationError({status:true,message:"First name must be atleast 3 charcters long!"})
        else if(values.lname.trim().length < 5) setValidationError({status:true,message:"Last name must be atleast 5 charcters long!"})

        else if(!passwordRegex.test(values.password)) setValidationError({status:true,message:"Password must be atleast 8 characters long,contain atleast 1 letter and atleast 1 number"})
        else if(values.password !== values.rpassword) setValidationError({status:true,message:"Your passwords doesn't much! please verify your password"})
        else if(!emailRegex.test(values.email)) setValidationError({status:true,message:"Email must be a valid email address"})
        else{
          setValidationError({status:false,message:''})
          Axios.post('/users',{fname:values.fname.trim(),lname:values.lname.trim(),password:values.password,email:values.email.trim()})
          .then(res =>{
            if(res.data.error){
              setValidationError({status:true,message:res.data.error.message + ' - '+ res.data.error.title})
            }
            else{
              window.alert("account created")
              history.push('/')
            }          
            
          })
          .catch(err =>{
            setValidationError({status:true,message:"Unknown error occurred.May be your internet is not stable.Check your connection and try again"})
          })
        }
      }

    return <div className="signup-page">
        {/* <Navbar /> */}
        <div className="signup-part container-fluid p-md-5 bg-light">
          {/* <div className="goback col-4">
              <IconButton >
                <ArrowBack fontSize="large" />
              </IconButton>
          </div> */}
            <div className="border-white bg-white" style={{borderRadius:"8px"}}>
                <div className="d-flex login-img-form-div">
                    <div className="col-sm-12 col-md-5 bg-img pt-5 pb-5 pr-3 pl-3" style={{minHeight:"80vh"}}>
                        <div className="content">
                            <h1 className="text-center mt-5 pt-5 display-4 text-bold font-roboto text-white">Welcome Back!</h1>
                            <h4 className="app-todo-message text-center mt-3 text-lightg mb-5">To keep connected with us please sign in with to account credentials</h4>
                            <Link to="/login" className="btn btn-signin">Sign in</Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 p-3 pt-4" style={{minHeight:"80vh"}} >
                        <h2 className="text-center font-roboto text-bold">Create account</h2>
                        <Typography className="mr-3 font-roboto">use social media:</Typography>
                        <div className="sign-with-social-media">
                           <button className="btn border  btn-outline-primary rounded-circle  mr-2">
                                <FacebookIcon  />                           
                           </button>                           
                           <button className="btn btn-outline-primary border text-bold rounded-circle mr-2">G+</button>
                           <button className="btn border  btn-outline-dark rounded-circle m-2">
                                <GitHubIcon/>
                           </button>
                           <button className="btn border btn-outline-secondary rounded-circle m-2">
                                <AppleIcon />
                           </button>
                        </div>
                        <Typography className="p-3 font-roboto mt-2 mb-1">Or use your email address for registration</Typography>
                        <div className="row">
                          <div className="signup-email mt-3 col-sm-12 col-md-8 mx-auto">
                            <div className="name">
                              <TextField id="fName" label="First name" value={values.fname} onChange={handleChange('fname')} className="w-100" variant="outlined" />
                              <TextField id="lName" label="Last name" className="w-100 mt-3" value={values.lname} onChange={handleChange('lname')} variant="outlined" />
                            </div>
                            <div className="email  mt-3">
                              <TextField id="email" label="Email address" type="email" value={values.email} onChange={handleChange('email')} className="w-100" variant="outlined" />
                            </div>
                            <div className="password mt-3">
                              <FormControl variant="outlined" className="d-block">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput id="password" type={values.showPassword ? 'text' : 'password' }
                                  value={values.password} onChange={handleChange('password')} className="w-100"
                                  endAdornment={ <InputAdornment position="end">
                                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword} edge="end">
                                    {values.showPassword ?
                                    <Visibility /> :
                                    <VisibilityOff />}
                                  </IconButton>
                                  </InputAdornment>
                                  }
                                  labelWidth={70}
                                  />
                              </FormControl>
                              <FormControl variant="outlined" className="d-block mt-3">
                                <InputLabel htmlFor="rpassword">{'Repeat password'}</InputLabel>
                                <OutlinedInput id="rpassword" type={values.showPassword ? 'text' : 'password' }
                                  value={values.rpassword} onChange={handleChange('rpassword')} className="w-100"
                                  endAdornment={ <InputAdornment position="end">
                                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword} edge="end">
                                    {values.showPassword ?
                                    <Visibility /> :
                                    <VisibilityOff />}
                                  </IconButton>
                                  </InputAdornment>
                                  }
                                  labelWidth={70}
                                  />
                              </FormControl>
                              {
                              validationError.status ? <Typography className="text-center font-roboto mt-3 d-block" color="error">{validationError.message}</Typography>
                              : ''
                              } 
                              <Button className="signup-btn mt-4" size="large" onClick={makeValidation}>Sign up</Button>
                              <div class="text-center pt-3">
                                <span class="txt1">Already have an account?&nbsp;<Link className="text-primary" to='/login'>Sign In</Link></span>
                              </div>
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