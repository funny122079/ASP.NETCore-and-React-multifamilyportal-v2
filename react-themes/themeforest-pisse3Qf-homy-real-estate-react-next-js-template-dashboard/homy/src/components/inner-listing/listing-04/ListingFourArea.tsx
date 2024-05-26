"use client"
import DropdownTwo from "@/components/search-dropdown/inner-dropdown/DropdownTwo";
import UseShortedProperty from "@/hooks/useShortedProperty";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import Fancybox from "@/components/common/Fancybox";

const ListingFourArea = () => {

   const itemsPerPage = 6;
   const page = "listing_6";

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
      <div className="property-listing-six bg-pink-two pt-110 md-pt-80 pb-170 xl-pb-120 mt-150 xl-mt-120">
         <div className="container">
            <div className="search-wrapper-one layout-one bg position-relative mb-75 md-mb-50">
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
            </div>

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
                  <Link href="/listing_03" className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To Grid View"><i className="fa-regular fa-grid-2"></i></Link>
               </div>
            </div>

            {currentItems.map((item: any) => (
               <div key={item.id} className="listing-card-seven border-20 p-20 mb-50 wow fadeInUp">
                  <div className="d-flex flex-wrap layout-one">
                     <div className={`img-gallery position-relative z-1 border-20 overflow-hidden ${item.bg_img}`}>
                        <div className={`tag border-20 ${item.tag_bg}`}>{item.tag}</div>
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
                                 <a key={index} className="d-block" data-fancybox="gallery2" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
                              ))}
                           </Fancybox>
                        </div>
                     </div>
                     <div className="property-info">
                        <Link href="/listing_details_04" className="title tran3s mb-15">{item.title}</Link>
                        <div className="address">{item.address}</div>
                        <div className="feature mt-30 mb-30 pt-30 pb-5">
                           <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                              <li><strong>{item.property_info.sqft}</strong> sqft</li>
                              <li><strong>{item.property_info.bed}</strong> bed</li>
                              <li><strong>{item.property_info.bath}</strong> bath</li>
                              <li><strong>{item.property_info.kitchen}</strong> Kitchen</li>
                              <li><strong>{item.property_info.parking_lot}</strong> Parking Lot</li>
                              <li><strong>{item.property_info.garden}</strong> Garden</li>
                           </ul>
                        </div>
                        <div className="pl-footer d-flex flex-wrap align-items-center justify-content-between">
                           <strong className="price fw-500 color-dark me-auto">${item.price.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}{item.price_text && <>/<sub>m</sub></>}</strong>
                           <ul className="style-none d-flex action-icons on-top">
                              <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
                              <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
                              <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
                           </ul>
                           <Link href="/listing_details_04" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            ))}

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

export default ListingFourArea
