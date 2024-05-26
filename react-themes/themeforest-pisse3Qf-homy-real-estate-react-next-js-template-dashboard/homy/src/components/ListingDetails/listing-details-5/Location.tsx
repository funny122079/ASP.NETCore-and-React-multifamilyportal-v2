import React from 'react'

const Location = () => {
   return (
      <div className="accordion-item">
         <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTenA" aria-expanded="true" aria-controls="collapseTenA">
               Location
            </button>
         </h2>
         <div id="collapseTenA" className="accordion-collapse collapse">
            <div className="accordion-body">
               <div className="property-location">
                  <div className="wrapper">
                     <div className="map-banner">
                        <div className="gmap_canvas h-100 w-100">
                           <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83088.3595592641!2d-105.54557276330914!3d39.29302101722867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2sbd!4v1699764452737!5m2!1sen!2sbd"
                              width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade" className="w-100 h-100">
                           </iframe>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Location
