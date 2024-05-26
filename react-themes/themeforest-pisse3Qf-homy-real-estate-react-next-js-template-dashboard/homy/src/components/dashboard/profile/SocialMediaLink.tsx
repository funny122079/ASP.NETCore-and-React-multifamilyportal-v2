import Link from "next/link"

const SocialMediaLink = () => {
   return (
      <div className="bg-white card-box border-20 mt-40">
         <h4 className="dash-title-three">Social Media</h4>

         <div className="dash-input-wrapper mb-20">
            <label htmlFor="">Network 1</label>
            <input type="text" placeholder="https://www.facebook.com/zubayer0145" />
         </div>
         <div className="dash-input-wrapper mb-20">
            <label htmlFor="">Network 2</label>
            <input type="text" placeholder="https://twitter.com/FIFAcom" />
         </div>
         <Link href="#" className="dash-btn-one"><i className="bi bi-plus"></i> Add more link</Link>
      </div>
   )
}

export default SocialMediaLink
