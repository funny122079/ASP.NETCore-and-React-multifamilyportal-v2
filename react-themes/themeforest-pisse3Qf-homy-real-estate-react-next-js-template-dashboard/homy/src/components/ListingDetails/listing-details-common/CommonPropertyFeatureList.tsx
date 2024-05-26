import property_feature_list from "@/data/inner-data/PropertyFeatureListData"

const CommonPropertyFeatureList = () => {

   return (
      <div className="accordion" id="accordionTwo">
         {property_feature_list.map((item) => (
            <div key={item.id} className="accordion-item">
               <h2 className="accordion-header">
                  <button className={`accordion-button ${item.id === 1 ? "" : "collapsed"}`} type="button"
                     data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="false"
                     aria-controls={`collapse${item.id}`}>
                     {item.title}
                  </button>
               </h2>
               <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${item.id === 1 ? "show" : ""}`}
                  data-bs-parent="#accordionTwo">
                  <div className="accordion-body">
                     <div className="feature-list-two">
                        <ul className="style-none d-flex flex-wrap justify-content-between">
                           {item.feature_list.map((list, i) => (
                              <li key={i}><span>{list.title} </span> <span className="fw-500 color-dark">{list.count}</span></li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default CommonPropertyFeatureList;
