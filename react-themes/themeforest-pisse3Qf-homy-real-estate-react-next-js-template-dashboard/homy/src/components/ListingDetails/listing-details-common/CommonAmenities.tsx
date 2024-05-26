const ammenities_data: string[] = ["A/C & Heating", "Garages", "Garden", "Disabled Access", "Swimming Pool", "Parking", "Wifi", "Pet Friendly", "Ceiling Height", "Fireplace", "Play Ground", "Elevator"]

const CommonAmenities = () => {
   return (
      <>
         <h4 className="mb-20">Amenities</h4>
         <p className="fs-20 lh-lg pb-25">Risk management & compliance, when approached strategically, have the
            potential</p>
         <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
            {ammenities_data.map((list, i) => (
               <li key={i}>{list}</li>
            ))}
         </ul>
      </>
   )
}

export default CommonAmenities
