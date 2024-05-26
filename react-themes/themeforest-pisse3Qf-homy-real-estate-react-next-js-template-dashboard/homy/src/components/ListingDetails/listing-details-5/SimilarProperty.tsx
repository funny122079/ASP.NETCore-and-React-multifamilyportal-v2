import property_data from '@/data/home-data/PropertyData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SimilarProperty = () => {
   return (
      <div className="accordion-item">
         <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSevenA" aria-expanded="true" aria-controls="collapseSevenA">
               Similar Homes You May Like
            </button>
         </h2>
         <div id="collapseSevenA" className="accordion-collapse collapse">
            <div className="accordion-body">
               <div className="similar-property">
                  <div className="row">
                     {property_data.filter((items) => items.page == "home_3_property_2").slice(0, 2).map((item) => (
                        <div key={item.id} className="col-md-6 item">
                           <div className="listing-card-one style-three border border-30 sm-mb-40">
                              <div className="img-gallery p-15">
                                 <div className="position-relative border-20 overflow-hidden">
                                    <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
                                    <Image src={item.thumb ? item.thumb : ""} className="w-100 border-20" alt="..." />
                                    <Link href="/listing_details_06"
                                       className="btn-four inverse rounded-circle position-absolute"><i
                                          className="bi bi-arrow-up-right"></i></Link>
                                    <div className="img-slider-btn">
                                       {item.carousel} <i className="fa-regular fa-image"></i>
                                       {/* {item.carousel_thumb.map((thumb,index)=>(
                                 <Link key={index} href={thumb.img?img:""} className="d-block" data-fancybox="img4" data-caption="South Sun House"></Link>
                                 ))} */}
                                    </div>
                                 </div>
                              </div>
                              <div className="property-info pe-4 ps-4">
                                 <Link href="/listing_details_06" className="title tran3s">{item.title}</Link>
                                 <div className="address m0 pb-5">{item.address}</div>
                                 <div className="pl-footer m0 d-flex align-items-center justify-content-between">
                                    <strong className="price fw-500 color-dark">${item.price}</strong>
                                    <ul className="style-none d-flex action-icons">
                                       <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
                                       <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
                                       <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SimilarProperty
