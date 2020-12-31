// import React from 'react'
// import { Visibility, VisibilityOff } from '@material-ui/icons';

// import FormControl from '@material-ui/core/FormControl';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import IconButton from '@material-ui/core/IconButton';
// import {Button, TextField} from '@material-ui/core';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import Footer from '../components/footer'
// import { Link, useHistory } from 'react-router-dom'
// import { Typography } from '@material-ui/core';
// import UserService from '../services/user_service'



// import CircularProgress from '@material-ui/core/CircularProgress';
// import { useForm } from "react-hook-form";

// export default function Signup(){
//     let history = useHistory()
//     let user = JSON.parse(localStorage.getItem('user'))
//     if(user ) history.push('/')


//     const [validationError,setValidationError] = React.useState({status:false,message:""})
//     const [loading, setLoading] = React.useState(false);
//     const [showPass,setShowPass] =React.useState(false)

//     const { register, handleSubmit } = useForm();
//     const onSubmit = (data) => {
//         console.log(data)
//     };

//     const showOrHidePassword = () =>{
//         setShowPass(!showPass)
//      }
//     const signMeUp = (data) =>{
//         UserService.signUp(data)
//           .then(res =>{
//             setLoading(false)
//             if(res.data.error){
//               setValidationError({status:true,message:res.data.error.message +  (res.data.error.title ?  ' - ' + res.data.error.title : "") })
//             }
//             else{
//               localStorage.setItem('user',JSON.stringify(res.data) )
//               history.push('/')
//             }          
            
//           })
//           .catch(err =>{
//               setLoading(false)
//             console.error(err)
//             setValidationError({status:true,message:"Unknown error occurred.May be your internet is not stable.Check your connection and try again"})
//           })
//     }
    
//       const handleMouseDownPassword = (event) => {
//         event.preventDefault();
//       };

//     return <div className="signup-page">
//         <div className="signup-part container-fluid p-md-5 bg-light">
//             <div className="border-white bg-white" style={{borderRadius:"8px"}}>
//                 <div className="d-flex login-img-form-div">
//                     <div className="col-sm-12 col-md-5 bg-img pt-5 pb-5 pr-3 pl-3" style={{minHeight:"80vh"}}>
//                         <div className="content">
//                             <h1 className="text-center mt-5 pt-5 display-4 text-bold font-roboto text-white">Welcome Back!</h1>
//                             <h4 className="app-todo-message text-center mt-3 text-lightg mb-5">To keep connected with us please sign in with to account credentials</h4>
//                             <Link to="/login" className="btn btn-signin">Sign in</Link>
//                         </div>
//                     </div>
//                     <div className="col-sm-12 col-md-7 p-3 pt-4" style={{minHeight:"80vh"}} >
//                         <h2 className="text-center font-roboto text-bold">Create account</h2>
//                         <Typography className="mr-3 font-roboto">use social media:</Typography>
//                         <div className="sign-with-social-media">
//                            <button className="btn border rounded-circle  mr-2">
//                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
//                            </button>                           
//                            <button className="btn border text-bold rounded-circle mr-2">
//                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z"/></svg>
//                            </button>
//                            <button className="btn border rounded-circle m-2">
//                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"/></svg>
//                            </button>
//                            <button className="btn border rounded-circle m-2">
//                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"/></svg>
//                            </button>
//                         </div>
//                         <Typography className="p-3 font-roboto mt-2 mb-1">Or use your email address for registration</Typography>
//                         <div className="row">
//                           <div className="signup-email mt-3 col-sm-12 col-md-8 mx-auto">
//                             <div className="name">
//                               <TextField id="fName" label="First name"  ref={register({ required: true, maxLength: 20 })}  className="w-100" variant="outlined" />
//                               <TextField id="lName" label="Last name" className="w-100 mt-3"  ref={register({ required: true, maxLength: 20 })}  variant="outlined" />
//                             </div>
//                             <div className="email  mt-3">
//                               <TextField id="email" label="Email address" type="email"  ref={register({ required: true, maxLength: 20 })}  className="w-100" variant="outlined" />
//                             </div>
//                             <div className="password mt-3">
//                               <FormControl variant="outlined" className="d-block">
//                                 <InputLabel htmlFor="password">Password</InputLabel>
//                                 <OutlinedInput id="password" type={values.showPassword ? 'text' : 'password' }
//                                    ref={register({ required: true, maxLength: 20 })}  className="w-100"
//                                   endAdornment={ <InputAdornment position="end">
//                                   <IconButton aria-label="toggle password visibility" onClick={showOrHidePassword}
//                                     onMouseDown={handleMouseDownPassword} edge="end">
//                                     {showPass ?
//                                     <VisibilityOff /> : <Visibility />
//                                     }
//                                   </IconButton>
//                                   </InputAdornment>
//                                   }
//                                   labelWidth={70}
//                                   />
//                               </FormControl>
//                               <FormControl variant="outlined" className="d-block mt-3">
//                                 <InputLabel htmlFor="rpassword">{'Repeat password'}</InputLabel>
//                                 <OutlinedInput id="rpassword" type={values.showPassword ? 'text' : 'password' }
//                                    ref={register({ required: true, maxLength: 20 })}  className="w-100"
//                                   endAdornment={ <InputAdornment position="end">
//                                   <IconButton aria-label="toggle password visibility" onClick={showOrHidePassword}
//                                     onMouseDown={handleMouseDownPassword} edge="end">
//                                     {showPass ?
//                                     <VisibilityOff />:
//                                      <Visibility />}
//                                   </IconButton>
//                                   </InputAdornment>
//                                   }
//                                   labelWidth={70}
//                                   />
//                               </FormControl>
//                                 <div className={"pt-3"}>
//                               {
//                               loading ? <CircularProgress /> : validationError.status ? <Typography className="text-center font-roboto mt-3 d-block" color="error">{validationError.message}</Typography>
//                               : ''
//                               }
//                                 </div>
//                               <Button className="signup-btn mt-4" size="large" onClick={makeValidation}>Sign up</Button>
//                               <div className="text-center pt-3">
//                                 <span className="txt1">Already have an account?&nbsp;<Link className="text-primary" to='/login'>Sign In</Link></span>
//                               </div>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <Footer />
//     </div>
// }