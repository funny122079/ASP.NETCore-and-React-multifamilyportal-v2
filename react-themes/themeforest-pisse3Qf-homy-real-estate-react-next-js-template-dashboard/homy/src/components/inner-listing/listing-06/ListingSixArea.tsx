"use client"
import Image from "next/image"
import Link from "next/link"
import ReactPaginate from "react-paginate"
import NiceSelect from "@/ui/NiceSelect"
import UseShortedProperty from "@/hooks/useShortedProperty"
import DropdownOne from "@/components/search-dropdown/inner-dropdown/DropdownOne"

import icon from "@/assets/images/icon/icon_46.svg"
import Fancybox from "@/components/common/Fancybox"

const ListingSixArea = () => {

   const itemsPerPage = 5;
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
                           <Link href="/listing_05" className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                              data-bs-toggle="tooltip" title="Switch To Grid View"><i
                                 className="fa-regular fa-grid-2"></i></Link>
                        </div>
                     </div>

                     {currentItems.map((item: any) => (
                        <div key={item.id} className="listing-card-seven grey-bg mb-50 wow fadeInUp">
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
                                          <a key={index} className="d-block" data-fancybox="gallery3" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
                                       ))}
                                    </Fancybox>
                                 </div>
                              </div>
                              <div className="property-info pe-4 ps-4">
                                 <Link href="/listing_details_06" className="title tran3s mb-15">{item.title}</Link>
                                 <div className="address">{item.address}</div>
                                 <div className="feature border-0 mt-45 mb-30">
                                    <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                       <li><strong>{item.property_info.sqft}</strong> sqft</li>
                                       <li><strong>{item.property_info.bed}</strong> bed</li>
                                       <li><strong>{item.property_info.bath}</strong> bath</li>
                                       <li><strong>{item.property_info.kitchen}</strong> Kitchen</li>
                                    </ul>
                                 </div>
                                 <div className="pl-footer pb-15 d-flex flex-wrap align-items-center justify-content-between">
                                    <strong className="price fw-500 color-dark me-auto">${item.price.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}{item.price_text && <>/<sub>m</sub></>}</strong>
                                    <ul className="style-none d-flex action-icons me-4">
                                       <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
                                       <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
                                       <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
                                    </ul>
                                    <Link href="/listing_details_06" className="btn-four">
                                       <i className="bi bi-arrow-up-right"></i>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}

                     <ReactPaginate
                        breakLabel="..."
                        nextLabel={<Image src={icon} alt="" className="ms-2" />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={pageCount}
                        pageCount={pageCount}
                        previousLabel={<Image src={icon} alt="" className="ms-2" />}
                        renderOnZeroPageCount={null}
                        className="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-30"
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

export default ListingSixArea
