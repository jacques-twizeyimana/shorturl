// import React from 'react'
//
// class RedirectUrl extends React.Component {
//     getUrl(code){
//        UrlService.getByCode(code)
//            .then(resp =>{
//                if(resp.data.error){
//                    console.error(resp.data.error)
//                    return <Redirect to={"/"}/>
//                }
//                else{
//                    window.location.href = resp.data.link
//                }
//                return 0;
//            })
//            .catch(err => {
//
//                console.error(err)
//            })
//     }
//     componentDidMount() {
//         this.getUrl(2)
//     }
//
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }


import React from 'react'
import {useParams} from 'react-router-dom'
import UrlService from "../services/urlService";
import {Redirect} from 'react-router-dom'
import NavBar from "../components/navbar";
import {Typography} from "@material-ui/core";
import Footer from "../components/footer";
import NotFound from "./not-found";

export default function RedictUrl(){
    const {id} = useParams()

    const [data,setData] = React.useState();
    const [error,setError] = React.useState();
    const [internalErr,setinternalErr] = React.useState();

    React.useEffect((()=> {
        UrlService.getByCode(id)
            .then(resp =>{
                if(resp.data.error){
                    // console.error(resp.data.error)
                    //  <NotFound />
                    setError(true)
                }
                else{
                    setError(false)
                    // <Redirect to={"/quotes"}/>
                     window.location.href = resp.data.link
                }
                return 0;
            })
            .catch(err => {
              setinternalErr(true)
                console.error(err)
            })

    }),[id])


    if(error){
        <Redirect to={"/"}/>
    }else{
       <Redirect to={'/quotes'}/>
    }


    return  <>
        <NavBar />
        <div className="bg-light p-5 col-12" style={{minHeight:'80vh'}}>
            <div className="m-auto">
                <h2 className=" text-center font-roboto text-bold app-fn-title text-danger">Error occurred</h2>
                <Typography className="text-center app-fn-title font-roboto mt-2" variant='h4'> <span className="text-bold"> 500</span>&nbsp;<small>Internal server error</small></Typography>
                <p className="mt-5">Unknown error occurred.We could n't redirect you to the link at this time.</p>
                <button className="btn btn-outline-primary text-bold btn-lg mt-5" onClick={()=>window.location.reload()}>RETRY AGAIN</button>
            </div>
        </div>
        <Footer />
    </>
}

