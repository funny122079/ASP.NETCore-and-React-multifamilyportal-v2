import category_data from "@/data/home-data/CategoryData"
import Link from "next/link"

const Category = () => {
   return (
      <div className="category-section-two mt-170 xl-mt-120">
         <div className="container container-large">
            <div className="position-relative">
               <div className="title-one text-center text-lg-start mb-60 xl-mb-40 lg-mb-20 wow fadeInUp">
                  <h3>Popular Categories.</h3>
               </div>
               <div className="wrapper flex-wrap d-flex justify-content-center justify-content-md-between align-items-center">
                  {category_data.filter((items) => items.page === "home_4").map((item) => (
                     <div key={item.id} className={`card-style-seven position-relative z-1 rounded-circle overflow-hidden d-flex align-items-center justify-content-center wow fadeInUp ${item.item_bg_img}`} data-wow-delay={item.data_delay_time}>
                        <Link href="/listing_03" className="title stretched-link"><h4 className="text-white tran3s">{item.text}</h4></Link>
                     </div>
                  ))}
               </div>
               <div className="section-btn text-center md-mt-60">
                  <Link href="/listing_02" className="btn-eleven"><span>See all categories</span> <i className="bi bi-chevron-right"></i></Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Category
