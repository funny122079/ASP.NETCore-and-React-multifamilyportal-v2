"use client"
import agency_data from "@/data/inner-data/AgecyData";
import NiceSelect from "@/ui/NiceSelect"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import ReactPaginate from 'react-paginate';

import paginateIcon from "@/assets/images/icon/icon_46.svg";

const AgencyArea = () => {

   const selectHandler = (e: any) => { };
   const agency = agency_data;

   const itemsPerPage = 9;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = agency.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(agency.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % agency.length;
      setItemOffset(newOffset);
   };

   return (
      <div className="agency-section mt-130 xl-mt-100 mb-150 xl-mb-100">
         <div className="container">
            <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-35">
               <div>Showing <span className="color-dark fw-500">{itemOffset + 1}–{itemOffset + currentItems.length}</span> of <span
                  className="color-dark fw-500">{agency_data.length}</span> results</div>
               <div className="d-flex align-items-center xs-mt-20">
                  <div className="short-filter d-flex align-items-center">
                     <div className="fs-16 me-2">Short by:</div>
                     <NiceSelect
                        className="nice-select rounded-0"
                        options={[
                           { value: "01", text: "Pupular" },
                           { value: "02", text: "Best Rating" },
                           { value: "03", text: "Price Low" },
                           { value: "04", text: "Price High" },
                        ]}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name=""
                        placeholder="" />
                  </div>
               </div>
            </div>
            <div className="row gx-xxl-5">
               {currentItems.map((item) => (
                  <div key={item.id} className="col-lg-4 col-sm-6">
                     <div className="card-style-nine position-relative z-1 mb-50 lg-mb-30 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="tag bg-white position-absolute text-uppercase">{item.tag}</div>
                        <div className="logo-wrapper d-flex align-items-center justify-content-center">
                           <Image src={item.thumb} alt="" className="lazy-img" />
                        </div>
                        <div className="text-center pt-35">
                           <h6 className="agency-name">{item.title}</h6>
                           <ul className="rating style-none d-flex justify-content-center align-items-center">
                              <li><Rating initialValue={item.rating} allowFraction={true} size={16} readonly={true} /></li>
                              <li><span>{item.rating}</span></li>
                           </ul>
                           <p>{item.desc}</p>
                           <Link href="/agency_details" className="btn-eight w-100 rounded-0 tran3s">View Listing</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <ReactPaginate
               breakLabel="..."
               nextLabel={<Image src={paginateIcon} alt="" className="ms-2" />}
               onPageChange={handlePageClick}
               pageRangeDisplayed={3}
               pageCount={pageCount}
               previousLabel={<Image src={paginateIcon} alt="" className="ms-2" />}
               renderOnZeroPageCount={null}
               className="pagination-one square d-flex align-items-center justify-content-center style-none pt-40"
            />
         </div>
      </div>
   )
}

export default AgencyArea
