"use client"
import pricing_data from "@/data/inner-data/PricingData";
import Link from "next/link";
import { useState } from "react";

const tab_title: string[] = ["Monthly", "Yearly",];
const list: string[] = ["All Operating Supported", "Multiple User", "Refund", "12 months duration", "Live Chat", "Send invite via Link"];

const PricingOneArea = () => {

   const selectHandler = (e: any) => { };
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <div className="pricing-section-one mt-150 xl-mt-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-10 m-auto">
                  <div className="title-one text-center mb-40 lg-mb-30 wow fadeInUp">
                     <h3>Unbeatable prices, no contracts, simple & easy</h3>
                     <p className="fs-24">Try Team plan features for 14 days · No credit card required</p>
                  </div>
               </div>
            </div>

            <div className="pr-table-one">
               <nav className="pricing-nav-one d-flex justify-content-center">
                  <div className="nav nav-tabs" role="tablist">
                     {tab_title.map((tab, index) => (
                        <button key={index} onClick={() => handleTabClick(index)} className={`nav-link ${activeTab === index ? "active" : ""}`} id="buy-tab" type="button">{tab}</button>
                     ))}
                  </div>
               </nav>
               <div className="discount-text mt-15 text-center">Save 30% on Annual plan</div>

               <div className="dot-bg-wrapper mt-60 lg-mt-40">
                  <div className="tab-content">
                     {pricing_data.filter((items) => items.page === "pricing_1").map((pricing, index) => (
                        <div key={index} className={`tab-pane show ${activeTab === index ? "active" : ""}`} id="monthly">
                           <div className="main-bg d-flex flex-wrap justify-content-end position-relative">
                              <div className="left-panel d-none d-lg-block">
                                 <ul className="style-none">
                                    {list.map((list, i) => <li key={i}>{list}</li>)}
                                 </ul>
                              </div>
                              {pricing.pricing_data.map((item) => (
                                 <div key={item.id} className={`pr-column-wrapper ${item.class_name}`}>
                                    <div className="pr-header text-center">
                                       <div className="plan text-uppercase">{item.plan}</div>
                                       <strong className="price fw-500">{item.price}</strong>
                                       <p className="fs-16">{item.desc}</p>
                                    </div>
                                    <ul className="style-none text-center">
                                       {item.icon_details.map((icon, i) => (
                                          <li key={i}>
                                             <span className="fw-500 color-dark">All Operating Supported</span>
                                             <div className={`icon d-flex align-items-center justify-content-center rounded-circle ${icon.icon_class}`}>
                                                <i className={icon.icon}></i></div>
                                          </li>
                                       ))}
                                    </ul>
                                    <div className="pr-footer text-center">
                                       <Link href="#" className="btn-twelve sm">{item.btn}</Link>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PricingOneArea
