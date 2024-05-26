import Link from "next/link"

const ListingDetailsBanner = () => {
   return (
      <div className="row">
         <div className="col-lg-6">
            <h3 className="property-titlee">Luxury Apartments on California.</h3>
            <div className="d-flex flex-wrap mt-10">
               <div className="list-type text-uppercase border-20 mt-15 me-3">FOR SELL</div>
               <div className="address mt-15"><i className="bi bi-geo-alt"></i> 3891 Ranchview Dr. Richardson, California
               </div>
            </div>
         </div>
         <div className="col-lg-6 text-lg-end">
            <div className="d-inline-block md-mt-40">
               <div className="price color-dark fw-500">Price: $1,67,000</div>
               <div className="est-price fs-20 mt-25 mb-35 md-mb-30">Est. Payment <span
                  className="fw-500 color-dark">$8,343/mo*</span></div>
               <ul className="style-none d-flex align-items-center action-btns">
                  <li className="me-auto fw-500 color-dark"><i className="fa-sharp fa-regular fa-share-nodes me-2"></i>
                     Share</li>
                  <li><Link href="#"
                     className="d-flex align-items-center justify-content-center rounded-circle tran3s"><i
                        className="fa-light fa-heart"></i></Link></li>
                  <li><Link href="#"
                     className="d-flex align-items-center justify-content-center rounded-circle tran3s"><i
                        className="fa-light fa-bookmark"></i></Link></li>
                  <li><Link href="#"
                     className="d-flex align-items-center justify-content-center rounded-circle tran3s"><i
                        className="fa-light fa-circle-plus"></i></Link></li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default ListingDetailsBanner
