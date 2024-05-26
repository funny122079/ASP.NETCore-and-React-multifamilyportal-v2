import Image, { StaticImageData } from "next/image";
import Link from "next/link"

import compareLogo from "@/assets/images/logo/logo_08.svg";

import compareThumb_1 from "@/assets/images/listing/img_66.jpg";
import compareThumb_2 from "@/assets/images/listing/img_67.jpg";
import compareThumb_3 from "@/assets/images/listing/img_68.jpg";

interface Datatype {
   id: number;
   tag: string;
   thumb: StaticImageData;
   title: string;
   desc: string;
}

const compare_data: Datatype[] = [
   {
      id: 1,
      tag: "For Sell",
      thumb: compareThumb_1,
      title: "Blueberry villa",
      desc: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
   },
   {
      id: 2,
      tag: "For Sell",
      thumb: compareThumb_2,
      title: "Orkit Flat",
      desc: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
   },
   {
      id: 3,
      tag: "For Sell",
      thumb: compareThumb_3,
      title: "Modu Apartment",
      desc: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
   },
]

interface TableData {
   table_head: string;
   table_data: string[];
}[];

const table_row_data: TableData[] = [
   {
      table_head: "Bedrooms",
      table_data: ["3", "2", "3"],
   },
   {
      table_head: "Bath",
      table_data: ["2", "1", "1"],
   },
   {
      table_head: "Price",
      table_data: ["$1,75,320", "$1,42,720", "$1,82,000"],
   },
   {
      table_head: "Property Type",
      table_data: ["Villa", "Flat", "Apartment"],
   },
   {
      table_head: "Property ID",
      table_data: ["h2180", "h3218", "h4322"],
   },
   {
      table_head: "Parking",
      table_data: ["1", "2", "0"],
   },
   {
      table_head: "Lot Size",
      table_data: ["2,710 sq.ft", "1,810 sq.ft", "3,470 sq.ft"],
   },
   {
      table_head: "Features",
      table_data: ["Ac/Heating, Laundry, Garden, Elevator, Pet Friendly, Wifi, Refrigerator", "Ac/Heating, Garden, Wifi, Pet Friendly, Refrigerator", "Ac/Heating, Laundry, Garden, Elevator, Pet Friendly, Wifi, Refrigerator, Fireplace, Swimming Pool"],
   },
   {
      table_head: "Zoning",
      table_data: ["Residential", "Residential", "Residential"],
   },
]

const CompareArea = () => {
   return (
      <div className="compare-section mt-150 xl-mt-100 mb-150 xl-mb-100">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-md-6">
                  <div className="title-one">
                     <h3>Compare Listing</h3>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-4 col-md-5 ms-auto">
                  <ul className="style-none d-flex align-items-center action-btns sm-mt-40">
                     <li className="me-auto fw-500 color-dark"><i className="fa-sharp fa-regular fa-share-nodes me-2"></i> Share</li>
                     <li><Link href="#" className="d-flex align-items-center justify-content-center tran3s"><i className="fa-light fa-heart"></i></Link></li>
                     <li><Link href="#" className="d-flex align-items-center justify-content-center tran3s"><i className="fa-light fa-bookmark"></i></Link></li>
                     <li><Link href="#" className="d-flex align-items-center justify-content-center tran3s"><i className="fa-light fa-circle-plus"></i></Link></li>
                  </ul>
               </div>
            </div>

            <div className="compare-table mt-60 lg-mt-40">
               <div className="table-responsive table-bg bg-white">
                  <table className="table">
                     <thead>
                        <tr>
                           <td><Image src={compareLogo} alt="" className="lazy-img mt-50" /></td>
                           {compare_data.map((item) => (
                              <td key={item.id}>
                                 <div className="listing-card-one style-two shadow-none">
                                    <div className="img-gallery">
                                       <div className="position-relative overflow-hidden">
                                          <div className="tag fw-500">{item.tag}</div>
                                          <Link href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></Link>
                                          <Link href="#" className="d-block">
                                             <Image src={item.thumb} className="w-100" alt="..." />
                                          </Link>
                                       </div>
                                    </div>
                                    <div className="property-info pt-10">
                                       <Link href="#" className="title tran3s">{item.title}</Link>
                                       <div className="address">{item.desc}</div>
                                    </div>
                                 </div>
                              </td>
                           ))}
                        </tr>
                     </thead>

                     <tbody>
                        {table_row_data.map((item, index) => (
                           <tr key={index}>
                              <th>{item.table_head}</th>
                              {item.table_data.map((data, i) => <td key={i}>{data}</td>)}
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CompareArea
