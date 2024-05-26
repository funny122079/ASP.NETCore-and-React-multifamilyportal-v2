"use client"
import Image from "next/image";
import Link from "next/link";
import BlogComment from "../common-blog/BlogComment";
import BlogForm from "@/components/forms/BlogForm";
import BlogSidebar from "../common-blog/BlogSidebar";

import blogDetailsIcon from "@/assets/images/icon/icon_67.svg";
import blogDetailsThumb_1 from "@/assets/images/blog/blog_img_16.jpg";

interface ContentType {
   title_1: string;
   title_2: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   desc_4: JSX.Element;
   desc_5: JSX.Element;
   desc_6: JSX.Element;
   blog_details_list: string[];
   icon: string[];
}

const content_data: ContentType = {
   title_1: "Print, publishing qui visual ux layout mockups.",
   title_2: "Easy Process for Buy an Apartments",
   desc_1: (<>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucib nisl. Lacus vel facilisis volutpat est velit egestas.</>),
   desc_2: (<>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sit amet ris nullam eget felis. Enim praesent elementum facilisis leo. Ultricies leo integer.</>),
   desc_3: (<>Quick solutions coupled with extraordinary nice performance—a recommendation that&apos;s great.</>),
   desc_4: (<>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in quis elit future. The same Duis aute irure dolor in reprehenderit .</>),
   desc_5: (<>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in quis future. The same Duis aute irure dolor in reprehenderit. sunt in culpa qui official deserunt mollit anim id avoid est laborum.</>),
   desc_6: (<>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official deserunt mollit anim Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sit amet ris nullam eget felis.</>),
   blog_details_list: ["Find the problem first", "Make research and find out the solution", "Finalize the solution & apply."],
   icon: ["fa-brands fa-whatsapp", "fa-brands fa-x-twitter", "fa-brands fa-instagram", "fa-brands fa-viber"]
}

const { title_1, title_2, desc_1, desc_2, desc_3, desc_4, desc_5, desc_6, blog_details_list, icon } = content_data;

const BlogDetailsArea = () => {
   return (
      <div className="blog-details border-top mt-130 xl-mt-100 pt-100 xl-pt-80 mb-150 xl-mb-100">
         <div className="container">
            <div className="row gx-xl-5">
               <div className="col-lg-8">
                  <div className="blog-post-meta mb-60 lg-mb-40">
                     <div className="post-info"><Link href="/blog_02">Rashed Kabir .</Link> 6 min</div>
                     <h3 className="blog-title">{title_1}</h3>
                  </div>
               </div>
            </div>
            <div className="row gx-xl-5">
               <div className="col-lg-8">
                  <article className="blog-post-meta">
                     <figure className="post-img position-relative m0"
                        style={{ backgroundImage: `url(/assets/images/blog/blog_img_11.jpg)` }}>
                        <div className="fw-500 date d-inline-block">17 SEP</div>
                     </figure>
                     <div className="post-data pt-50 md-pt-30">
                        <p>{desc_1}</p>
                        <p>{desc_2}</p>
                        <div className="quote-wrapper">
                           <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                              <Image src={blogDetailsIcon} alt="" className="lazy-img" /></div>
                           <div className="row">
                              <div className="col-xxl-10 col-xl-11 col-lg-12 col-md-9 m-auto">
                                 <h4>{desc_3}</h4>
                              </div>
                           </div>
                           <h6>James Bond. <span>USA</span></h6>
                        </div>
                        <h5>{title_2}</h5>
                        <p>{desc_4}</p>
                        <ul className="style-none list-item">
                           {blog_details_list.map((list, i) => (
                              <li key={i}>{list}</li>
                           ))}
                        </ul>
                        <p>{desc_5}</p>
                        <div className="img-meta"><Image src={blogDetailsThumb_1} alt="" className="lazy-img w-100" /></div>
                        <div className="img-caption">Buy or rent properties with no commission</div>
                        <p>{desc_6}</p>
                     </div>
                     <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                        <ul className="d-flex align-items-center tags style-none pt-20">
                           <li>Tag:</li>
                           <li><Link href="#">Apartments,</Link></li>
                           <li><Link href="#">loan,</Link></li>
                           <li><Link href="#">Sale</Link></li>
                        </ul>
                        <ul className="d-flex share-icon align-items-center style-none pt-20">
                           <li>Share:</li>
                           {icon.map((icon, index) => (
                              <li key={index}><Link href="#"><i className={icon}></i></Link></li>
                           ))}
                        </ul>
                     </div>
                  </article>

                  <BlogComment />
                  <BlogForm />
               </div>
               <BlogSidebar style={true} />
            </div>
         </div>
      </div>
   )
}

export default BlogDetailsArea
