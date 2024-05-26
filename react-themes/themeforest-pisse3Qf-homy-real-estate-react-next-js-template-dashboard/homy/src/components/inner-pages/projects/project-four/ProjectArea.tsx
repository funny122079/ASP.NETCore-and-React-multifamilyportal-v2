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
      <div className="project-section-one mt-150 xl-mt-100 mb-170 xl-mb-100">
         <div className="container">
            <div className="filter-nav-one style-two border-line d-lg-flex align-items-center justify-content-between">
               <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
                  <li className={selectedFilter === "*" ? "is-checked" : ""} onClick={handleFilterKeyChange("*")}>All</li>
                  <li className={selectedFilter === "apartments" ? "is-checked" : ""} onClick={handleFilterKeyChange("apartments")}>Apartments</li>
                  <li className={selectedFilter === "house" ? "is-checked" : ""} onClick={handleFilterKeyChange("house")}>House</li>
                  <li className={selectedFilter === "villa" ? "is-checked" : ""} onClick={handleFilterKeyChange("villa")}>VILLA</li>
                  <li className={selectedFilter === "flat" ? "is-checked" : ""} onClick={handleFilterKeyChange("flat")}>FLAT</li>
               </ul>
               <ul className="style-none d-flex align-items-center justify-content-center social-icon md-mt-20">
                  <li>Share :</li>
                  <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                  <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                  <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
               </ul>
            </div>

            <div id="isotop-gallery-wrapper" className="isotop-gallery-wrapper grid-1column pt-40 lg-pt-30">
               <div className="grid-sizer"></div>
               {project_data.filter((items) => items.page === "project_4").map((item) => (
                  <div key={item.id} className={`isotop-item house flat ${item.category}`}>
                     <div className="project-block-three mt-80 lg-mt-50">
                        <div className="row gx-xxl-5 align-items-center">
                           <div className="col-lg-6">
                              <figure className="image-wrapper position-relative z-1 overflow-hidden">
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
                           </div>
                           <div className="col-lg-6 ms-auto">
                              <div className="caption ps-xxl-5">
                                 <div className="tag fw-500 text-uppercase">{item.category}</div>
                                 <h3><Link href="/project_details_01">{item.title}</Link></h3>
                                 <p className="fs-24 pt-45 lg-pt-30 md-pt-10 pb-50 lg-pb-30 md-pb-10">{item.desc}</p>
                                 <Link href="/project_details_01" className="btn-thirteen rounded-circle"><i className="fa-thin fa-arrow-up-right"></i></Link>
                              </div>
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
