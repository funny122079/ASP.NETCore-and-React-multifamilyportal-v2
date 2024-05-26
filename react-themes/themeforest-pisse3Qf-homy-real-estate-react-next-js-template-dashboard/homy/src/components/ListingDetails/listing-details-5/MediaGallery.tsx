import Fancybox from "@/components/common/Fancybox";

const large_img: string[] = ["1", "2", "3"]

const MediaGallery = () => {
   return (
      <div className="media-gallery-grid mb-50">
         <div className="row">
            <div className="col-md-7 d-flex">
               <div className="position-relative h-100 w-100 sm-pb-20">
                  <a className="media-bg h-100" style={{ backgroundImage: `url(/assets/images/listing/img_61.jpg)` }}></a>
                  <Fancybox
                     options={{
                        Carousel: {
                           infinite: true,
                        },
                     }}
                  >
                     <div className="img-fancy-btn fw-500 fs-16 color-dark">
                        Sell all 37 Photos
                        {large_img.map((thumb: any, index: any) => (
                           <a key={index} className="d-block" data-fancybox="gallery9" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
                        ))}
                     </div>
                  </Fancybox>
               </div>
            </div>
            <div className="col-md-5 d-flex">
               <div className="w-100 h-100">
                  <Fancybox
                     options={{
                        Carousel: {
                           infinite: true,
                        },
                     }}
                  >
                     <div className="row">
                        <div className="col-6 mb-25 md-mb-20">
                           <a href="/assets/images/listing/img_62.jpg" className="media-bg sm" data-fancybox style={{ backgroundImage: `url(/assets/images/listing/img_62.jpg)` }}></a>
                        </div>
                        <div className="col-6 mb-25 md-mb-20">
                           <a href="/assets/images/listing/img_63.jpg" className="media-bg sm" data-fancybox style={{ backgroundImage: `url(/assets/images/listing/img_63.jpg)` }}></a>
                        </div>
                        <div className="col-6">
                           <a href="/assets/images/listing/img_64.jpg" className="media-bg sm" data-fancybox style={{ backgroundImage: `url(/assets/images/listing/img_64.jpg)` }}></a>
                        </div>
                        <div className="col-6">
                           <a href="/assets/images/listing/img_65.jpg" className="media-bg sm" data-fancybox style={{ backgroundImage: `url(/assets/images/listing/img_65.jpg)` }}></a>
                        </div>
                     </div>
                  </Fancybox>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MediaGallery
