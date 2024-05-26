"use client"
import Image from "next/image"
import Link from "next/link"

import footerLogo from "@/assets/images/logo/logo_07.svg"
import footer_data from "@/data/home-data/FooterData"

const FooterFive = () => {
   return (
      <div className="footer-four dark-bg position-relative z-1">
         <div className="news-letter-area">
            <div className="container container-large">
               <div className="line-wrapper">
                  <div className="row align-items-center">
                     <div className="col-lg-6">
                        <div className="text-center text-lg-start md-mb-40">
                           <h2 className="text-white">Our Newsletter</h2>
                           <p className="fs-24 text-white opacity-75 m0">Get instant news by subscribe to our newsletter</p>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="form-wrapper me-auto ms-auto me-lg-0">
                           <form onSubmit={(e) => e.preventDefault()}>
                              <input type="email" placeholder="Email address" className="rounded-0" />
                              <button className="rounded-0">Get Started</button>
                           </form>
                           <div className="fs-16 mt-10 text-white"><span className="fw-light opacity-75">Already a Agent?</span> <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Sign in.</a></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="container container-large">
            <div className="bg-wrapper position-relative z-1">
               <div className="row">
                  <div className="col-xl-3 col-lg-4 mb-60">
                     <div className="footer-intro">
                        <div className="logo mb-20">
                           <Link href="/">
                              <Image src={footerLogo} alt="" />
                           </Link>
                        </div>
                        <p className="mb-45 md-mb-20">11910 Clyde Rapid Suite 210, Willyand, Virginia, United States</p>
                        <ul className="style-none d-flex align-items-center social-icon">
                           <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                           <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                           <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                        </ul>
                     </div>
                  </div>

                  {footer_data.filter((items) => items.page === "home_5").map((item) => (
                     <div key={item.id} className={`col-md-4 mb-30 ${item.widget_class}`}>
                        <div className={`footer-nav ${item.widget_class2}`}>
                           <h5 className="footer-title text-white">{item.widget_title}</h5>
                           <ul className="footer-nav-link style-none">
                              {item.footer_link.map((li, i) => (
                                 <li key={i}><Link href={li.link}>{li.link_title}</Link></li>))}
                           </ul>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="bottom-footer">
               <p className="m0 text-center fs-16">Copyright @2024 Homy inc.</p>
            </div>
         </div>
      </div>
   )
}

export default FooterFive
