import Image from "next/image"
import Link from "next/link"

import titleShape from "@/assets/images/shape/title_shape_03.svg"

const PropertyOne = () => {
   return (
      <div className="property-listing-three position-relative z-1 mt-170 xl-mt-120">
         <div className="container container-large">
            <div className="position-relative">
               <div className="title-one mb-60 xl-mb-40 wow fadeInUp">
                  <h3><span>Featured<Image src={titleShape} alt="" className="lazy-img" /></span> Listing</h3>
                  <p className="fs-22 mt-xs">Explore featured properties for sale.</p>
               </div>

               <div className="row gx-xxl-5">
                  <div className="col-xxl-8 col-lg-7 d-flex">
                     <div className="listing-card-six w-100 position-relative z-1 wow fadeInUp" style={{ backgroundImage: `url(/assets/images/listing/img_25.jpg)` }}>
                        <div className="w-100 h-100 d-flex flex-column">
                           <div className="tag fw-500 text-uppercase">FOR SELL</div>
                           <h4>Get Apartments on Vintage City.</h4>
                           <Link href="/listing_details_03" className="btn-four inverse rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                        </div>
                     </div>
                  </div>

                  <div className="col-xxl-4 col-lg-5 d-flex">
                     <div className="w-100 h-100">
                        <div className="row">
                           <div className="col-lg-12 col-md-6">
                              <div className="listing-card-five w-100 position-relative z-1 md-mt-40 wow fadeInUp" style={{ backgroundImage: `url(/assets/images/listing/img_23.jpg)` }}>
                                 <div className="w-100 h-100 d-flex flex-column">
                                    <div className="tag fw-500 text-uppercase">FOR SELL</div>
                                    <h4>Sky Duplex Villa.</h4>
                                    <Link href="/listing_details_03" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-12 col-md-6">
                              <div className="listing-card-five w-100 position-relative z-1 mt-40 wow fadeInUp" style={{ backgroundImage: `url(/assets/images/listing/img_24.jpg)` }}>
                                 <div className="w-100 h-100 d-flex flex-column">
                                    <div className="tag fw-500 text-uppercase">FOR RENT</div>
                                    <h4>Galaxy Touch House.</h4>
                                    <Link href="/listing_details_03" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="section-btn text-center md-mt-60">
                  <Link href="/listing_04" className="btn-eight"><span>Explore All</span> <i className="bi bi-arrow-up-right"></i></Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PropertyOne
