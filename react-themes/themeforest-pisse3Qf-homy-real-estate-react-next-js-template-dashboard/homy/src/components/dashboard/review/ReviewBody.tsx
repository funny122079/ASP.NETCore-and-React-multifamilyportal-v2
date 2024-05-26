"use client"
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo"
import NiceSelect from "@/ui/NiceSelect";
import UserReview from "./UserReview";
import Image from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/images/icon/icon_46.svg";

const ReviewBody = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="dashboard-body">
         <div className="position-relative">
            <DashboardHeaderTwo title="Review" />
            <h2 className="main-title d-block d-lg-none">Reviews</h2>

            <div className="d-sm-flex align-items-center justify-content-between mb-25">
               <div className="fs-16">Showing <span className="color-dark fw-500">1–5</span> of <span
                  className="color-dark fw-500">40</span> results</div>
               <div className="d-flex ms-auto xs-mt-30">
                  <div className="short-filter d-flex align-items-center ms-sm-auto">
                     <div className="fs-16 me-2">Short by:</div>
                     <NiceSelect className="nice-select"
                        options={[
                           { value: "1", text: "Newest" },
                           { value: "2", text: "Best Rating" },
                           { value: "3", text: "Rating Low" },
                           { value: "4", text: "Rating High" },
                        ]}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name=""
                        placeholder="" />
                  </div>
               </div>
            </div>

            <div className="bg-white card-box pt-0 border-20">
               <div className="theme-details-one">
                  <div className="review-panel-one">
                     <div className="position-relative z-1">
                        <div className="review-wrapper">
                           <UserReview />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <ul style={{ marginLeft: "15px" }} className="pagination-one d-flex align-items-center style-none pt-40">
               <li className="me-3"><Link href="#">1</Link></li>
               <li className="selected"><Link href="#">2</Link></li>
               <li><Link href="#">3</Link></li>
               <li><Link href="#">4</Link></li>
               <li>....</li>
               <li className="ms-2"><Link href="#" className="d-flex align-items-center">
                  Last <Image src={icon_1} alt="" className="ms-2" /></Link></li>
            </ul>
         </div>
      </div>
   )
}

export default ReviewBody
