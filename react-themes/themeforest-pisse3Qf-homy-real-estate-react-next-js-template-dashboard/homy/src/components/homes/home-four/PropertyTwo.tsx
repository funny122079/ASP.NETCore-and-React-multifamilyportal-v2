import feature_listing_data from '@/data/home-data/FeaturedListingData'
import Link from 'next/link'

const PropertyTwo = () => {
   return (
      <div className="property-listing-one mt-170 xl-mt-120">
         <div className="container container-large">
            <div className="position-relative">
               <div className="title-one mb-25 lg-mb-10 wow fadeInUp">
                  <h3>Featured Listing</h3>
                  <p className="fs-22 mt-xs">Explore featured properties for sale.</p>
               </div>

               <div className="row gx-xxl-5">
                  {feature_listing_data.filter((items) => items.page === "home_5").map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 mt-40 wow fadeInUp" data-wow-delay={item.data_delay_time}>
                        <div className={`listing-card-four overflow-hidden d-flex align-items-end position-relative z-1 ${item.item_bg_img}`}>
                           <div className="tag fw-500">{item.tag}</div>
                           <div className="property-info tran3s w-100">
                              <div className="d-flex align-items-center justify-content-between">
                                 <div className="pe-3">
                                    <Link href="/listing_details_04" className="title fw-500 tran4s">{item.title}</Link>
                                    <div className="address tran4s">{item.address}</div>
                                 </div>
                                 <Link href="/listing_details_04" className="btn-four inverse"><i className="bi bi-arrow-up-right"></i></Link>
                              </div>

                              <div className="pl-footer tran4s">
                                 <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                                    {item.property_info.map((info, i) => (
                                       <li key={i}>
                                          <strong className="color-dark fw-500">{info.total_feature}</strong>
                                          <span className="fs-16">{info.feature}</span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="section-btn text-center md-mt-60">
                  <Link href="/listing_06" className="btn-eight"><span>Explore All</span> <i className="bi bi-arrow-up-right"></i></Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PropertyTwo
