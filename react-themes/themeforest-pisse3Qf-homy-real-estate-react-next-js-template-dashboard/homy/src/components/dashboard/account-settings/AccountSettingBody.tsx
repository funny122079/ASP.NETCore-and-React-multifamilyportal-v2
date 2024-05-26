"use client"
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo"
import Link from "next/link"

const AccountSettingBody = () => {
   return (

      <div className="dashboard-body">
         <div className="position-relative">
            <DashboardHeaderTwo title="Account Settings" />
            <h2 className="main-title d-block d-lg-none">Account Settings</h2>
            <div className="bg-white card-box border-20">
               <h4 className="dash-title-three">Edit & Update</h4>
               <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="dash-input-wrapper mb-20">
                           <label htmlFor="">First Name</label>
                           <input type="text" placeholder="Rashed" />
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="dash-input-wrapper mb-20">
                           <label htmlFor="">Last Name</label>
                           <input type="text" placeholder="Kabir" />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="dash-input-wrapper mb-20">
                           <label htmlFor="">Email</label>
                           <input type="email" placeholder="rshakbair365@gmal.com" />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="dash-input-wrapper mb-20">
                           <label htmlFor="">Phone Number</label>
                           <input type="tel" placeholder="+810 321 889 021" />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="dash-input-wrapper mb-20">
                           <label htmlFor="">Password</label>
                           <input type="password" />

                           <div className="info-text d-sm-flex align-items-center justify-content-between mt-5">
                              <p className="m0">Want to change the password?
                                 <Link href="/dashboard/account-settings/password-change">Click here</Link></p>
                              <Link href="/dashboard/account-settings/password-change" className="chng-pass">Change Password</Link>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="button-group d-inline-flex align-items-center mt-30">
                     <Link href="#" className="dash-btn-two tran3s me-3">Save</Link>
                     <Link href="#" className="dash-cancel-btn tran3s">Cancel</Link>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AccountSettingBody
