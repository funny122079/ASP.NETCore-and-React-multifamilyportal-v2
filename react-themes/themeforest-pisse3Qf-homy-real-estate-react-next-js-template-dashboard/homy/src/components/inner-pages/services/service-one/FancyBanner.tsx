import Link from "next/link"

const FancyBanner = () => {
   return (
      <div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-70 pb-90 lg-pb-70">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-8 m-auto text-center">
                  <div className="title-one mb-50 lg-mb-40">
                     <h2 className="text-white fs-lg">Apply for loan with low interest.</h2>
                     <p className="fs-24 text-white">Apply for loan & get up to $20million with low interest</p>
                  </div>
                  <Link href="contact" className="btn-six">Get Started</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FancyBanner
