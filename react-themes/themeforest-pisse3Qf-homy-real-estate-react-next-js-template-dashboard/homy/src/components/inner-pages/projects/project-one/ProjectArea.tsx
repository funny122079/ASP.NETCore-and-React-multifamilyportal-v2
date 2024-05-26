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
            <div className="filter-nav-one">
               <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
                  <li className={selectedFilter === "*" ? "is-checked" : ""} onClick={handleFilterKeyChange("*")}>All</li>
                  <li className={selectedFilter === "apartments" ? "is-checked" : ""} onClick={handleFilterKeyChange("apartments")}>Apartments</li>
                  <li className={selectedFilter === "house" ? "is-checked" : ""} onClick={handleFilterKeyChange("house")}>House</li>
                  <li className={selectedFilter === "villa" ? "is-checked" : ""} onClick={handleFilterKeyChange("villa")}>VILLA</li>
                  <li className={selectedFilter === "flat" ? "is-checked" : ""} onClick={handleFilterKeyChange("flat")}>FLAT</li>
               </ul>
            </div>

            <div id="isotop-gallery-wrapper" className="isotop-gallery-wrapper grid-3column pt-40 xl-pt-10">
               <div className="grid-sizer"></div>
               {project_data.filter((items) => items.page === "project_1").map((item) => (
                  <div key={item.id} className={`isotop-item ${item.category}`}>
                     <div className="project-block-one mt-50 lg-mt-30">
                        <figure className="image-wrapper m0 position-relative z-1 overflow-hidden">
                           <Image src={item.thumb} alt="" className="w-100" />
                           <Link href="/project_details_01" className="btn-four inverse rounded-circle"><i
                              className="bi bi-arrow-up-right"></i></Link>
                        </figure>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ProjectArea
