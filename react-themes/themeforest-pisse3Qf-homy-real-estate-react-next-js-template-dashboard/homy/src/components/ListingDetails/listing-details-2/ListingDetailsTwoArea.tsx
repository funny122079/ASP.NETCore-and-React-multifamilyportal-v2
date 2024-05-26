"use client"
import NiceSelect from "@/ui/NiceSelect"
import CommonAmenities from "../listing-details-common/CommonAmenities"
import CommonBanner from "../listing-details-common/CommonBanner"
import CommonLocation from "../listing-details-common/CommonLocation"
import CommonNearbyList from "../listing-details-common/CommonNearbyList"
import CommonProPertyScore from "../listing-details-common/CommonProPertyScore"
import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList"
import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan"
import CommonPropertyOverview from "../listing-details-common/CommonPropertyOverview"
import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour"
import CommonReviewForm from "../listing-details-common/CommonReviewForm"
import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty"
import Review from "@/components/inner-pages/agency/agency-details/Review"
import Sidebar from "../listing-details-1/Sidebar"

const ListingDetailsTwoArea = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="listing-details-one theme-details-one bg-pink pt-120 lg-pt-100 pb-150 xl-pb-120">
         <div className="video-wrapper">
            <video preload="" muted={true} playsInline={true} autoPlay={true} loop={true}>
               <source src="https://creativegigstf.com/video/intro_4.mp4" type="video/mp4" />
            </video>
         </div>
         <div className="container">
            <div className="bg-white shadow4 border-20 p-40 mt-70 lg-mt-50 mb-60">
               <CommonBanner />
               <div className="property-feature-list border-top mt-70 lg-mt-50 pt-60 lg-pt-30 pb-30 lg-pb-10">
                  <CommonPropertyOverview />
               </div>
            </div>
            <div className="row">
               <div className="col-xl-8">
                  <div className="property-overview bg-white shadow4 border-20 p-40 mb-50">
                     <h4 className="mb-20">Overview</h4>
                     <p className="fs-20 lh-lg">Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel
                        dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in
                        sociis. Nisl enim integer neque nec.</p>
                  </div>
                  <div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
                     <h4 className="mb-20">Property Features</h4>
                     <p className="fs-20 lh-lg">Risk management and compliance, when approached strategically, have the
                        potential to go beyond mitigating threats.</p>
                     <div className="accordion-style-two mt-45">
                        <CommonPropertyFeatureList />
                     </div>
                  </div>
                  <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
                     <CommonAmenities />
                  </div>
                  <div className="property-video-tour mb-50">
                     <CommonPropertyVideoTour />
                  </div>
                  <CommonPropertyFloorPlan style={false} />
                  <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
                     <CommonNearbyList />
                  </div>
                  <CommonSimilarProperty />
                  <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
                     <CommonProPertyScore />
                  </div>
                  <div className="property-location mb-50">
                     <CommonLocation />
                  </div>

                  <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
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
                  <div className="review-form bg-white shadow4 border-20 p-40 mb-50">
                     <CommonReviewForm />
                  </div>
               </div>
               <Sidebar />
            </div>
         </div>
      </div>
   )
}

export default ListingDetailsTwoArea
