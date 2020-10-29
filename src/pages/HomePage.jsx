import React from 'react'
import Index from '../components/index';
import Footer from '../components/footer';
import Navbar from '../components/navbar'
import Shorten from '../components/shorten';
import WhyChooseUs from '../components/whyChooseUs';

export default function HomePage() {

    return <div className="homepage">
        <Navbar/>
        <Index />
        <Shorten/>
        <WhyChooseUs/>
        <Footer/>
    </div>
    
}