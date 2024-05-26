"use client"
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

const Fancybox = dynamic(() => import("@/components/common/Fancybox"), { ssr: false });

import agencyThumb_1 from "@/assets/images/listing/img_69.jpg";
import agencyThumb_2 from "@/assets/images/listing/img_70.jpg";
import agencyThumb_3 from "@/assets/images/listing/img_71.jpg";
import agencyThumb_4 from "@/assets/images/listing/img_72.jpg";

interface DataType {
   id: number,
   thumb: StaticImageData;
   img_slider: string[];
   total_img: number;
   price: JSX.Element;
   address: string;
   category: string;
}[];

const tab_data: DataType[] = [
   {
      id: 1,
      thumb: agencyThumb_1,
      category: "rent",
      img_slider: ["1", "2", "3"],
      total_img: 3,
      price: (<>$2,210/ <sub>m</sub></>),
      address: "6391 Elgin St. Celina"
   },
   {
      id: 2,
      thumb: agencyThumb_2,
      category: "sell",
      img_slider: ["1", "2", "3"],
      total_img: 3,
      price: (<>$2,210/ <sub>m</sub></>),
      address: "6391 Elgin St. Celina"
   },
   {
      id: 3,
      thumb: agencyThumb_3,
      category: "sell",
      img_slider: ["1", "2", "3"],
      total_img: 3,
      price: (<>$1,23,710</>),
      address: "6391 Elgin St. Celina"
   },
   {
      id: 4,
      thumb: agencyThumb_4,
      category: "rent",
      img_slider: ["1", "2", "3"],
      total_img: 3,
      price: (<>$78,420</>),
      address: "6391 Elgin St. Celina"
   },
]

const AgencyNavTabs = () => {

   // Init one ref to store the future Isotope object
   const isotope = useRef<{ arrange?: Function; destroy?: Function } | null>(null);
   // Store the filter keyword in a state
   const [filterKey, setFilterKey] = useState("*");

   // Initialize an Isotope object with configs
   useEffect(() => {
      if (typeof window !== "undefined") {
         const Isotope = require("isotope-layout");

         isotope.current = new Isotope(".isotop-gallery-wrapper", {
            itemSelector: ".isotop-item",
            layoutMode: "fitRows",
         });

         // Cleanup
         return () => {
            isotope.current?.destroy?.();
         };
      }
   }, []);

   // Handling filter key change
   useEffect(() => {
      if (filterKey === "*") isotope.current?.arrange?.({ filter: "*" });
      else isotope.current?.arrange?.({ filter: `.${filterKey}` });
   }, [filterKey]);

   const [selectedFilter, setSelectedFilter] = useState("*");

   const handleFilterKeyChange = (key: any) => () => {
      setFilterKey(key);
      setSelectedFilter(key);
   };

   return (
      <div className="agent-property-listing bottom-line-dark pb-20 mb-80 xl-mb-50">
         <div className="d-sm-flex justify-content-between align-items-center mb-40 xs-mb-20">
            <h4 className="mb-10">Listings</h4>
            <div className="filter-nav-one xs-mt-40">
               <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
                  <li className={selectedFilter === "*" ? "is-checked" : ""} onClick={handleFilterKeyChange("*")}>All</li>
                  <li className={selectedFilter === "sell" ? "is-checked" : ""} onClick={handleFilterKeyChange("sell")}>Sell</li>
                  <li className={selectedFilter === "rent" ? "is-checked" : ""} onClick={handleFilterKeyChange("rent")}>Rent</li>
               </ul>
            </div>
         </div>

         <div id="isotop-gallery-wrapper" className="isotop-gallery-wrapper grid-2column">
            <div className="grid-sizer"></div>
            {tab_data.map((item) => (
               <div key={item.id} className={`isotop-item ${item.category}`}>
                  <div className="listing-card-one shadow-none style-two mb-50">
                     <div className="img-gallery">
                        <div className="position-relative overflow-hidden">
                           <div className="tag bg-white text-dark fw-500">FOR {item.category}</div>
                           <Image src={item.thumb} className="w-100" alt="..." />
                           <div className="img-slider-btn">
                              0{item.total_img} <i className="fa-regular fa-image"></i>
                              <Fancybox
                                 options={{
                                    Carousel: {
                                       infinite: true,
                                    },
                                 }}
                              >
                                 {item.img_slider.map((thumb: any, index: any) => (
                                    <a key={index} className="d-block" data-fancybox="gallery11" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
                                 ))}
                              </Fancybox>
                           </div>
                        </div>
                     </div>
                     <div className="property-info d-flex justify-content-between align-items-end pt-30">
                        <div>
                           <strong className="price fw-500 color-dark">{item.price}</strong>
                           <div className="address pt-5 m0">{item.address}</div>
                        </div>
                        <Link href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default AgencyNavTabs
