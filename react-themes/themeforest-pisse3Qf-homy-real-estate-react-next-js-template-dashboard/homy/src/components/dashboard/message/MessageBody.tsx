"use client"
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo"
import MailOffcanvas from "./MailOffcanvas"
import Link from "next/link"
import Image from "next/image"
import EmailReadPanel from "./EmailReadPanel"
import OpenEmail from "./OpenEmail"

import icon_1 from "@/assets/images/dashboard/icon/icon_26.svg"
import icon_2 from "@/assets/images/dashboard/icon/icon_27.svg"
import icon_3 from "@/assets/images/dashboard/icon/icon_43.svg"

const MessageBody = () => {
   return (
      <div className="dashboard-body">
         <div className="position-relative">
            <DashboardHeaderTwo title="Message" />

            <div className="row gx-0 align-items-center">
               <MailOffcanvas />
               <div className="col-lg-4">
                  <div className="d-flex align-items-center justify-content-between">
                     <h2 className="main-title d-block d-lg-none m0">Messages</h2>
                     <Link className="new-message-compose rounded-circle" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasScrolling">+</Link>
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="message-pagination ps-lg-4 ps-xxl-5 d-flex align-items-center justify-content-between md-mt-40">
                     <Link href="#" className="prev-msg"><Image src={icon_1} data-src="ima" alt="" className="lazy-img" /></Link>
                     <div className="d-flex align-items-center">
                        <Link href="#"><i className="bi bi-chevron-left"></i></Link>
                        <span>1-5 of 120</span>
                        <Link href="#"><i className="bi bi-chevron-right"></i></Link>
                     </div>
                     <Link href="#" className="next-msg"><Image src={icon_2} data-src="images/icon/icon_27.svg" alt="" className="lazy-img" /></Link>
                  </div>
               </div>
            </div>

            <div className="bg-white card-box border-20 p0 mt-30">
               <div className="message-wrapper">
                  <div className="row gx-0">
                     <div className="col-lg-4">
                        <div className="message-sidebar pt-20">
                           <div className="ps-3 pe-3 ps-xxl-4 pe-xxl-4">
                              <div className="d-flex align-items-center justify-content-between">
                                 <div className="page-title fw-500">Inbox</div>
                                 <div className="action-dots float-end">
                                    <button className="action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       <span></span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                       <li><Link className="dropdown-item" href="#">Sent</Link></li>
                                       <li><Link className="dropdown-item" href="#">Important</Link></li>
                                       <li><Link className="dropdown-item" href="#">Draft</Link></li>
                                       <li><Link className="dropdown-item" href="#">Trash</Link></li>
                                    </ul>
                                 </div>
                              </div>
                              <form onSubmit={(e) => e.preventDefault()} className="search-form mt-20 mb-20">
                                 <input type="text" placeholder="Search contacts" />
                                 <button><Image src={icon_3} alt="" className="lazy-img m-auto" /></button>
                              </form>

                              <div className="message_filter d-flex align-items-center justify-content-between mb-20" id="module_btns">
                                 <button className="filter_btn active">All</button>
                                 <button className="filter_btn"><span style={{ background: "#FF4545" }}></span> Read</button>
                                 <button className="filter_btn"><span style={{ background: "#3BDA84" }}></span> Unread</button>
                                 <button className="filter_btn"><span style={{ background: "#50C0FF" }}></span> Primary</button>
                              </div>
                           </div>
                           <EmailReadPanel />
                        </div>
                     </div>

                     <OpenEmail />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MessageBody
