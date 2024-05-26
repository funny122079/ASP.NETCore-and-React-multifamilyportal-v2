"use client"
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import project_data from "@/data/inner-data/ProjectData";
import Image from "next/image";
import Link from "next/link";

const Fancybox = dynamic(() => import("@/components/common/Fancybox"), { ssr: false });

const ProjectArea = () => {
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

  const handleFilterKeyChange = (key:any) => () => {
    setFilterKey(key);
    setSelectedFilter(key);
  };

   return (
      <div className="project-section-one mt-150 xl-mt-100">
         <div className="container">
            <div className="filter-nav-one style-two">
               <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
                  <li className={selectedFilter === "*" ? "is-checked" : ""} onClick={handleFilterKeyChange("*")}>All</li>
                  <li className={selectedFilter === "apartments" ? "is-checked" : ""} onClick={handleFilterKeyChange("apartments")}>Apartments</li>
                  <li className={selectedFilter === "house" ? "is-checked" : ""} onClick={handleFilterKeyChange("house")}>House</li>
                  <li className={selectedFilter === "villa" ? "is-checked" : ""} onClick={handleFilterKeyChange("villa")}>VILLA</li>
                  <li className={selectedFilter === "flat" ? "is-checked" : ""} onClick={handleFilterKeyChange("flat")}>FLAT</li>
               </ul>
            </div>

            <div id="isotop-gallery-wrapper" className="isotop-gallery-wrapper grid-2column pt-10">
               <div className="grid-sizer"></div>
               {project_data.filter((items) => items.page === "project_3").map((item) => (
                  <div key={item.id} className={`isotop-item ${item.category}`}>
                     <div className="project-block-two mt-80 lg-mt-40">
                        <figure className="image-wrapper m0 position-relative z-1 overflow-hidden">
                           <div className="tag fw-500 text-uppercase">{item.tag}</div>
                           <Fancybox
                              options={{
                                 Carousel: {
                                    infinite: true,
                                 },
                              }}
                           >
                              <a className="d-block position-relative" data-fancybox="gallery17" data-caption={item.title} href={`/assets/images/project/img_${item.fancybox}.jpg`}>
                                 <Image src={item.thumb} alt="" className="w-100 tran5s" />
                              </a>
                           </Fancybox>
                        </figure>
                        <div className="caption">
                           <div className="d-flex justify-content-between align-items-center">
                              <div className="title">
                                 <div className="date position-relative">{item.date}</div>
                                 <Link href="/project_details_01"><h4 className="tran3s">{item.title}</h4></Link>
                              </div>
                              <Link href="/project_details_01" className="btn-thirteen rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ProjectArea
