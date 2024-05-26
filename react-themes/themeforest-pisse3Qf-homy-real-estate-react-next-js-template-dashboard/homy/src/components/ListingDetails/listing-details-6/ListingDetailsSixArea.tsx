"use client"
import AgencyFormOne from "@/components/forms/AgencyFormOne"
import MediaGallery from "../listing-details-1/MediaGallery"
import SimilarProperty from "../listing-details-4/SimilarProperty"
import CommonAmenities from "../listing-details-common/CommonAmenities"
import CommonBanner from "../listing-details-common/CommonBanner"
import CommonLocation from "../listing-details-common/CommonLocation"
import CommonNearbyList from "../listing-details-common/CommonNearbyList"
import CommonProPertyScore from "../listing-details-common/CommonProPertyScore"
import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList"
import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan"
import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour"
import Sidebar from "../listing-details-1/Sidebar"
import Review from "@/components/inner-pages/agency/agency-details/Review"
import LoginModal from "@/modals/LoginModal"
import { useState } from "react"
import NiceSelect from "@/ui/NiceSelect"

const ListingDetailsSixArea = () => {

   const selectHandler = (e: any) => { };

   const [loginModal, setLoginModal] = useState<boolean>(false);

   return (
      <>
         <div className="listing-details-one theme-details-one mt-200 xl-mt-150 pb-150 xl-mb-120">
            <div className="container">
               <CommonBanner style_3={true} />
               <MediaGallery style={true} />
               <div className="row pt-80 lg-pt-50">
                  <div className="col-xl-8">
                     <div className="property-overview bottom-line-dark pb-40 mb-60">
                        <h4 className="mb-20">Overview</h4>
                        <p className="fs-20 lh-lg">Risk management and compliance, when approached strategically, have the
                           potential to go beyond mitigating threats and protecting a company’s operations &
                           reputation.They can actually generate value and create opportunities. </p>
                     </div>
                     <div className="property-feature-accordion bottom-line-dark pb-40 mb-60">
                        <h4 className="mb-20">Property Features</h4>
                        <p className="fs-20 lh-lg">Risk management and compliance, when approached strategically, have the
                           potential to go beyond mitigating threats.</p>

                        <div className="accordion-style-two grey-bg mt-45">
                           <CommonPropertyFeatureList />
                        </div>
                     </div>
                     <div className="property-amenities bottom-line-dark pb-40 mb-60">
                        <CommonAmenities />
                     </div>
                     <div className="property-video-tour bottom-line-dark pb-40 mb-60">
                        <CommonPropertyVideoTour />
                     </div>
                     <CommonPropertyFloorPlan style={true} />
                     <div className="property-nearby bottom-line-dark pb-40 mb-60">
                        <CommonNearbyList />
                     </div>
                     <SimilarProperty />
                     <div className="property-score bottom-line-dark pb-40 mb-60">
                        <CommonProPertyScore />
                     </div>

                     <div className="property-location bottom-line-dark pb-60 mb-60">
                        <h4 className="mb-40">Location</h4>
                        <div className="wrapper">
                           <div className="map-banner overflow-hidden">
                              <div className="gmap_canvas h-100 w-100">
                                 <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83088.3595592641!2d-105.54557276330914!3d39.29302101722867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2sbd!4v1699764452737!5m2!1sen!2sbd"
                                    width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade" className="w-100 h-100">
                                 </iframe>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="review-panel-one bottom-line-dark pb-40 mb-60">
                        <div className="position-relative z-1">
                           <div className="d-sm-flex justify-content-between align-items-center mb-10">
                              <h4 className="m0 xs-pb-30">Reviews</h4>
                              <NiceSelect className="nice-select rounded-0"
                                 options={[
                                    { value: "01", text: "Newest" },
                                    { value: "02", text: "Best Seller" },
                                    { value: "03", text: "Best Match" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={selectHandler}
                                 name=""
                                 placeholder="" />
                           </div>
                           <Review />
                        </div>
                     </div>
                     
                     <div className="review-form">
                        <h4 className="mb-20">Leave A Reply</h4>
                        <p className="fs-20 lh-lg pb-15">
                           <a onClick={() => setLoginModal(true)} style={{ cursor: "pointer" }}
                              className="color-dark fw-500 text-decoration-underline">Sign in</a>
                           to post your comment or signup if you don&apos;t have any account.</p>

                        <div className="bg-dot p-30">
                           <AgencyFormOne />
                        </div>
                     </div>
                  </div>
                  <Sidebar />
               </div>
            </div>
         </div>

         <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      </>
   )
}

export default ListingDetailsSixArea
