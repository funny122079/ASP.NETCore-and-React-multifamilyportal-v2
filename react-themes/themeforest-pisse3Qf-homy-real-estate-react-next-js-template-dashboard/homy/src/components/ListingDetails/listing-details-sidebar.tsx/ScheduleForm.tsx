"use client"
const ScheduleForm = () => {
   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="input-box-three mb-25">
            <div className="label">Your Name*</div>
            <input type="text" placeholder="Your full name" className="type-input" />
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Your Email*</div>
            <input type="email" placeholder="Enter mail address" className="type-input" />
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Your Phone*</div>
            <input type="tel" placeholder="Your phone number" className="type-input" />
         </div>
         <div className="input-box-three mb-15">
            <div className="label">Message*</div>
            <textarea placeholder="Hello, I am interested in [Califronia Apartments]"></textarea>
         </div>
         <button className="btn-nine text-uppercase rounded-3 w-100 mb-10">INQUIry</button>
      </form>
   )
}

export default ScheduleForm
