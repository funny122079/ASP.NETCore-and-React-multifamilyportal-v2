import NumberNiceSelect from "@/ui/NumberNiceSelect";

const ListingDetails = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="bg-white card-box border-20 mt-40">
         <h4 className="dash-title-three">Listing Details</h4>
         <div className="row align-items-end">
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Size in ft*</label>
                  <input type="text" placeholder="Ex: 3,210 sqft" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Bedrooms*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 0 },
                        { value: 2, text: 1 },
                        { value: 3, text: 2 },
                        { value: 4, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Bathrooms*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 0 },
                        { value: 2, text: 1 },
                        { value: 3, text: 2 },
                        { value: 4, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Kitchens*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 0 },
                        { value: 2, text: 1 },
                        { value: 3, text: 2 },
                        { value: 4, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Garages</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 1 },
                        { value: 2, text: 2 },
                        { value: 3, text: 3 },
                        { value: 4, text: 4 },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Garage Size</label>
                  <input type="text" placeholder="Ex: 1,230 sqft" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Year Built*</label>
                  <input type="text" placeholder="Type Year" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Floors No*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 0 },
                        { value: 2, text: 1 },
                        { value: 3, text: 2 },
                        { value: 4, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-12">
               <div className="dash-input-wrapper">
                  <label htmlFor="">Description*</label>
                  <textarea className="size-lg" placeholder="Write about property..."></textarea>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ListingDetails;
