import NiceSelect from "@/ui/NiceSelect";

const DropdownOne = ({ style }: any) => {

   const selectHandler = (e: any) => { };

   const searchHandler = () => {
      window.location.href = '/listing_0';
   };

   return (
      <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
         <div className="row gx-0 align-items-center">
            <div className="col-xl-3 col-lg-4">
               <div className="input-box-one border-left">
                  <div className="label">I’m looking to...</div>
                  <NiceSelect className={`nice-select ${style ? "fw-normal" : ""}`}
                     options={[
                        { value: "apartments", text: "Buy Apartments" },
                        { value: "condos", text: "Rent Condos" },
                        { value: "houses", text: "Sell Houses" },
                        { value: "industrial", text: "Rent Industrial" },
                        { value: "villas", text: "Sell Villas" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className={`${style ? "col-xl-3" : "col-xl-4"} col-lg-4`}>
               <div className="input-box-one border-left">
                  <div className="label">Location</div>
                  <NiceSelect className={`nice-select location ${style ? "fw-normal" : ""}`}
                     options={[
                        { value: "germany", text: "Berlin, Germany" },
                        { value: "dhaka", text: "Dhanmondi, Dhaka" },
                        { value: "mexico", text: "Acapulco, Mexico" },
                        { value: "france", text: "Cannes, France" },
                        { value: "india", text: "Delhi, India" },
                        { value: "giza", text: "Giza, Egypt" },
                        { value: "cuba", text: "Havana, Cuba" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-xl-3 col-lg-4">
               <div className="input-box-one border-left border-lg-0">
                  <div className="label">Price Range</div>
                  <NiceSelect
                     className={`nice-select ${style ? "fw-normal" : ""}`}
                     options={[
                        { value: "1", text: "$10,000 - $200,000" },
                        { value: "2", text: "$20,000 - $300,000" },
                        { value: "3", text: "$30,000 - $400,000" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className={`${style ? "col-xl-3" : "col-xl-2"}`}>
               <div className="input-box-one lg-mt-10">
                  <button className={`fw-500 tran3s ${style ? "w-100 tran3s search-btn-three" : "text-uppercase search-btn"}`}>{style ? "Search Now" : "Search"}</button>
               </div>
            </div>
         </div>
      </form>
   );
};

export default DropdownOne;
