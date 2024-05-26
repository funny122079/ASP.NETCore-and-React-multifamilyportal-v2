"use client"
import inner_blog_data from '@/data/inner-data/BlogData'
import BlogSidebar from '../common-blog/BlogSidebar'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import ReactPaginate from 'react-paginate';

import paginateIcon from "@/assets/images/icon/icon_46.svg";

const BlogOneArea = () => {
   
   const blog = inner_blog_data.filter(items => items.page === "blog_1");

   const itemsPerPage = 6;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blog.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blog.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % blog.length;
      setItemOffset(newOffset);
   };

   return (
      <div className='blog-section-three mt-130 xl-mt-100 mb-150 xl-mb-100'>
         <div className="container container-large">
            <div className="row">
               <div className="col-lg-8">
                  <div className="row gx-xxl-5">
                     {currentItems.map((item) => (
                        <div key={item.id} className="col-md-6">
                           <article className="blog-meta-two tran3s position-relative z-1 mb-70 lg-mb-40 wow fadeInUp">
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
                                 <Link href="/blog_details" className="btn-four inverse rounded-circle"><i className="fa-thin fa-arrow-up-right"></i></Link>
                              </div>
                           </article>
                        </div>
                     ))}
                  </div>

                  <ReactPaginate
                     breakLabel="..."
                     nextLabel={<Image src={paginateIcon} alt="" className="ms-2" />}
                     onPageChange={handlePageClick}
                     pageRangeDisplayed={3}
                     pageCount={pageCount}
                     previousLabel={<Image src={paginateIcon} alt="" className="ms-2" />}
                     renderOnZeroPageCount={null}
                     className="pagination-one square d-flex align-items-center style-none pt-30"
                  />
               </div>
               <BlogSidebar />
            </div>
         </div>
      </div>
   )
}

export default BlogOneArea
