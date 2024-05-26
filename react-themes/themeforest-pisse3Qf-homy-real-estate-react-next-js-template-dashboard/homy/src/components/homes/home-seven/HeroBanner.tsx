import DropdownSeven from "@/components/search-dropdown/home-dropdown/DropdownSeven"

const HeroBanner = () => {
   return (
      <div className="hero-banner-seven position-relative mt-120 lg-mt-100">
         <div id="" className="h-100">
            <div className="google-map-home" id="contact-google-map" data-map-lat="40.925372" data-map-lng="-74.276544" data-icon-path="/assetes/images/home2/map-icon.png" data-map-title="Awesome Place" data-map-zoom="12"></div>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83088.3595592641!2d-105.54557276330914!3d39.29302101722867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2sbd!4v1699764452737!5m2!1sen!2sbd"
               width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
               referrerPolicy="no-referrer-when-downgrade" className="w-100 h-100">
            </iframe>
         </div>

         <div className="search-wrapper-overlay">
            <div className="container container-large">
               <div className="position-relative">
                  <div className="row">
                     <div className="col-12">
                        <DropdownSeven />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroBanner
