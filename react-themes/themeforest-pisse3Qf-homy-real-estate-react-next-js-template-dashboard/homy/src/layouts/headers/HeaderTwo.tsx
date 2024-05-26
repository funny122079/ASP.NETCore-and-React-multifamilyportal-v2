"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import UseSticky from "@/hooks/UseSticky"
import LoginModal from "@/modals/LoginModal"
import Offcanvas from "./Menu/Offcanvas"
import HeaderSearchbar from "./Menu/HeaderSearchbar"

import logo_1 from "@/assets/images/logo/logo_02.svg";
import logo_2 from "@/assets/images/logo/logo_04.svg";
import logo_3 from "@/assets/images/logo/logo_06.svg";

const HeaderTwo = ({ style_1, style_2 }: any) => {
   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);

   return (
      <>
         <div className={`theme-main-menu menu-overlay sticky-menu ${style_2 ? "menu-style-four" : style_1 ? "menu-style-three" : "menu-style-two"} ${sticky ? "fixed" : ""}`}>
            <div className={`inner-content ${style_2 ? "gap-two" : "gap-one"}`}>
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center">
                     <div className="logo order-lg-0">
                        <Link href="/" className="d-flex align-items-center">
                           <Image src={style_2 ? logo_3 : style_1 ? logo_2 : logo_1} alt="" />
                        </Link>
                     </div>

                     <div className="right-widget ms-auto me-3 me-lg-0 order-lg-3">
                        <ul className="d-flex align-items-center style-none">
                           {!style_2 ? (<><li className="d-flex align-items-center login-btn-one">
                              <i className="fa-regular fa-lock"></i>
                              <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="fw-500 tran3s">
                                 Login <span className="d-none d-sm-inline-block"> {""} / Sign up</span></Link>
                           </li>
                              <li className="d-none d-md-inline-block ms-3 ms-xl-4 me-xl-4">
                                 <Link href="dashboard/add-property" className={style_1 ? "btn-ten" : "btn-two rounded-0"} target="_blank">
                                    <span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i>
                                 </Link>
                              </li>
                              <li className="d-none d-xl-block">
                                 <button onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }} className="sidenavbtn rounded-circle tran3s" type="button">
                                    <i className="fa-sharp fa-light fa-bars-filter"></i>
                                 </button>
                              </li></>) : (<>
                                 <li className="d-none d-md-flex align-items-center login-btn-one me-4 me-xxl-5">
                                    <i className="fa-regular fa-phone-volume"></i>
                                    <Link href="tel:+757-699-4478" className="tran3s">+757 699-4478</Link>
                                 </li>
                                 <li>
                                    <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="login-btn-two rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="fa-regular fa-lock"></i></Link>
                                 </li>
                                 <li>
                                    <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }} className="search-btn-one rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="bi bi-search"></i></a>
                                 </li>
                              </>)}
                        </ul>
                     </div>

                     <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                        <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                           aria-label="Toggle navigation">
                           <span></span>
                        </button>
                        <div className={`collapse navbar-collapse ${style_2 ? "ms-xl-5" : ""}`} id="navbarNav">
                           <NavMenu />
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>

         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <LoginModal />
         <HeaderSearchbar isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderTwo
