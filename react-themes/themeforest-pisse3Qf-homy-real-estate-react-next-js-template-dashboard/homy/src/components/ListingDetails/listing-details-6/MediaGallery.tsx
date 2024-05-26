import Image, { StaticImageData } from "next/image";

const largeThumb: string[] = ["1", "2", "3"];

import bigCarousel_1 from "@/assets/images/listing/img_43.jpg"
import bigCarousel_2 from "@/assets/images/listing/img_44.jpg"
import bigCarousel_3 from "@/assets/images/listing/img_45.jpg"
import bigCarousel_4 from "@/assets/images/listing/img_46.jpg"

import smallCarousel_1 from "@/assets/images/listing/img_43_s.jpg"
import smallCarousel_2 from "@/assets/images/listing/img_44_s.jpg"
import smallCarousel_3 from "@/assets/images/listing/img_45_s.jpg"
import smallCarousel_4 from "@/assets/images/listing/img_46_s.jpg"
import Fancybox from "@/components/common/Fancybox";

interface DataType {
   big_carousel: StaticImageData[];
   small_carousel: StaticImageData[];
}

const gallery_data: DataType = {
   big_carousel: [bigCarousel_1, bigCarousel_2, bigCarousel_3, bigCarousel_4],
   small_carousel: [smallCarousel_1, smallCarousel_2, smallCarousel_3, smallCarousel_4],
}

const { big_carousel, small_carousel } = gallery_data;


const MediaGallery = () => {
   return (
      <div className="media-gallery-grid p0 mb-60">
         <div id="media_slider" className="carousel slide row">
        <div className="col-lg-10">
          <div className="bg-white shadow4 border-20 p-30 md-mb-20">
            <div className="position-relative z-1 overflow-hidden border-20">
              <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
                Sell all 37 Photos
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: true,
                    },
                  }}
                >
                  {largeThumb.map((thumb: any, index: any) => (
                    <a key={index} className="d-block" data-fancybox="img4" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
                  ))}
                </Fancybox>
              </div>

              <div className="carousel-inner">
                {big_carousel.map((carousel, index) => (
                  <div key={index} className="carousel-item active">
                    <Image src={carousel} alt="" className="border-20 w-100" />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#media_slider"
                data-bs-slide="prev">
                <i className="bi bi-chevron-left"></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#media_slider"
                data-bs-slide="next">
                <i className="bi bi-chevron-right"></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className="carousel-indicators position-relative border-15 bg-white shadow4 p-15 w-100 h-100">
            {small_carousel.map((carousel, i) => (
              <button key={i} type="button" data-bs-target="#media_slider" data-bs-slide-to={`${i}`}className="active"
                aria-current="true" aria-label="Slide 1">
                <Image src={carousel} alt="" className="border-10 w-100" />
              </button>
            ))}
          </div>
        </div>
      </div>
      </div>
   )
}

export default MediaGallery
