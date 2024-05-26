"use client"
import Image from "next/image"
import Link from "next/link";
import agent_data from "@/data/home-data/AgentData";
import Slider from "react-slick";

import titleShape from "@/assets/images/shape/title_shape_05.svg"

const AgentArea = ({ style }: any) => {

   const settings = {
      dots: true,
      arrows: false,
      centerPadding: '0px',
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   }

   return (
      <div className={`agent-section-one position-relative z-1 xl-mt-120 ${style ? "mt-170" : "mt-150"}`}>
         <div className={`container ${style ? "container-large" : ""}`}>
            <div className="position-relative">
               <div className="title-one mb-85 lg-mb-50 wow fadeInLeft">
                  <h3>Our <span>Agents{style?"":<Image src={titleShape} alt="" className="lazy-img" />}</span></h3>
                  <p className="fs-22 mt-xs">Lorem  is placeholder text commonly used  graphic </p>
               </div>

               <div className="wrapper position-relative z-1">
                  <Slider {...settings} className="agent-slider-one">
                     {agent_data.filter((items) => items.page === "home_1").map((item) => (
                        <div key={item.id} className="item">
                           <div className="agent-card-one position-relative">
                              <div className="img border-20">
                                 <Image src={item.thumb} alt="" className="w-100 tran5s" />
                              </div>
                              <div className="text-center">
                                 <h6>{item.title}</h6>
                                 <Link href="/agent_details" className="stretched-link">{item.desc}</Link>
                              </div>
                           </div>
                        </div>
                     ))}
                  </Slider>
               </div>

               <div className="section-btn text-center md-mt-60">
                  <Link href="agent" className={` ${style ? "btn-eight" : "btn-one fw-normal"}`}>Meet Entire Team</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AgentArea;
