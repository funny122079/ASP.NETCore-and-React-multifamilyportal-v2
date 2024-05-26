const amenities: string[] = ["A/C & Heating", "Garages", "Swimming Pool", "Parking", "Lake View", "Garden", "Disabled Access", "Pet Friendly", "Ceiling Height", "Outdoor Shower", "Refrigerator", "Fireplace", "Wifi", "TV Cable", "Barbeque", "Laundry", "Dryer", "Lawn", "Elevator"];

const SelectAmenities = () => {
   return (
      <div className="bg-white card-box border-20 mt-40">
         <h4 className="dash-title-three m0 pb-5">Select Amenities</h4>
         <ul className="style-none d-flex flex-wrap filter-input">
            {amenities.map((amenity, index) => (
               <li key={index}>
                  <input type="checkbox" name="Amenities" value={index} />
                  <label>{amenity}</label>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default SelectAmenities
