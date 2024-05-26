import blog_data from "@/data/home-data/BlogData"
import Link from "next/link"

const Blog = () => {
   return (
      <div className="blog-section-two mt-170 xl-mt-120">
         <div className="container container-large">
            <div className="position-relative">
               <div className="title-one mb-50 xl-mb-30 lg-mb-10 wow fadeInUp">
                  <h3>Our Blog</h3>
               </div>

               <div className="row gx-xxl-5">
                  {blog_data.filter((items) => items.page === "home_4").map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6">
                        <article className="blog-meta-two tran3s position-relative z-1 mt-35 wow fadeInUp">
                           <figure className={`post-img position-relative m0 ${item.class_name}`}>
                              <Link href="/blog_details" className="date">{item.date}</Link>
                           </figure>
                           <div className="post-data">
                              <div className="post-info"><Link href="/blog_details">{item.info_name}</Link> {item.info_time} min</div>
                              <div className="d-flex justify-content-between align-items-sm-center flex-wrap">
                                 <Link href="/blog_details" className="blog-title"><h4>{item.title}</h4></Link>
                                 <Link href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></Link>
                              </div>
                           </div>
                           <div className="hover-content tran3s">
                              <Link href="/blog_details" className="date">{item.date}</Link>
                              <div className="post-data">
                                 <div className="post-info"><Link href="/blog_details">{item.info_name}</Link> {item.info_time} min</div>
                                 <div className="d-flex justify-content-between align-items-sm-center flex-wrap">
                                    <Link href="/blog_details" className="blog-title"><h4>{item.title}</h4></Link>
                                 </div>
                              </div>
                              <Link href="#" className="btn-four inverse rounded-circle"><i className="fa-thin fa-arrow-up-right"></i></Link>
                           </div>
                        </article>
                     </div>
                  ))}
               </div>

               <div className="section-btn text-center md-mt-60">
                  <Link href="/blog_01" className="btn-eight"><span>Explore All</span> <i className="bi bi-arrow-up-right"></i></Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Blog
