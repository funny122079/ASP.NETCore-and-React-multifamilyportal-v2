import Image from "next/image"
import Link from "next/link"

import commentImg_1 from "@/assets/images/blog/avatar_01.jpg"
import commentImg_2 from "@/assets/images/blog/avatar_02.jpg"
import commentImg_3 from "@/assets/images/blog/avatar_03.jpg"

const BlogComment = () => {
   return (
      <div className="blog-comment-area">
         <h3 className="blog-inner-title pb-35">2 Comments</h3>
         <div className="comment position-relative d-flex">
            <Image src={commentImg_1} alt="" className="lazy-img user-avatar rounded-circle" />
            <div className="comment-text">
               <div className="name fw-500">Al Hasani</div>
               <div className="date">27 Aug, 2023, 4:10pm</div>
               <p>One touch of a red-hot stove is usually all we need to avoid that kind of lorem discomfort
                  in future. The same true we experience </p>
               <Link href="#" className="reply-btn tran3s">Reply</Link>
               <div className="comment position-relative reply-comment d-flex">
                  <Image src={commentImg_2} alt="" className="lazy-img user-avatar rounded-circle" />
                  <div className="comment-text">
                     <div className="name fw-500">Rashed ka.</div>
                     <div className="date">29 Aug, 2023, 7:30pm</div>
                     <p>Lorem ipsum dolor sit amet consectetur. Feugiat suspendisse ipsum purus in pharetra
                        neque libero. Varius ut consectetur pellentesque</p>
                     <Link href="#" className="reply-btn tran3s">Reply</Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="comment position-relative d-flex">
            <Image src={commentImg_3} alt="" className="lazy-img user-avatar rounded-circle" />
            <div className="comment-text">
               <div className="name fw-500">Jubayer Al Hasan</div>
               <div className="date">12 June, 2023, 7:30pm</div>
               <p>Lorem ipsum dolor sit amet consectetur. Enim in aceu velit. Euismod non posu pellentesque
                  neque. Feugiat cras egestas facilisis.</p>
               <Link href="#" className="reply-btn tran3s">Reply</Link>
            </div>
         </div>
      </div>
   )
}

export default BlogComment
