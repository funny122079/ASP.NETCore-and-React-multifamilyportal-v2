import Image from "next/image"
import Link from "next/link"

import infoAvatar from "@/assets/images/agent/img_06.jpg"

const SidebarInfo = () => {
   return (
      <>
         <Image src={infoAvatar} alt=""
            className="lazy-img rounded-circle ms-auto me-auto mt-3 avatar" />
         <div className="text-center mt-25">
            <h6 className="name">Rashed Kabir</h6>
            <p className="fs-16">Property Agent & Broker</p>
            <ul className="style-none d-flex align-items-center justify-content-center social-icon">
               <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
               <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
               <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
               <li><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></li>
            </ul>
         </div>
         <div className="divider-line mt-40 mb-45 pt-20">
            <ul className="style-none">
               <li>Location: <span>Spain, Barcelona</span></li>
               <li>Email: <span><Link href="mailto:akabirr770@gmail.com">akabirr770@gmail.com</Link></span>
               </li>
               <li>Phone: <span><Link href="tel:+12347687565">+12347687565</Link></span></li>
            </ul>
         </div>
         <Link href="/contact" className="btn-nine text-uppercase rounded-3 w-100 mb-10">CONTACT AGENT</Link>
      </>
   )
}

export default SidebarInfo
