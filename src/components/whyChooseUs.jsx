import React from 'react'
import Dashboard from "../statistics.png"
import HappyUser from '../connected.png'
import EarnMoney from '../earn-money.png'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


export default function WhyChooseUs() {
    return <div className="why-choose-us">  
        <div className="container-fluid bg-light pb-5">
                <hr className="text-light"/>                
            <div className="container">
                <h2 className="text-bold font-roboto p-3 app-color">why choose ShortURL?</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 bg-white border p-3">
                        <img alt="" src={Dashboard} className="d-block w-100" style={{height:'250px'}}/>
                        <h4 className="text-bold font-roboto mt-4 mb-4">Manage traffics</h4>
                        <p className="text-center">With <a href="/">shorturl.netlify.com</a>, you can manage your site traffics,know who visited your site,their location and many more with our 
                        user friendly and interactive dashboards available in both free and enterprise versions of ShortURL</p>
                    </div>
                    
                    <div className="col-sm-12 col-md-6 col-lg-4 bg-white border p-3">
                        <img alt="" src={EarnMoney} className="d-block w-100"  style={{height:'250px'}}/>
                        <h4 className="text-bold font-roboto mt-4 mb-4">Earn more money <AttachMoneyIcon/> </h4>
                        <p className="text-center">With <a href="/">shorturl.netlify.com</a>, you can manage your site traffics,know who visited your site,their location and many more with our 
                        user friendly and interactive dashboards available in both free and enterprise versions of ShortURL</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 bg-white border p-3 mx-auto">
                        <img alt="" src={HappyUser} className="d-block w-100"  style={{height:'250px'}}/>
                        <h4 className="text-bold font-roboto mt-4 mb-4">Connect the world</h4>
                        <p className="text-center">Enjoy the advantages of social media With <a href="/">shorturl.netlify.com</a>, easily manageable and shareble links. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iure dolore repellendus voluptatum voluptas vel aspernatur labore illo perferendis repudiandae, unde pariatur a quam. Corporis dolorum dolore culpa vitae laboriosam! </p>
                    </div>
                </div>
            </div>
        </div>      
    </div>
}