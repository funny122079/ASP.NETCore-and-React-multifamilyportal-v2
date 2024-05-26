import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import rcPostImg_1 from "@/assets/images/blog/blog_img_08.jpg"
import rcPostImg_2 from "@/assets/images/blog/blog_img_09.jpg"
import rcPostImg_3 from "@/assets/images/blog/blog_img_10.jpg"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   date: string;
}

const rc_data: DataType[] = [
   {
      id: 1,
      img: rcPostImg_1,
      title: "10 days quick challenge for boost visitors.",
      date: "23 July, 2022",
   },
   {
      id: 2,
      img: rcPostImg_2,
      title: "Speaking remotely at WordCamp US.",
      date: "23 July, 2022",
   },
   {
      id: 3,
      img: rcPostImg_3,
      title: "Monthly Roundup event December 2022.",
      date: "23 July, 2022",
   },
]

const BlogRcPost = () => {
   return (
      <div className="recent-news bg-white bg-wrapper mb-30">
         <h5 className="mb-20">Recent News</h5>
         {rc_data.map((item) => (
            <div key={item.id} className="news-block d-flex align-items-center pb-25">
               <div><Image src={item.img} alt="" className="lazy-img" /></div>
               <div className="post ps-4">
                  <h4 className="mb-5">
                     <Link href="/blog_details" className="title tran3s">{item.title}</Link>
                  </h4>
                  <div className="date">{item.date}</div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default BlogRcPost
