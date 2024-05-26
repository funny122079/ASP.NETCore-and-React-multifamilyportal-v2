import BrandThree from "@/components/common/brand/BrandThree"

const Brand = () => {
   return (
      <div className="partner-section-two mt-80">
         <div className="container container-large">
            <div className="wrapper bottom-border pb-65 md-pb-30">
               <div className="row align-items-center">
                  <div className="col-lg-4">
                     <h6 className="fw-normal text-center text-lg-start md-pb-40 fs-24 m0">Trusted by <span className="fw-500 text-decoration-underline color-dark">15,000+</span> Customers</h6>
                  </div>
                  <div className="col-lg-8">
                     <BrandThree />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Brand
