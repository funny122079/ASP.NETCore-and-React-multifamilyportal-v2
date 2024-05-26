"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import UseSticky from "@/hooks/UseSticky"
import LoginModal from "@/modals/LoginModal"
import Offcanvas from "./Menu/Offcanvas"

import logo_1 from "@/assets/images/logo/logo_06.svg";

const HeaderThree = () => {
   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);

   return (
      <>
         <header className={`theme-main-menu menu-overlay menu-style-five sticky-menu ${sticky ? "fixed" : ""}`}>
            <div className="inner-content gap-one">
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center">
                     <div className="logo order-lg-0">
                        <Link href="/" className="d-flex align-items-center">
                           <Image src={logo_1} alt="" />
                        </Link>
                     </div>

                     <div className="right-widget ms-auto me-3 me-lg-0 order-lg-4">
                        <ul className="d-flex align-items-center style-none">
                           <li className="d-flex align-items-center login-btn-one">
                              <i className="fa-regular fa-lock"></i><Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="fw-500 tran3s">Login <span className="d-none d-sm-inline-block">/ Sign up</span></Link>
                           </li>
                           <li className="d-none d-md-inline-block ms-3 ms-xl-4 me-xl-4">
                              <Link href="/dashboard/add-property" className="btn-five md rounded-0" target="_blank"><span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i></Link>
                           </li>
                           <li className="d-none d-xl-block"><button onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }} className="sidenavbtn rounded-circle tran3s" type="button"><i className="fa-sharp fa-light fa-bars-filter"></i></button></li>
                        </ul>
                     </div>

                     <div className="order-lg-2 d-none d-xxl-block">
                        <p className="m0 email-text ps-5 pe-5">Our Email <Link href="#" className="tran3s fw-500 ms-2">askhomy@demo.com</Link></p>
                     </div>

                     <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-3">
                        <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                           aria-label="Toggle navigation">
                           <span></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                           <NavMenu />
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </header>

         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <LoginModal />
      </>
   )
}

export default HeaderThree
