"use client"
import CommonBanner from '../listing-details-common/CommonBanner'
import MediaGallery from './MediaGallery'
import PropertyOverview from './PropertyOverview'
import CommonPropertyFeatureList from '../listing-details-common/CommonPropertyFeatureList'
import CommonAmenities from '../listing-details-common/CommonAmenities'
import CommonPropertyVideoTour from '../listing-details-common/CommonPropertyVideoTour'
import CommonPropertyFloorPlan from '../listing-details-common/CommonPropertyFloorPlan'
import CommonNearbyList from '../listing-details-common/CommonNearbyList'
import SimilarProperty from './SimilarProperty'
import CommonProPertyScore from '../listing-details-common/CommonProPertyScore'
import CommonLocation from '../listing-details-common/CommonLocation'
import NiceSelect from '@/ui/NiceSelect'
import Review from '@/components/inner-pages/agency/agency-details/Review'
import AgencyFormOne from '@/components/forms/AgencyFormOne'
import { useState } from 'react'
import LoginModal from '@/modals/LoginModal'
import Sidebar from '../listing-details-1/Sidebar'
import Link from 'next/link'

const ListingDetailsFourArea = () => {

   const selectHandler = (e: any) => { };

   const [loginModal, setLoginModal] = useState<boolean>(false);

   return (
      <>
         <div className="listing-details-one theme-details-one border-top mt-130 lg-mt-100 pt-70 pb-150 xl-pb-120">
            <div className="container">
               <CommonBanner style_3={true} />
               <MediaGallery />
               <PropertyOverview />
               <div className="row">
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

							<div className="accordion-style-two mt-45">
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
                        <CommonLocation />
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
                        <p className="fs-20 lh-lg pb-15"><Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal"
									className="color-dark fw-500 text-decoration-underline">Sign in</Link> to post your comment or
								signup if you don&apos;t have any account.</p>

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

export default ListingDetailsFourArea
