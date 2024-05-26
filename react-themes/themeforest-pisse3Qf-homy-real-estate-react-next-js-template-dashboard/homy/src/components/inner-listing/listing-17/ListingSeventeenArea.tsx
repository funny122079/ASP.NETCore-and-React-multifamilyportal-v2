"use client"
import Link from "next/link"
import ReactPaginate from "react-paginate"
import NiceSelect from "@/ui/NiceSelect"
import UseShortedProperty from "@/hooks/useShortedProperty"
import DropdownSeven from "@/components/search-dropdown/inner-dropdown/DropdownSeven"
import { useState } from "react"
import Fancybox from "@/components/common/Fancybox"

const select_type: string[] = ["All", "Apartments", "Villa", "Mortgage", "Loft", "Home",];

const ListingSeventeenArea = () => {

   const itemsPerPage = 3;
   const page = "listing_3";

   const {
      itemOffset,
      sortedProperties,
      currentItems,
      pageCount,
      handlePageClick,
      handleBathroomChange,
      handleBedroomChange,
      handleSearchChange,
      handlePriceChange,
      maxPrice,
      priceValue,
      resetFilters,
      selectedAmenities,
      handleAmenityChange,
      handleLocationChange,
      handleStatusChange,
      handleTypeChange,
      handlePriceDropChange
   } = UseShortedProperty({ itemsPerPage, page });

   const handleResetFilter = () => {
      resetFilters();
   };

   const [selectedType, setSelectedType] = useState("All");

   const handleTypeClick = (type: string) => {
      setSelectedType(type);
   };

   return (
      <div className="property-listing-eight pt-150 xl-pt-120">
         <div className="search-wrapper-three layout-two dark-bg border-0 position-relative">
            <div className="bg-wrapper rounded-0 border-0">
               <DropdownSeven
                  handlePriceDropChange={handlePriceDropChange}
                  handleSearchChange={handleSearchChange}
                  handleBedroomChange={handleBedroomChange}
                  handleBathroomChange={handleBathroomChange}
                  handlePriceChange={handlePriceChange}
                  maxPrice={maxPrice}
                  priceValue={priceValue}
                  handleResetFilter={handleResetFilter}
                  selectedAmenities={selectedAmenities}
                  handleAmenityChange={handleAmenityChange}
                  handleLocationChange={handleLocationChange}
                  handleStatusChange={handleStatusChange}
               />
            </div>
         </div>

         <div className="row gx-0">
            <div className="col-xxl-6 col-lg-5 order-lg-last">
               <div id="google-map-area" className="h-100">
                  <div className="google-map-home" id="contact-google-map">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83088.3595592641!2d-105.54557276330914!3d39.29302101722867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2sbd!4v1699764452737!5m2!1sen!2sbd"
                        width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" className="w-100 h-100">
                     </iframe>
                  </div>
               </div>
            </div>


            <div className="col-xxl-6 col-lg-7">
               <div className="pl-40 pr-40 pt-35 pb-60">
                  <div className="listing-type-filter border-0 p0">
                     <div className="wrapper">
                        <ul className="style-none d-flex flex-wrap align-items-center justify-content-center justify-content-xxl-between">
                           <li className="w-100">Select Type:</li>
                           {select_type.map((select, i) => (
                              <li key={i}>
                                 <Link
                                    href="#"
                                    className={selectedType === select ? "active" : ""}
                                    onClick={() => handleTypeClick(select)}
                                 >
                                    {select}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>

                  <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mt-50 mb-50">
                     <div>Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span
                        className="color-dark fw-500">{sortedProperties.length}</span> results</div>
                     <div className="d-flex align-items-center xs-mt-20">
                        <div className="short-filter d-flex align-items-center">
                           <div className="fs-16 me-2">Short by:</div>
                           <NiceSelect
                              className="nice-select rounded-0"
                              options={[
                                 { value: "newest", text: "Newest" },
                                 { value: "best_seller", text: "Best Seller" },
                                 { value: "best_match", text: "Best Match" },
                                 { value: "price_low", text: "Price Low" },
                                 { value: "price_high", text: "Price High" },
                              ]}
                              defaultCurrent={0}
                              onChange={handleTypeChange}
                              name=""
                              placeholder="" />
                        </div>
                        <Link href="/listing_16" className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                           data-bs-toggle="tooltip" title="Switch To Grid View"><i className="fa-regular fa-grid-2"></i></Link>
                     </div>
                  </div>

                  {currentItems.map((item: any) => (
                     <div key={item.id} className="listing-card-seven border-top border-bottom mb-50 wow fadeInUp">
                        <div className="d-flex flex-wrap layout-one">
                           <div className={`img-gallery position-relative z-1 overflow-hidden ${item.bg_img}`}>
                              <div className="tag bg-white rounded-0 text-dark fw-500">{item.tag}</div>
                              <div className="img-slider-btn">
                                 03 <i className="fa-regular fa-image"></i>
                                 <Fancybox
                                    options={{
                                       Carousel: {
                                          infinite: true,
                                       },
                                    }}
                                 >
                                    {item.carousel_thumb.map((thumb: any, index: any) => (
                                       <a key={index} className="d-block" data-fancybox="gallery7" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
                                    ))}
                                 </Fancybox>
                              </div>
                           </div>
                           <div className="property-info pe-0">
                              <Link href="/listing_details_02" className="title tran3s mb-15">{item.title}</Link>
                              <div className="address fs-16"><i className="bi bi-geo-alt"></i> {item.address} </div>
                              <div className="feature border-0 mt-45 mb-30">
                                 <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                    <li><strong>{item.property_info.sqft}</strong> sqft</li>
                                    <li><strong>{item.property_info.bed}</strong> bed</li>
                                    <li><strong>{item.property_info.bath}</strong> bath</li>
                                    <li><strong>{item.property_info.kitchen}</strong> Kitchen</li>
                                 </ul>
                              </div>
                              <div className="pl-footer pb-15 d-flex align-items-center justify-content-between">
                                 <strong className="price sm fw-500 w-100 color-dark m0">${item.price.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} {item.price_text && <>/ <sub>m</sub></>}</strong>
                                 <ul className="style-none d-flex action-icons on-top">
                                    <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
                                 </ul>
                                 <Link href="/listing_details_02" className="btn-four"><i className="bi bi-arrow-up-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}

                  <div className="pt-25">
                     <ReactPaginate
                        breakLabel="..."
                        nextLabel={<i className="fa-regular fa-chevron-right"></i>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={pageCount}
                        pageCount={pageCount}
                        previousLabel={<i className="fa-regular fa-chevron-left"></i>}
                        renderOnZeroPageCount={null}
                        className="pagination-two d-inline-flex align-items-center justify-content-center style-none"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ListingSeventeenArea
