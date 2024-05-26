"use client"
import Image from "next/image"
import Link from "next/link"
import ReactPaginate from "react-paginate"
import NiceSelect from "@/ui/NiceSelect"
import UseShortedProperty from "@/hooks/useShortedProperty"
import DropdownOne from "@/components/search-dropdown/inner-dropdown/DropdownOne"

import icon from "@/assets/images/icon/icon_46.svg"
import featureIcon_1 from "@/assets/images/icon/icon_32.svg"
import featureIcon_2 from "@/assets/images/icon/icon_33.svg"
import featureIcon_3 from "@/assets/images/icon/icon_34.svg"

const ListingFiveArea = () => {

   const itemsPerPage = 6;
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
   } = UseShortedProperty({ itemsPerPage, page });

   const handleResetFilter = () => {
      resetFilters();
   };

   return (
      <div className="property-listing-six pt-200 xl-pt-150 pb-200 xl-pb-120">
         <div className="container container-large">
            <div className="row">
               <div className="col-lg-8">
                  <div className="ps-xxl-5">
                     <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
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
                           <Link href="/listing_06" className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                              data-bs-toggle="tooltip" title="Switch To List View"><i
                                 className="fa-regular fa-bars"></i></Link>
                        </div>
                     </div>

                     <div className="row gx-xxl-5">
                        {currentItems.map((item: any) => (
                           <div key={item.id} className="col-md-6 d-flex mb-50 wow fadeInUp" data-wow-delay={item.data_delay_time}>
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
                                    <Link href="/listing_details_05" className="title tran3s">{item.title}</Link>
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
                                       <strong className="price fw-500 color-dark">
                                          ${item.price.toLocaleString(undefined, {
                                             minimumFractionDigits: item.price_text ? 0 : 2,
                                             maximumFractionDigits: 2
                                          })}{item.price_text && <>/<sub>m</sub></>}
                                       </strong>                                        <Link href="/listing_details_05" className="btn-four"><i
                                          className="bi bi-arrow-up-right"></i></Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>

                     <ReactPaginate
                        breakLabel="..."
                        nextLabel={<Image src={icon} alt="" className="ms-2" />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={pageCount}
                        pageCount={pageCount}
                        previousLabel={<Image src={icon} alt="" className="ms-2" />}
                        renderOnZeroPageCount={null}
                        className="pagination-one square d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-60 lg-pt-30"
                     />
                  </div>
               </div>

               <div className="col-lg-4 order-lg-first">
                  <div className="advance-search-panel dot-bg md-mt-80">
                     <div className="main-bg rounded-0">
                        <DropdownOne
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
               </div>
            </div>
         </div>
      </div>
   )
}

export default ListingFiveArea
