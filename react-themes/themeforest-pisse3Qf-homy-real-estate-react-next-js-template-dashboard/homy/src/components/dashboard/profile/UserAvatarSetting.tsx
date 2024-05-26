import NiceSelect from "@/ui/NiceSelect";

const UserAvatarSetting = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="row">
         <div className="col-12">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">Username*</label>
               <input type="text" placeholder="JonyRio" />
            </div>
         </div>
         <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">First Name*</label>
               <input type="text" placeholder="Mr Johny" />
            </div>
         </div>
         <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">Last Name*</label>
               <input type="text" placeholder="Riolek" />
            </div>
         </div>
         <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">Email*</label>
               <input type="email" placeholder="companyinc@mail.com" />
            </div>
         </div>
         <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">Position*</label>
               <NiceSelect className="nice-select"
                  options={[
                     { value: "1", text: "Agent" },
                     { value: "2", text: "Agency" },
                  ]}
                  defaultCurrent={0}
                  onChange={selectHandler}
                  name=""
                  placeholder="" />
            </div>
         </div>
         <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">Phone Number*</label>
               <input type="tel" placeholder="+880 01723801729" />
            </div>
         </div>
         <div className="col-sm-6">
            <div className="dash-input-wrapper mb-30">
               <label htmlFor="">Website*</label>
               <input type="text" placeholder="http://somename.com" />
            </div>
         </div>
         <div className="col-12">
            <div className="dash-input-wrapper">
               <label htmlFor="">About*</label>
               <textarea className="size-lg"
                  placeholder="I am working for the last 4 years as a web designer, graphics designer and well as UI/UX designer............."></textarea>
               <div className="alert-text">Brief description for your profile. URLs are hyperlinked.</div>
            </div>
         </div>
      </div>
   )
}

export default UserAvatarSetting
