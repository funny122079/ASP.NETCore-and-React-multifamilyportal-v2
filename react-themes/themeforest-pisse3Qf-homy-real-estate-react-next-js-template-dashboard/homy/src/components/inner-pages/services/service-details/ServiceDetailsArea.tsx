import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import seviceDetailsThumb_1 from "@/assets/images/media/img_57.jpg";
import seviceDetailsThumb_2 from "@/assets/images/media/img_58.jpg";

import seviceDetailsIcon_1 from "@/assets/images/icon/icon_72.svg";
import seviceDetailsIcon_2 from "@/assets/images/icon/icon_73.svg";
import seviceDetailsIcon_3 from "@/assets/images/icon/icon_74.svg";

interface ContentType {
   title_1: string;
   title_2: string;
   title_3: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   desc_4: JSX.Element;
   service_features: {
      icon: StaticImageData;
      title: string;
      desc: string
   }[];
   service_list: string[];
   sidebar_list: string[];
}[];

const content_data: ContentType = {
   title_1: "We help you to buy your dream home.",
   title_2: "Quick Processing.",
   title_3: "Benefit you will get.",
   desc_1: (<>Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations & reputation.They can actually generate value and create opportunities.</>),
   desc_2: (<>Our dedicated risk and compliance consulting team assists clients in transforming uncertainty into advantageous prospects. We work collaboratively with organizations to identify & leverage the potential within their risk and compliance functions, enabling them to thrive in ever-changing business landscape.</>),
   desc_3: (<>Your leading real estate advocate, transforming houses into dreams. Trust us to expertly guide you home.</>),
   desc_4: (<>Our dedicated risk and compliance consulting team assists clients in transforming uncertainty into advantageous prospects.</>),
   service_features: [
      {
         icon: seviceDetailsIcon_1,
         title: "Property Insurance",
         desc: "Elit esse cillum dol fu nulla tur nos ullamo."
      },
      {
         icon: seviceDetailsIcon_2,
         title: "Easy Payments",
         desc: "quis nostr exerct ull security finibus ne derived."
      },
      {
         icon: seviceDetailsIcon_3,
         title: "Quick Process",
         desc: "Duis aute irure do reprehe Cicero voluptat velit."
      },
   ],
   service_list: ["Loan & low Interest facility", "100k+ Property Listing added & updated", "Exert Agents for any help", "Priority Access of exclusive sale",],
   sidebar_list: ["Property & Loan", "Sell Home", "Consulting Service", "Rent Home", "Mortgage",],
}

const { title_1, title_2, title_3, desc_1, desc_2, desc_3, desc_4, service_features, service_list, sidebar_list } = content_data;

const ServiceDetailsArea = () => {
   return (
      <div className="service-details mt-150 xl-mt-100 mb-150 xl-mb-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="service-post">
                     <div className="btn-line fw-500 text-uppercase">BUY PROPERTY</div>
                     <h3 className="mb-30">{title_1}</h3>
                     <p className="fs-20 lh-lg pb-25">{desc_1}</p>
                     <p className="fs-20 lh-lg">{desc_2}</p>
                     <div className="img-gallery pt-15 pb-70 lg-pb-50">
                        <div className="row">
                           <div className="col-8">
                              <Image src={seviceDetailsThumb_1} alt="" className="lazy-img w-100 mt-20" />
                           </div>
                           <div className="col-4">
                              <Image src={seviceDetailsThumb_2} alt="" className="lazy-img w-100 mt-20" />
                           </div>
                        </div>
                     </div>
                     <h4 className="mb-30">{title_2}</h4>
                     <p className="fs-24">{desc_3}</p>

                     <div className="feature-wrapper mt-60 lg-mt-40 mb-65 lg-mb-40">
                        <div className="bg-wrapper">
                           <div className="row">
                              {service_features.map((item, index) => (
                                 <div key={index} className="col-xl-4 col-lg-6 col-md-4">
                                    <div className="card-style-eleven mt-30">
                                       <div className="icon"><Image src={item.icon} alt="" className="lazy-img" /></div>
                                       <h5 className="mt-30 mb-20">{item.title}</h5>
                                       <p>{item.desc}</p>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>

                     <h4 className="mb-30">{title_3}</h4>
                     <p className="fs-20 lh-lg pb-25">{desc_4}</p>
                     <ul className="list-style-one fs-22 color-dark style-none">
                        {service_list.map((list, i) => <li key={i}>{list}</li>)}
                     </ul>
                     <Link href="/contact" className="btn-two mt-30">Contact Us</Link>
                  </div>
               </div>
               
               <div className="col-lg-4">
                  <div className="ms-xl-5">
                     <div className="service-sidebar md-mt-80">
                        <div className="service-category">
                           <ul className="style-none">
                              <li><Link href="#" className="active">Buy Home</Link></li>
                              {sidebar_list.map((list, i) => <li key={i}><Link href="#">{list}</Link></li>)}
                           </ul>
                        </div>
                        <div className="contact-banner text-center mt-45">
                           <h4 className="mb-35 text-white">Any Questions? <br />Let’s talk</h4>
                           <Link href="/contact" className="btn-two">Let’s Talk</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceDetailsArea
