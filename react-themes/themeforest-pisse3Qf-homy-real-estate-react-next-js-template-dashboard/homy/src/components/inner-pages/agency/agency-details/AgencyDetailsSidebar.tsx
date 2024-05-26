import AgencyFormTwo from "@/components/forms/AgencyFormTwo";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link"

const AgencyDetailsSidebar = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="col-lg-4">
         <div className="theme-sidebar-one dot-bg p-30 ms-xxl-3 md-mt-60">
            <div className="tour-schedule bg-white p-30 mb-40">
               <h5 className="mb-40">Contact Form</h5>
               <AgencyFormTwo />
               <Link href="tel:+548842445" className="btn-eight sm text-uppercase w-100 rounded-0 tran3s">CALL NOW</Link>
            </div>

            <div className="agent-finder bg-white p-30">
               <h5 className="mb-40">Search Agency</h5>
               <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-box-one mb-25">
                     <div className="label">Agency Name</div>
                     <input type="text" placeholder="Type Agency Name" className="type-input" />
                  </div>
                  <div className="input-box-one mb-25">
                     <div className="label">Keyword</div>
                     <input type="text" placeholder="Apartments, Villa" className="type-input" />
                  </div>
                  <div className="input-box-one mb-25">
                     <div className="label">Location</div>
                     <NiceSelect className="nice-select rounded-0"
                        options={[
                           { value: "01", text: "Dhanmondi, Dhaka" },
                           { value: "02", text: "Acapulco, Mexico" },
                           { value: "03", text: "Berlin, Germany" },
                           { value: "04", text: "Cannes, France" },
                           { value: "05", text: "Delhi, India" },
                           { value: "06", text: "Giza, Egypt" },
                           { value: "07", text: "Havana, Cuba" },
                        ]}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name=""
                        placeholder="" />
                  </div>
                  <button className="btn-nine text-uppercase w-100 mb-10">SEARCH</button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AgencyDetailsSidebar
