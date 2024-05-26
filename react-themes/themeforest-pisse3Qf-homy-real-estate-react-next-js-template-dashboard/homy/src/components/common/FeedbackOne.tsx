"use client"
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";

import feedbackImg_1 from "@/assets/images/media/img_01.jpg";
import feedbackImg_2 from "@/assets/images/media/img_02.jpg";
import feedbackImg_3 from "@/assets/images/media/img_03.jpg";

interface DataType {
   id: number;
   blockquote: JSX.Element;
   name: string;
   country: string;
   img: StaticImageData;
}

const feedback_data: DataType[] = [
   {
      id: 1,
      blockquote: (<>Quick solutions coupled with extraordinary <span>performance</span> a recommendation that&apos;s unequivocal.</>),
      name: "Musa Delimuza",
      country: "Miami, USA",
      img: feedbackImg_1,
   },
   {
      id: 2,
      blockquote: (<>Found our dream home. Great <span>Business</span> with them. To thank you for excellent service. Will take again sure.</>),
      name: "Alina Cruse",
      country: "Miami, USA",
      img: feedbackImg_2,
   },
   {
      id: 3,
      blockquote: (<>Efficient and friendly service, guided us <span>perfectly</span> I am satisfied with our new home.Give a try. Thank you!</>),
      name: "Musa Delimuza",
      country: "Rashed Ka.",
      img: feedbackImg_3,
   },
]

const setting = {
   dots: true,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: true,
   autoplay: true,
   autoplaySpeed: 300000
}

const FeedbackOne = () => {
   return (
      <Slider {...setting} className="feedback-slider-one">
         {feedback_data.map((item) => (
            <div key={item.id} className="item">
               <div className="feedback-block-five">
                  <blockquote>{item.blockquote}</blockquote>
                  <div className="d-flex align-items-center justify-content-end">
                     <div className="pe-3 text-end">
                        <h6 className="fs-20 m0">{item.name}</h6>
                        <span className="fs-16 opacity-50">{item.country}</span>
                     </div>
                     <Image src={item.img} alt="" className="rounded-circle avatar" />
                  </div>
               </div>
            </div>
         ))}
      </Slider>
   )
}

export default FeedbackOne
