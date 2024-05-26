import FaqTwo from "@/components/common/faq/FaqTwo"
import Image from "next/image"
import Link from "next/link"

import faqShape from "@/assets/images/shape/shape_29.svg"

const FAQ = () => {
   return (
      <div className="faq-section-one position-relative z-1 mt-170 xl-mt-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-5 wow fadeInLeft">
                  <div className="title-one mb-40 lg-mb-20">
                     <h2 className="font-garamond">Frequently Asked Question</h2>
                     <p className="fs-20 mt-xs pt-20 md-pt-10">Don’t find the answer? We can help you.</p>
                  </div>
                  <Link href="/faq" className="btn-five sm text-uppercase rounded-0">ASK QUESTIONs</Link>
               </div>

               <div className="col-lg-7">
                  <div className="accordion-style-two md-mt-40">
                     <div className="accordion" id="accordionTwo">
                        <FaqTwo />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Image src={faqShape} alt="" className="lazy-img shapes shape_01" />
      </div>
   )
}

export default FAQ
