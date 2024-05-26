import blog_data from "@/data/home-data/BlogData"
import Link from "next/link"

import titleShape from "@/assets/images/shape/title_shape_01.svg"
import Image from "next/image"

const Blog = ({ style }: any) => {
   return (
      <div className="blog-section-one mt-150 xl-mt-120">
         <div className="container">
            <div className="position-relative">
               <div className="title-one mb-35 xl-mb-20 md-mb-10 wow fadeInUp">
                  {style ? <h3>Latest <span>News <Image src={titleShape} alt="" className="lazy-img" /></span></h3> :
                     <h2 className="font-garamond">Latest News</h2>}
                  <p className="fs-20 mt-xs">Get the latest update, trips & tricks from our expert.</p>
               </div>

               <div className="row gx-xl-5">
                  {blog_data.filter((items) => items.page === "home_2").map((item) => (
                     <div key={item.id} className="col-md-6">
                        <article className="blog-meta-one mt-35 wow fadeInUp" data-wow-delay={item.data_delay_time}>
                           <figure className={`post-img position-relative m0 ${item.class_name} ${style ? "rounded-5" : ""}`}>
                              <Link href="/blog_details" className={`stretched-link date tran3s ${style ? "rounded-5" : ""}`}>{item.date}</Link>
                           </figure>
                           <div className="post-data">
                              <div className="post-info"><Link href="/blog_details">{item.info_name}</Link> {item.info_time} min</div>
                              <div className="d-flex justify-content-between align-items-sm-center flex-wrap">
                                 <Link href="/blog_details" className="blog-title">
                                    <h4>{item.title}</h4>
                                 </Link>
                                 <Link href="/blog_details" className={`read-btn d-flex align-items-center justify-content-center tran3s ${style ? "rounded-circle" : ""}`}>
                                    <i className="bi bi-arrow-up-right"></i></Link>
                              </div>
                           </div>
                        </article>
                     </div>
                  ))}
               </div>

               <div className="section-btn text-center md-mt-60">
                  <Link href="/blog_03" className="btn-eight"><span>Explore All</span> <i className="bi bi-arrow-up-right"></i></Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Blog
