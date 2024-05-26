"use client"
import Image from "next/image"
import Link from "next/link"
import Notification from "./Notification";
import Profile from "./Profile";
import { useState } from "react";
import DashboardHeaderOne from "./DashboardHeaderOne";

import dashboardIcon_1 from "@/assets/images/dashboard/icon/icon_43.svg";
import dashboardIcon_2 from "@/assets/images/dashboard/icon/icon_11.svg";
import dashboardAvatar from "@/assets/images/dashboard/avatar_01.jpg";

const DashboardHeaderTwo = ({title}:any) => {

   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header className="dashboard-header">
            <div className="d-flex align-items-center justify-content-end">
               <h4 className="m0 d-none d-lg-block">{title}</h4>
               <button onClick={() => setIsActive(true)} className="dash-mobile-nav-toggler d-block d-md-none me-auto">
                  <span></span>
               </button>
               <form onSubmit={(e) => e.preventDefault()} className="search-form ms-auto">
                  <input type="text" placeholder="Search here.." />
                  <button><Image src={dashboardIcon_1} alt="" className="lazy-img m-auto" /></button>
               </form>
               <div className="profile-notification position-relative dropdown-center ms-3 ms-md-5 me-4">
                  <button className="noti-btn dropdown-toggle" type="button" id="notification-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                     <Image src={dashboardIcon_2} alt="" className="lazy-img" />
                     <div className="badge-pill"></div>
                  </button>
                  <Notification />
               </div>
               <div className="d-none d-md-block me-3">
                  <Link href="/add-property" className="btn-two"><span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i></Link>
               </div>
               <div className="user-data position-relative">
                  <button className="user-avatar online position-relative rounded-circle dropdown-toggle" type="button" id="profile-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                     <Image src={dashboardAvatar} alt="" className="lazy-img" />
                  </button>
                  <Profile />
               </div>
            </div>
         </header>
         <DashboardHeaderOne isActive={isActive} setIsActive={setIsActive} />
      </>
   )
}

export default DashboardHeaderTwo
