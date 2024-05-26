"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image"
import videoImg from "@/assets/images/listing/img_47.jpg";

const VideoTour = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="accordion-item">
            <h2 className="accordion-header">
               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourA" aria-expanded="true" aria-controls="collapseFourA">
                  Video Tour
               </button>
            </h2>
            <div id="collapseFourA" className="accordion-collapse collapse">
               <div className="accordion-body">
                  <div className="property-video-tour">
                     <div className="position-relative image-bg overflow-hidden z-1">
                        <Image src={videoImg} alt="" className="lazy-img w-100" />
                        <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-icon tran3s rounded-circle d-flex align-items-center justify-content-center" data-fancybox >
                           <i className="fa-thin fa-play"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"tUP5S4YdEJo"}
         />
         {/* video modal end */}
      </>
   )
}

export default VideoTour
