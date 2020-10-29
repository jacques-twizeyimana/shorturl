import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import Previous from "./navigation/previous";
import Next from "./navigation/next";
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Quote from './quote';


SwiperCore.use([Navigation, Autoplay]);

export default function GetQuotes(){
    const [quotes,setQoutes] = React.useState([])

    return <div>
        <div className="container-fluid bg-light ">
            <div className="container">
                
            <Swiper
                className="m-4 p-2 mx-5"
                navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn"
                }}
                spaceBetween={30}
                breakpoints={{
                    576: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    992: { slidesPerView: 1 },
                    1200: { slidesPerView: 1 }
                }}
                scrollbar={false}
                autoplay={{
                    delay: 10000
                }}
            >
                {quotes.map(quote => (
                    <SwiperSlide key={quote._id} style={{ padding: "0px 0px 40px" }}>
                        <Quote quote={quote} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="prev-btn" style={{ position: "absolute", marginTop: "-205px", zIndex: "3", left: 20 }}>
                <Previous />
            </div>
            <div className="next-btn" style={{ position: "absolute", marginTop: "-205px", zIndex: "3", right: 20 }}>
                <Next />
            </div>
            <Typography className="text-center">
                <Link to="/quotes">View more &rarr;here</Link>
            </Typography>
            </div>
            
        </div>
    </div>
}