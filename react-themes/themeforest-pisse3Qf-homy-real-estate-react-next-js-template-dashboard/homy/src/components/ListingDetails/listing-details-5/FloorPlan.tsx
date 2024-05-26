import Image from "next/image"
import floorPlan_1 from "@/assets/images/listing/floor_1.jpg"
import floorPlan_2 from "@/assets/images/listing/floor_2.jpg"

const FloorPlan = () => {
   return (
      <div className="accordion-item">
         <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFiveA" aria-expanded="true" aria-controls="collapseFiveA">
               Floor Plans
            </button>
         </h2>
         <div id="collapseFiveA" className="accordion-collapse collapse">
            <div className="accordion-body">
               <div className="property-floor-plan">
                  <div className="wrapper">
                     <div id="floor-plan" className="carousel slide">
                        <div className="carousel-inner">
                           <div className="carousel-item active">
                              <Image src={floorPlan_1} alt="" className="w-100" />
                           </div>
                           <div className="carousel-item">
                              <Image src={floorPlan_2} alt="" className="w-100" />
                           </div>
                           <div className="carousel-item">
                              <Image src={floorPlan_1} alt="" className="w-100" />
                           </div>
                        </div>
                        <div className="carousel-indicators position-static pt-25">
                           <button type="button" data-bs-target="#floor-plan" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                           <button type="button" data-bs-target="#floor-plan" data-bs-slide-to="1" aria-label="Slide 2"></button>
                           <button type="button" data-bs-target="#floor-plan" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FloorPlan
