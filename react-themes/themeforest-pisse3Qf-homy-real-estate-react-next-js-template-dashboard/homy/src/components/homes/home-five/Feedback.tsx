"use client"
import feedback_data from "@/data/home-data/FeedbackData"
import Image from "next/image";
import { Rating } from 'react-simple-star-rating';
import Slider from "react-slick";

import feedbackShape_1 from "@/assets/images/shape/shape_55.svg"
import feedbackShape_2 from "@/assets/images/shape/shape_56.svg"

const setting = {
   dots: true,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 2,
   slidesToScroll: 1,
   centerMode: true,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 1
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1
         }
      }
   ]
}

const Feedback = ({ style }: any) => {
   return (
      <div className={`feedback-section-six bg-pink-two position-relative z-1 pt-110 xl-pt-80 pb-100 xl-pb-80 ${style ? "" : "mt-170 xl-mt-120"}`}>
         <div className={`container ${style ? "" : "container-large"}`}>
            <div className="title-one text-center mb-80 xl-mb-50 md-mb-30">
               <h3>Client Feedback</h3>
               <p className="fs-20 mt-xs">Client satisfaction speaks louder than our words. Hear from them.</p>
            </div>
            <Slider {...setting} className="feedback-slider-three">
               {feedback_data.filter((items) => items.page === "home_5").map((item) => (
                  <div key={item.id} className="item">
                     <div className={`feedback-block-six ${style ? "rounded-4" : ""}`}>
                        <div className="d-flex justify-content-between align-items-center">
                           <ul className="rating style-none d-flex">
                              <li><Rating initialValue={5} size={25} readonly={true} /></li>
                           </ul>
                           <Image src={item.quote_icon} alt="" className="icon" />
                        </div>
                        <blockquote>{item.desc}</blockquote>
                        <div className="d-flex align-items-center justify-content-between">
                           <h6 className="fs-20 m0">{item.title}<span className="fw-normal opacity-50">{item.country}</span></h6>
                           <Image src={item.thumb} alt="" className="rounded-circle avatar" />
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
            {!style && <><Image src={feedbackShape_1} alt="" className="lazy-img shapes shape_01" />
               <Image src={feedbackShape_2} alt="" className="lazy-img shapes shape_02" /></>}
         </div>
      </div>
   )
}

export default Feedback
