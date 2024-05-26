"use client"
import DropdownSeven from "@/components/search-dropdown/inner-dropdown/DropdownSeven"
import UseShortedProperty from "@/hooks/useShortedProperty";
import NiceSelect from "@/ui/NiceSelect";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";

import featureIcon_1 from "@/assets/images/icon/icon_32.svg"
import featureIcon_2 from "@/assets/images/icon/icon_33.svg"
import featureIcon_3 from "@/assets/images/icon/icon_34.svg"


const select_type: string[] = ["All", "Apartments", "Villa", "Mortgage", "Loft", "Home",];

const ListingSixteenArea = () => {

   const itemsPerPage = 4;
   const page = "listing_2";

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
                        <ul
                           className="style-none d-flex flex-wrap align-items-center justify-content-center justify-content-xxl-between">
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

                  <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mt-50 mb-30">
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
                        <Link href="/listing_17" className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                           data-bs-toggle="tooltip" title="Switch To List View"><i className="fa-regular fa-bars"></i></Link>
                     </div>
                  </div>

                  <div className="row gx-xxl-5">
                     {currentItems.map((item: any) => (
                        <div key={item.id} className="col-md-6 d-flex mb-40 wow fadeInUp">
                           <div className="listing-card-one style-two shadow-none h-100 w-100">
                              <div className="img-gallery">
                                 <div className="position-relative overflow-hidden">
                                    <div className="tag fw-500">{item.tag}</div>
                                    <Link href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></Link>
                                    <div id={`carousel${item.carousel}`} className="carousel slide">
                                       <div className="carousel-indicators">
                                          <button type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                          <button type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                                          <button type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                                       </div>
                                       <div className="carousel-inner">
                                          {item.carousel_thumb.map((item: any, i: any) => (
                                             <div key={i} className={`carousel-item ${item.active}`} data-bs-interval="1000000">
                                                <Link href="/listing_details_01" className="d-block"><Image src={item.img} className="w-100" alt="..." /></Link>
                                             </div>
                                          ))}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="property-info pt-20">
                                 <Link href="/listing_details_04" className="title tran3s">{item.title}</Link>
                                 <div className="address">{item.address}</div>
                                 <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                                    <li className="d-flex align-items-center">
                                       <Image src={featureIcon_1} alt=""
                                          className="lazy-img icon me-2" />
                                       <span className="fs-16"><span className="color-dark">{item.property_info.sqft}</span> sqft</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                       <Image src={featureIcon_2} alt=""
                                          className="lazy-img icon me-2" />
                                       <span className="fs-16"><span className="color-dark">{item.property_info.bed}</span> bed</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                       <Image src={featureIcon_3} alt=""
                                          className="lazy-img icon me-2" />
                                       <span className="fs-16"><span className="color-dark">{item.property_info.bath}</span> bath</span>
                                    </li>
                                 </ul>
                                 <div
                                    className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                                    <strong className="price fw-500 color-dark">${item.price.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} {item.price_text && <>/ <sub>m</sub></>}</strong>
                                    <Link href="/listing_details_04" className="btn-four">
                                       <i className="bi bi-arrow-up-right"></i></Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

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

export default ListingSixteenArea;
