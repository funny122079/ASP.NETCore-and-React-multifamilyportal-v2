"use client"
import Review from "@/components/inner-pages/agency/agency-details/Review"
import CommonAmenities from "../listing-details-common/CommonAmenities"
import CommonBanner from "../listing-details-common/CommonBanner"
import CommonLocation from "../listing-details-common/CommonLocation"
import CommonNearbyList from "../listing-details-common/CommonNearbyList"
import CommonProPertyScore from "../listing-details-common/CommonProPertyScore"
import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour"
import MediaGallery from "./MediaGallery"
import PropertyFloorPlans from "./PropertyFloorPlans"
import PropertyOverview from "./PropertyOverview"
import SimilarProperty from "./SimilarProperty"
import NiceSelect from "@/ui/NiceSelect"
import CommonReviewForm from "../listing-details-common/CommonReviewForm"
import Sidebar from "./Sidebar"

const ListingDetailsThreeArea = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="listing-details-one theme-details-one bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
         <div className="container">
            <CommonBanner />
            <MediaGallery />
            <div className="row">
               <div className="col-xl-8">
                  <div className="bg-white shadow4 border-20">
                     <PropertyOverview />
                     <div className="property-amenities border-top p-40">
                        <CommonAmenities />
                     </div>
                     <div className="property-video-tour border-top p-40">
                        <CommonPropertyVideoTour />
                     </div>
                     <div className="property-floor-plan border-top p-40">
                        <h4 className="mb-40">Floor Plans</h4>
                        <div className="mt-45">
                           <div className="accordion" id="accordionTwo">
                              <PropertyFloorPlans />
                           </div>
                        </div>
                     </div>
                     <div className="property-nearby border-top p-40">
                        <CommonNearbyList />
                     </div>
                     <SimilarProperty />
                     <div className="property-score border-top p-40">
                        <CommonProPertyScore />
                     </div>
                     <div className="property-location border-top p-40">
                        <CommonLocation />
                     </div>

                     <div className="review-panel-one border-top p-40">
                        <div className="position-relative z-1">
                           <div className="d-sm-flex justify-content-between align-items-center mb-10">
                              <h4 className="m0 xs-pb-30">Reviews</h4>
                              <NiceSelect className="nice-select"
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
                           <Review style={true} />
                        </div>
                     </div>
                     <div className="review-form border-top p-40">
                        <CommonReviewForm />
                     </div>
                  </div>
               </div>
               <Sidebar />
            </div>
         </div>
      </div>
   )
}

export default ListingDetailsThreeArea
