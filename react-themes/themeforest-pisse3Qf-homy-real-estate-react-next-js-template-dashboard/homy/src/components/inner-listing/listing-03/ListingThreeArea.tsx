"use client"
import DropdownTwo from "@/components/search-dropdown/inner-dropdown/DropdownTwo";
import UseShortedProperty from "@/hooks/useShortedProperty";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import Image from "next/image";
import ReactPaginate from "react-paginate";

import featureIcon_1 from "@/assets/images/icon/icon_04.svg"
import featureIcon_2 from "@/assets/images/icon/icon_05.svg"
import featureIcon_3 from "@/assets/images/icon/icon_06.svg"

const ListingThreeArea = ({ style }: any) => {

   const itemsPerPage = 9;
   const page = "listing_4";

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

   return (

      <div className={`property-listing-six pb-170 xl-pb-120 ${style ? "pt-150 xl-pt-100" : "pt-110 md-pt-80 mt-150 xl-mt-120 bg-pink-two"}`}>
         <div className="container">
            {!style && <div className="search-wrapper-one layout-one bg position-relative mb-75 md-mb-50">
               <div className="bg-wrapper border-layout">
                  <DropdownTwo
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
            </div>}

            <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
               <div>Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span
                  className="color-dark fw-500">{sortedProperties.length}</span> results</div>
               <div className="d-flex align-items-center xs-mt-20">
                  <div className="short-filter d-flex align-items-center">
                     <div className="fs-16 me-2">Short by:</div>
                     <NiceSelect
                        className="nice-select"
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
                  <Link href={`/${style ? "listing_12" : "listing_04"}`} className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To List View"><i className="fa-regular fa-bars"></i></Link>
               </div>
            </div>

            <div className="row gx-xxl-5">
               {currentItems.map((item: any) => (
                  <div key={item.id} className="col-lg-4 col-md-6 d-flex mb-50 wow fadeInUp" data-wow-delay={item.data_delay_time}>
                     <div className={`listing-card-one border-25 h-100 w-100 ${style ? "border-layout" : ""}`}>
                        <div className="img-gallery p-15">
                           <div className="position-relative border-25 overflow-hidden">
                              <div className={`tag border-25 ${item.tag_bg}`}>{item.tag}</div>
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
                        <div className="property-info p-25">
                           <Link href="/listing_details_03" className="title tran3s">{item.title}</Link>
                           <div className="address">{item.address}</div>
                           <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                              <li className="d-flex align-items-center">
                                 <Image src={featureIcon_1} alt=""
                                    className="lazy-img icon me-2" />
                                 <span className="fs-16">{item.property_info.sqft} sqft</span>
                              </li>
                              <li className="d-flex align-items-center">
                                 <Image src={featureIcon_2} alt=""
                                    className="lazy-img icon me-2" />
                                 <span className="fs-16">{item.property_info.bed} bed</span>
                              </li>
                              <li className="d-flex align-items-center">
                                 <Image src={featureIcon_3} alt=""
                                    className="lazy-img icon me-2" />
                                 <span className="fs-16">{item.property_info.bath} bath</span>
                              </li>
                           </ul>
                           <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                              <strong className="price fw-500 color-dark">
                                 ${item.price.toLocaleString(undefined, {
                                    minimumFractionDigits: item.price_text ? 0 : 2,
                                    maximumFractionDigits: 2
                                 })}{item.price_text && <>/<sub>m</sub></>}
                              </strong>
                              <Link href="/listing_details_03" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="pt-50 md-pt-20 text-center">
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
   )
}

export default ListingThreeArea
