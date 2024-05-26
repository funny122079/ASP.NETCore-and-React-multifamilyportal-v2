"use client"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from 'next/navigation'

import dashboardLogo from "@/assets/images/logo/logo_01.svg";
import dashboardIconActive_1 from "@/assets/images/dashboard/icon/icon_1_active.svg";
import dashboardIcon_1 from "@/assets/images/dashboard/icon/icon_1.svg";
import dashboardIconActive_2 from "@/assets/images/dashboard/icon/icon_2_active.svg";
import dashboardIcon_2 from "@/assets/images/dashboard/icon/icon_2.svg";
import dashboardIconActive_3 from "@/assets/images/dashboard/icon/icon_3_active.svg";
import dashboardIcon_3 from "@/assets/images/dashboard/icon/icon_3.svg";
import dashboardIconActive_4 from "@/assets/images/dashboard/icon/icon_4_active.svg";
import dashboardIcon_4 from "@/assets/images/dashboard/icon/icon_4.svg";
import dashboardIconActive_5 from "@/assets/images/dashboard/icon/icon_5_active.svg";
import dashboardIcon_5 from "@/assets/images/dashboard/icon/icon_5.svg";
import dashboardIconActive_6 from "@/assets/images/dashboard/icon/icon_6_active.svg";
import dashboardIcon_6 from "@/assets/images/dashboard/icon/icon_6.svg";
import dashboardIconActive_7 from "@/assets/images/dashboard/icon/icon_7_active.svg";
import dashboardIcon_7 from "@/assets/images/dashboard/icon/icon_7.svg";
import dashboardIconActive_8 from "@/assets/images/dashboard/icon/icon_8_active.svg";
import dashboardIcon_8 from "@/assets/images/dashboard/icon/icon_8.svg";
import dashboardIconActive_9 from "@/assets/images/dashboard/icon/icon_9_active.svg";
import dashboardIcon_9 from "@/assets/images/dashboard/icon/icon_9.svg";
import dashboardIconActive_10 from "@/assets/images/dashboard/icon/icon_10_active.svg";
import dashboardIcon_10 from "@/assets/images/dashboard/icon/icon_10.svg";
import dashboardIcon_11 from "@/assets/images/dashboard/icon/icon_41.svg";

const DashboardHeaderOne = ({ isActive, setIsActive }: any) => {
   const pathname = usePathname();

   return (
      <aside className={`dash-aside-navbar ${isActive ? "show" : ""}`}>
         <div className="position-relative">
            <div className="logo d-md-block d-flex align-items-center justify-content-between plr bottom-line pb-30">
               <Link href="/dashboard-index">
                  <Image src={dashboardLogo} alt="" />
               </Link>
               <button onClick={() => setIsActive(false)} className="close-btn d-block d-md-none"><i className="fa-light fa-circle-xmark"></i></button>
            </div>
            <nav className="dasboard-main-nav pt-30 pb-30 bottom-line">
               <ul className="style-none">
                  <li className="plr"><Link href="/dashboard/dashboard-index" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/dashboard-index' ? 'active' : ''}`}>
                     <Image src={pathname === '/dashboard/dashboard-index' ? dashboardIconActive_1 : dashboardIcon_1} alt="" />
                     <span>Dashboard</span>
                  </Link></li>
                  <li className="plr"><Link href="/dashboard/message" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/message' ? 'active' : ''}`}>
                     <Image src={pathname === '/dashboard/message' ? dashboardIconActive_2 : dashboardIcon_2} alt="" />
                     <span>Message</span>
                  </Link></li>
                  <li className="bottom-line pt-30 lg-pt-20 mb-40 lg-mb-30"></li>
                  <li><div className="nav-title">Profile</div></li>
                  <li className="plr"><Link href="/dashboard/profile" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/profile' ? 'active' : ''}`}>
                     <Image src={pathname === '/dashboard/profile' ? dashboardIconActive_3 : dashboardIcon_3} alt="" />
                     <span>Profile</span>
                  </Link></li>
                  <li className="plr"><Link href="/dashboard/account-settings" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/account-settings' ? 'active' : ''}`}>
                     <Image src={pathname === '/dashboard/account-settings' ? dashboardIconActive_4 : dashboardIcon_4} alt="" />
                     <span>Account Settings</span>
                  </Link></li>
                  <li className="plr"><Link href="/dashboard/membership" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/membership' ? 'active' : ''}`}>
                     <Image src={pathname === '/dashboard/membership' ? dashboardIconActive_5 : dashboardIcon_5} alt="" />
                     <span>Membership</span>
                  </Link></li>
                  <li className="bottom-line pt-30 lg-pt-20 mb-40 lg-mb-30"></li>
                  <li><div className="nav-title">Listing</div></li>
                  <li className="plr"><Link href="/dashboard/properties-list" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/properties-list' ? 'active' : ''}`}>
                     <Image src={pathname === '/dashboard/properties-list' ? dashboardIconActive_6 : dashboardIcon_6} alt="" />
                     <span>My Properties</span>
                  </Link></li>
                  <li className="plr"><Link href="/dashboard/add-property" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/add-property' ? 'active' : ''}`}>
                     <Image src={pathname === '/dashboard/add-property' ? dashboardIconActive_7 : dashboardIcon_7} alt="" />
                     <span>Add New Property</span>
                  </Link></li>
                  <li className="plr"><Link href="/dashboard/favourites" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/favourites' ? 'active' : ''}`}>
                     <Image src={pathname === '/dashboard/favourites' ? dashboardIconActive_8 : dashboardIcon_8} alt="" />
                     <span>Favourites</span>
                  </Link></li>
                  <li className="plr"><Link href="/dashboard/saved-search" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/saved-search' ? 'active' : ''}`}>
                     <Image src={pathname === '/dashboard/saved-search' ? dashboardIconActive_9 : dashboardIcon_9} alt="" />
                     <span>Saved Search</span>
                  </Link></li>
                  <li className="plr"><Link href="/dashboard/review" className={`d-flex w-100 align-items-center ${pathname === '/dashboard/review' ? 'active' : ''}`}>
                     <Image src={pathname === '/dashboard/review' ? dashboardIconActive_10 : dashboardIcon_10} alt="" />
                     <span>Reviews</span>
                  </Link></li>
               </ul>
            </nav>
            <div className="profile-complete-status bottom-line pb-35 plr">
               <div className="progress-value fw-500">82%</div>
               <div className="progress-line position-relative">
                  <div className="inner-line" style={{ width: "80%" }}></div>
               </div>
               <p>Profile Complete</p>
            </div>

            <div className="plr">
               <Link href="#" className="d-flex w-100 align-items-center logout-btn">
                  <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle"><Image src={dashboardIcon_11} alt="" /></div>
                  <span>Logout</span>
               </Link>
            </div>
         </div>
      </aside>
   )
}

export default DashboardHeaderOne;
