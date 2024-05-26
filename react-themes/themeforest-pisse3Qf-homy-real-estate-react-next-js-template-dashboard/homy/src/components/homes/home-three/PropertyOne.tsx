import Link from "next/link"
import Image from "next/image"

import lineShape from "@/assets/images/shape/shape_37.svg";

interface DataType {
   id: number;
   tag: string;
   title: string;
   address: string;
   property_info?: JSX.Element[];
   icon?: string[];
   item_bg_img:string;
   class_name?:string;
}

const property_data: DataType[] = [
   {
      id: 1,
      tag: "FOR SELL",
      title: "Super luxury duplex orkit villa.",
      address: "Mirpur 10, Stadium dhaka 1210",
      property_info: [(<><span>2137</span> sqft</>), (<><span>03</span> beds</>), (<><span>01</span> kitchen</>), (<><span>02</span> baths</>),],
      icon: ["heart", "bookmark", "circle-plus"],
      item_bg_img:"property-item-1"
   },
   {
      id: 2,
      tag: "FOR SELL",
      title: "Swimming Pool Villa",
      address: "127 green road, California, USA",
      item_bg_img:"property-item-2",
      class_name:"md-mt-40",
   },
   {
      id: 3,
      tag: "FOR Rent",
      title: "Modern Duplex",
      address: "Twin tower, 32 street, Florida",
      item_bg_img:"property-item-3",
      class_name:"mt-40",
   },
]

const PropertyOne = () => {
   return (
      <div className="property-listing-three position-relative z-1 mt-170 xl-mt-140 lg-mt-120">
         <div className="container container-large">
            <div className="position-relative">
               <div className="title-one mb-60 lg-mb-40 wow fadeInUp">
                  <h2 className="font-garamond star-shape">Featured <em>Listing</em> <span className="star-shape"><Image src={lineShape} alt="" className="lazy-img" /></span></h2>
                  <p className="fs-22 m0">Explore featured properties for sale.</p>
               </div>

               <div className="row gx-xxl-5">
                  {property_data.slice(0, 1).map((item) => (
                     <div key={item.id} className="col-lg-8 d-flex">
                        <div className="listing-card-three w-100 h-100 position-relative z-1 wow fadeInUp" style={{ backgroundImage: `url(/assets/images/listing/img_12.jpg)` }}>
                           <div className="w-100 h-100 d-flex flex-column">
                              <div className="tag fw-500 text-uppercase">{item.tag}</div>
                              <div className="mt-100 mt-sm-auto wrapper d-flex flex-wrap justify-content-between align-items-center">
                                 <div className="property-name h-100">
                                    <h5 className="text-white mb-15">{item.title}</h5>
                                    <p className="m0 text-white">{item.address}</p>
                                 </div>
                                 <div className="property-info h-100">
                                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-5">
                                       {item.property_info?.map((list, i) => (
                                          <li key={i} className="d-flex align-items-center">
                                             <div className="fs-16">{list}</div>
                                          </li>
                                       ))}
                                    </ul>
                                    <div className="d-sm-flex justify-content-between align-items-center mt-10">
                                       <ul className="style-none d-flex action-icons">
                                          {item.icon?.map((icon, index) => (
                                             <li key={index}><Link href="#"><i className={`fa-light fa-${icon}`}></i></Link></li>
                                          ))}
                                       </ul>
                                       <Link href="/listing_details_05" className="btn-ten xs-mt-20"><span>Full Details</span> <i className="bi bi-arrow-up-right"></i></Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}

                  <div className="col-lg-4 d-flex">
                     <div className="w-100 h-100">
                        <div className="row h-100">
                           {property_data.slice(1, 3).map((item) => (
                              <div key={item.id} className="col-lg-12 col-md-6">
                                 <div className={`listing-card-two w-100 position-relative z-1 ${item.class_name} wow fadeInUp ${item.item_bg_img}`}>
                                    <div className="w-100 h-100 d-flex flex-column">
                                       <div className="tag fw-500 text-uppercase">{item.tag}</div>
                                       <div className="mt-auto d-lg-flex justify-content-between align-items-center">
                                          <div className="md-mb-20">
                                             <h5 className="text-white">{item.title}</h5>
                                             <p className="m0 text-white">{item.address}</p>
                                          </div>
                                          <Link href="/listing_details_05" className="btn-four rounded-circle inverse stretched-link"><i className="bi bi-arrow-up-right"></i></Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               <div className="section-btn text-center md-mt-60">
                  <Link href="/listing_04" className="btn-five md"><span>Explore All</span> <i className="bi bi-arrow-up-right"></i></Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PropertyOne
