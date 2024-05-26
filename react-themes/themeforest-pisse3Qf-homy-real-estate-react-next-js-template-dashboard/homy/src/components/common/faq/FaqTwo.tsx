"use client"
import faq_data from '@/data/home-data/FaqData';

const FaqTwo = () => {

   return (
      <>
         {faq_data.filter((items) => items.page === "home_2_faq_2").map((item) => (
            <div key={item.id} className="accordion-item">
               <h2 className="accordion-header">
                  <button className={`accordion-button ${item.id === 3 ? "" : "collapsed"}`} type="button"
                     data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true"
                     aria-controls={`collapse${item.id}`}>
                     {item.question}
                  </button>
               </h2>
               <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${item.id === 3 ? "show" : ""}`}
                  data-bs-parent="#accordionTwo">
                  <div className="accordion-body">
                     <p>{item.answer}</p>
                  </div>
               </div>
            </div>
         ))}
      </>
   )
}

export default FaqTwo
