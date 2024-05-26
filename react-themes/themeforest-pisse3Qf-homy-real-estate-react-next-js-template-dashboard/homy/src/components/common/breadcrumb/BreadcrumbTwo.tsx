import Image from "next/image"
import Link from "next/link"

import breadcrumbShape_1 from "@/assets/images/shape/shape_35.svg"
import breadcrumbShape_2 from "@/assets/images/shape/shape_36.svg"

const BreadcrumbTwo = ({ title, sub_title }: any) => {
   return (
      <div className="inner-banner-three inner-banner text-center z-1 position-relative">
         <div className="bg-wrapper overflow-hidden position-relative z-1" style={{ backgroundImage: `url(/assets/images/media/img_51.jpg)` }}>
            <div className="container position-relative z-2">
               <h2 className="mb-35 xl-mb-20 md-mb-10 pt-15 font-garamond text-white">{title}</h2>
               <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                  <li><Link href="/">Home</Link></li>
                  <li>/</li>
                  <li>{sub_title}</li>
               </ul>
            </div>
            <Image src={breadcrumbShape_1} alt="" className="lazy-img shapes shape_01" />
            <Image src={breadcrumbShape_2} alt="" className="lazy-img shapes shape_02" />
         </div>
      </div>
   )
}

export default BreadcrumbTwo
