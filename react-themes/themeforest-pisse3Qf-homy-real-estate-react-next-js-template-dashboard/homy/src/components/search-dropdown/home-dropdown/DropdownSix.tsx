"use client"
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import { useState } from "react";
import DropdownModal from "./DropdownModal";


const tab_title: string[] = ["Buy", "Rent", "Sell"];

const DropdownSix = () => {

   const selectHandler = (e: any) => { };
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   const searchHandler = () => {
      window.location.href = '/listing_01';
   };

   return (
      <>
         <div className="search-wrapper-one layout-one mt-250 xl-mt-150 lg-mt-100 position-relative">
            <nav className="search-filter-nav-one d-flex">
               <div className="nav nav-tabs border-0" role="tablist">
                  {tab_title.map((tab, index) => (
                     <button key={index} onClick={() => handleTabClick(index)} className={`nav-link m0 ${activeTab === index ? "active" : ""}`} id="buy-tab" type="button">{tab}</button>
                  ))}
               </div>
            </nav>
            <div className="bg-wrapper border-0 rounded-0">
               <div className="tab-content">
                  <div className={`tab-pane show ${activeTab === 0 ? "active" : ""}`} id="buy">
                     <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
                        <div className="row gx-0 align-items-center">
                           <div className="col-xxl-2 col-xl-3 col-lg-4">
                              <div className="input-box-one border-left">
                                 <div className="label">I’m looking to...</div>
                                 <NiceSelect className="nice-select fw-normal"
                                    options={[
                                       { value: "apartments", text: "Buy Apartments" },
                                       { value: "condos", text: "Rent Condos" },
                                       { value: "houses", text: "Sell Houses" },
                                       { value: "industrial", text: "Rent Industrial" },
                                       { value: "villas", text: "Sell Villas" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder="" />
                              </div>
                           </div>
                           <div className="col-xl-3 col-lg-4">
                              <div className="input-box-one border-left">
                                 <div className="label">Location</div>
                                 <NiceSelect className="nice-select location fw-normal"
                                    options={[
                                       { value: "germany", text: "Berlin, Germany" },
                                       { value: "dhaka", text: "Dhanmondi, Dhaka" },
                                       { value: "mexico", text: "Acapulco, Mexico" },
                                       { value: "france", text: "Cannes, France" },
                                       { value: "india", text: "Delhi, India" },
                                       { value: "giza", text: "Giza, Egypt" },
                                       { value: "cuba", text: "Havana, Cuba" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder="" />
                              </div>
                           </div>
                           <div className="col-xl-3 col-lg-4">
                              <div className="input-box-one border-left border-lg-0">
                                 <div className="label">Price Range</div>
                                 <NiceSelect
                                    className="nice-select fw-normal"
                                    options={[
                                       { value: "1", text: "$10,000 - $200,000" },
                                       { value: "2", text: "$20,000 - $300,000" },
                                       { value: "3", text: "$30,000 - $400,000" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder="" />
                              </div>
                           </div>
                           <div className="col-xxl-4 col-xl-3">
                              <div className="input-box-one lg-mt-10">
                                 <div className="d-flex align-items-center justify-content-center">
                                    <Link href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal"
                                       className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                                       <span className="d-xl-none d-xxl-block">ADVANCE Search</span>
                                       <i className="fa-light fa-sliders-up"></i>
                                    </Link>
                                    <button className="fw-500 text-uppercase tran3s search-btn-four">
                                       <span>Search</span>
                                       <i className="fa-light fa-magnifying-glass"></i>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>

                  <div className={`tab-pane show ${activeTab === 1 ? "active" : ""}`} id="buy">
                     <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
                        <div className="row gx-0 align-items-center">
                           <div className="col-xxl-2 col-xl-3 col-lg-4">
                              <div className="input-box-one border-left">
                                 <div className="label">I’m looking to...</div>
                                 <NiceSelect className="nice-select fw-normal"
                                    options={[
                                       { value: "industrial", text: "Rent Industrial" },
                                       { value: "apartments", text: "Buy Apartments" },
                                       { value: "condos", text: "Rent Condos" },
                                       { value: "houses", text: "Sell Houses" },
                                       { value: "villas", text: "Sell Villas" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder="" />
                              </div>
                           </div>
                           <div className="col-xl-3 col-lg-4">
                              <div className="input-box-one border-left">
                                 <div className="label">Location</div>
                                 <NiceSelect className="nice-select location fw-normal"
                                    options={[
                                       { value: "mexico", text: "Acapulco, Mexico" },
                                       { value: "dhaka", text: "Dhanmondi, Dhaka" },
                                       { value: "germany", text: "Berlin, Germany" },
                                       { value: "france", text: "Cannes, France" },
                                       { value: "india", text: "Delhi, India" },
                                       { value: "giza", text: "Giza, Egypt" },
                                       { value: "cuba", text: "Havana, Cuba" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder="" />
                              </div>
                           </div>
                           <div className="col-xl-3 col-lg-4">
                              <div className="input-box-one border-left border-lg-0">
                                 <div className="label">Price Range</div>
                                 <NiceSelect
                                    className="nice-select fw-normal"
                                    options={[
                                       { value: "1", text: "$10,000 - $200,000" },
                                       { value: "2", text: "$20,000 - $300,000" },
                                       { value: "3", text: "$30,000 - $400,000" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder="" />
                              </div>
                           </div>
                           <div className="col-xxl-4 col-xl-3">
                              <div className="input-box-one lg-mt-10">
                                 <div className="d-flex align-items-center justify-content-center">
                                    <Link href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal"
                                       className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                                       <span className="d-xl-none d-xxl-block">ADVANCE Search</span>
                                       <i className="fa-light fa-sliders-up"></i>
                                    </Link>
                                    <button className="fw-500 text-uppercase tran3s search-btn-four">
                                       <span>Search</span>
                                       <i className="fa-light fa-magnifying-glass"></i>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>

                  <div className={`tab-pane show ${activeTab === 2 ? "active" : ""}`} id="buy">
                     <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
                        <div className="row gx-0 align-items-center">
                           <div className="col-xxl-2 col-xl-3 col-lg-4">
                              <div className="input-box-one border-left">
                                 <div className="label">I’m looking to...</div>
                                 <NiceSelect className="nice-select fw-normal"
                                    options={[
                                       { value: "condos", text: "Rent Condos" },
                                       { value: "houses", text: "Sell Houses" },
                                       { value: "apartments", text: "Buy Apartments" },
                                       { value: "condos", text: "Rent Condos" },
                                       { value: "houses", text: "Sell Houses" },
                                       { value: "industrial", text: "Rent Industrial" },
                                       { value: "villas", text: "Sell Villas" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder="" />
                              </div>
                           </div>
                           <div className="col-xl-3 col-lg-4">
                              <div className="input-box-one border-left">
                                 <div className="label">Location</div>
                                 <NiceSelect className="nice-select location fw-normal"
                                    options={[
                                       { value: "france", text: "Cannes, France" },
                                       { value: "germany", text: "Berlin, Germany" },
                                       { value: "dhaka", text: "Dhanmondi, Dhaka" },
                                       { value: "mexico", text: "Acapulco, Mexico" },
                                       { value: "india", text: "Delhi, India" },
                                       { value: "giza", text: "Giza, Egypt" },
                                       { value: "cuba", text: "Havana, Cuba" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder="" />
                              </div>
                           </div>
                           <div className="col-xl-3 col-lg-4">
                              <div className="input-box-one border-left border-lg-0">
                                 <div className="label">Price Range</div>
                                 <NiceSelect
                                    className="nice-select fw-normal"
                                    options={[
                                       { value: "1", text: "$10,000 - $200,000" },
                                       { value: "2", text: "$20,000 - $300,000" },
                                       { value: "3", text: "$30,000 - $400,000" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder="" />
                              </div>
                           </div>
                           <div className="col-xxl-4 col-xl-3">
                              <div className="input-box-one lg-mt-10">
                                 <div className="d-flex align-items-center justify-content-center">
                                    <Link href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal"
                                       className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                                       <span className="d-xl-none d-xxl-block">ADVANCE Search</span>
                                       <i className="fa-light fa-sliders-up"></i>
                                    </Link>
                                    <button className="fw-500 text-uppercase tran3s search-btn-four">
                                       <span>Search</span>
                                       <i className="fa-light fa-magnifying-glass"></i>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <DropdownModal/>
      </>
   )
}

export default DropdownSix
