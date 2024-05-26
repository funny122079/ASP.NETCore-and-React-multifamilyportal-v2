"use client"
const MortgageCalculator = () => {
   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="input-box-three mb-25">
            <div className="label">Home Price*</div>
            <input type="tel" placeholder="1,32,789" className="type-input" />
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Down Payment*</div>
            <input type="tel" placeholder="$" className="type-input" />
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Interest Rate*</div>
            <input type="tel" placeholder="3.5%" className="type-input" />
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Loan Terms (Years)</div>
            <input type="tel" placeholder="24" className="type-input" />
         </div>
         <button className="btn-five text-uppercase sm rounded-3 w-100 mb-10">CALCULATE</button>
      </form>
   )
}

export default MortgageCalculator
