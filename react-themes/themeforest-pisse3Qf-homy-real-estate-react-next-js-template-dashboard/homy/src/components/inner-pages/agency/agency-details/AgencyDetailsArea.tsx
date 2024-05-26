"use client"
import Image from "next/image"
import Link from "next/link";
import AgencyNavTabs from "./AgencyNavTabs";
import NiceSelect from "@/ui/NiceSelect";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import AgencyDetailsSidebar from "./AgencyDetailsSidebar";

import agencyDetailsLogo from "@/assets/images/logo/p_logo_22.png";

interface ContentType {
   title_1: string;
   title_2: string;
   desc_1: string;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   desc_4: string;
   table_data: {
      table_td_1: string;
      table_td_2: string;
   }[];
   table_data_2: {
      table_td_1: string;
      table_td_2: string;
   }[];
   icon: string[];
}

const agency_details_content: ContentType = {
   title_1: "Rainbow Housing",
   title_2: "Mathews Firlo.",
   desc_1: "8210 Preston Rd. Inglewood",
   desc_4: "Sales & Broker",
   table_data: [{ table_td_1: "Location", table_td_2: "Maine, USA" }, { table_td_1: "Phone:", table_td_2: "+21 456 987 330" }, { table_td_1: "Email", table_td_2: "rainbowhousing@demo.com" }, { table_td_1: "Website:", table_td_2: "www.rainbowinc.com" },],
   table_data_2: [{ table_td_1: "Location", table_td_2: "Spain, Barcelona" }, { table_td_1: "Phone:", table_td_2: "+21 456 987 330" }, { table_td_1: "Email", table_td_2: "mathfir@support.com" }, { table_td_1: "Qualification:", table_td_2: "Master Degree" },],
   icon: ["whatsapp", "x-twitter", "instagram", "viber"],
   desc_2: (<>Before establishing Beratung in 2001, Mathew founded Silicon Valley internet companies and later held management roles at Salomon in New York.</>),
   desc_3: (<>Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations & reputation.They can actually generate value and create opportunities.</>),
}

const { title_1, desc_1, table_data, icon, desc_2, desc_3, table_data_2, title_2, desc_4 } = agency_details_content;

const AgencyDetailsArea = ({ style }: any) => {

   const selectHandler = (e: any) => { };

   return (
      <div className="agency-details theme-details-one mt-130 xl-mt-100 pb-150 xl-pb-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className={`info-pack-one mb-80 xl-mb-50 ${style ? "" : "p-20"}`}>
                     <div className="row">
                        <div className="col-xl-6 d-flex">
                           <div className={`z-1 w-100 me-xl-4 position-relative ${style ? "media agent-details-thumb" : " p-20 d-flex align-items-center justify-content-center bg-white"}`}>
                              <div className={`tag position-absolute text-uppercase ${style ? "bg-white" : "bg-dark top-0 text-white"}`}>{style ? 4 : 27} Listing</div>
                              {style ? "" : <Image src={agencyDetailsLogo} alt="" className="lazy-img" />}
                           </div>
                        </div>

                        <div className="col-xl-6">
                           <div className="ps-xxl-3 pe-xxl-3 pt-40 lg-pt-30 pb-45 lg-pb-10">
                              <h4>{style ? title_2 : title_1}</h4>
                              <div className="designation fs-16"> {style ? desc_4 : desc_1}</div>
                              <div className="table-responsive">
                                 <table className="table">
                                    <tbody>
                                       <>
                                          {style ? (table_data_2.map((td, index) => (
                                             <tr key={index}>
                                                <td>{td.table_td_1} </td>
                                                <td>{td.table_td_2} </td>
                                             </tr>
                                          ))) : (
                                             table_data.map((td, i) => (
                                                <tr key={i}>
                                                   <td>{td.table_td_1} </td>
                                                   <td>{td.table_td_2} </td>
                                                </tr>
                                             )))}
                                       </>
                                    </tbody>
                                 </table>
                              </div>
                              <ul className="style-none d-flex align-items-center social-icon">
                                 {icon.map((icon, i) => (
                                    <li key={i}><Link href="#"><i className={`fa-brands fa-${icon}`}></i></Link></li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="agency-overview bottom-line-dark pb-40 mb-80 xl-mb-50">
                     <h4 className="mb-20">Overview</h4>
                     <p className="fs-20 lh-lg pb-15">{desc_2}</p>
                     <p className="fs-20 lh-lg">{desc_3}</p>
                  </div>
                  <AgencyNavTabs />

                  <div className="review-panel-one bottom-line-dark pb-40 mb-80 xl-mb-50">
                     <div className="position-relative z-1">
                        <div className="d-sm-flex justify-content-between align-items-center mb-10">
                           <h4 className="m0 xs-pb-30">All Reviews (4.7 Rating)</h4>
                           <NiceSelect className="nice-select rounded-0"
                              options={[
                                 { value: "01", text: "Newest" },
                                 { value: "02", text: "Best Seller" },
                                 { value: "03", text: "Best Match" },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name=""
                              placeholder="" />
                        </div>

                        <div className="review-wrapper mb-35">
                           <Review />
                        </div>
                     </div>
                  </div>
                  <ReviewForm />
               </div>
               <AgencyDetailsSidebar />
            </div>
         </div>
      </div>
   )
}

export default AgencyDetailsArea
