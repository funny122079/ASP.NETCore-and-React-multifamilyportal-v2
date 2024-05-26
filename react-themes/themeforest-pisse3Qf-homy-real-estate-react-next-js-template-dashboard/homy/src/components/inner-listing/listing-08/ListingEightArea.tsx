"use client"
import DropdownThree from "@/components/search-dropdown/inner-dropdown/DropdownThree";
import UseShortedProperty from "@/hooks/useShortedProperty";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import Image from "next/image";
import ReactPaginate from "react-paginate";

import featureIcon_1 from "@/assets/images/icon/icon_04.svg"
import featureIcon_2 from "@/assets/images/icon/icon_05.svg"
import featureIcon_3 from "@/assets/images/icon/icon_06.svg"
import icon from "@/assets/images/icon/icon_46.svg"
import Fancybox from "@/components/common/Fancybox";

const ListingEightArea = ({ style }: any) => {

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
      <div className={`property-listing-six pb-200 xl-pb-120 ${style ? "pt-120 xl-pt-100" : "pt-200 xl-pt-150"}`}>
         <div className="container container-large">
            {!style && <div className="search-wrapper-one layout-one bg position-relative mb-75 md-mb-50">
               <div className="bg-wrapper rounded-0 border-0">
                  <DropdownThree
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

            <div className={`listing-header-filter d-sm-flex justify-content-between align-items-center lg-mb-30 ${style ? "mb-50" : "mb-40"}`}>
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
                  <Link href={`/${style ? "listing_09" : "listing_07"}`} className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To Grid View"><i className="fa-regular fa-grid-2"></i></Link>
               </div>
            </div>

            {currentItems.map((item: any) => (
               <div key={item.id} className="listing-card-seven grey-bg mb-50 wow fadeInUp">
                  <div className="d-flex flex-wrap layout-two">
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
                                 <a key={index} className="d-block" data-fancybox="gallery4" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
                              ))}
                           </Fancybox>
                        </div>
                     </div>
                     <div className="property-info">
                        <Link href="/listing_details_01" className="title tran3s mb-15">{item.title}</Link>
                        <div className="address">{item.address}</div>
                        <div className="feature border-0 mt-55 md-mt-40 mb-35 md-mb-20">
                           <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                              <li><strong>{item.property_info.sqft}</strong> sqft</li>
                              <li><strong>{item.property_info.bed}</strong> bed</li>
                              <li><strong>{item.property_info.bath}</strong> bath</li>
                              <li><strong>{item.property_info.kitchen}</strong> Kitchen</li>
                              <li><strong>{item.property_info.parking_lot}</strong> Parking Lot</li>
                              <li><strong>{item.property_info.garden}</strong> Garden</li>
                           </ul>
                        </div>
                        <div className="pl-footer pb-15 d-flex flex-wrap align-items-center justify-content-between">
                           <strong className="price fw-500 color-dark me-auto">${item.price.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}{item.price_text && <>/<sub>m</sub></>}</strong>
                           <ul className="style-none d-flex action-icons on-top">
                              <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
                              <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
                              <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
                           </ul>
                           <Link href="/listing_details_01" className="btn-four"><i className="bi bi-arrow-up-right"></i></Link>
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
               className="pagination-one square d-flex align-items-center justify-content-center style-none pt-60 lg-pt-20"
            />
         </div>
      </div>
   )
}

export default ListingEightArea
