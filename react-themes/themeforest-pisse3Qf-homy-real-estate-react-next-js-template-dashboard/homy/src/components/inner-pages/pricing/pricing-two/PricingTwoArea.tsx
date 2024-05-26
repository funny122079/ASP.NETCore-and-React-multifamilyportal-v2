import Link from "next/link";

interface DataType {
   id: number;
   class_name?: string;
   plan: string;
   price: string;
   desc: string;
   price_features: {
      feature_title: string;
      feature_class?: string;
   }[];
}[];

const pricing_data: DataType[] = [
   {
      id: 1,
      class_name: "active",
      plan: "FREE PLAN",
      price: "0",
      desc: "per user/month",
      price_features: [{ feature_title: "60-day chat history" }, { feature_title: "Basic widget customization" }, { feature_title: "Ticketing system", feature_class: "disable" }, { feature_title: "Data security", feature_class: "disable" }]
   },
   {
      id: 2,
      plan: "STANDARD",
      price: "$12",
      desc: "per user/month",
      price_features: [{ feature_title: "60-day chat history" }, { feature_title: "Basic widget customization" }, { feature_title: "Ticketing system" }, { feature_title: "Data security", feature_class: "disable" }]
   },
   {
      id: 3,
      plan: "BUSINESS",
      price: "$39",
      desc: "per user/month",
      price_features: [{ feature_title: "60-day chat history" }, { feature_title: "Basic widget customization" }, { feature_title: "Ticketing system" }, { feature_title: "Data security" }]
   },
]

const PricingTwoArea = () => {
   return (
      <div className="pricing-section-two mt-150 xl-mt-100 mb-170 xl-mb-100">
         <div className="container">
            <div className="row">
               <div className="col-xxl-6 col-xl-5">
                  <div className="title-one">
                     <h3>No hidden charge, get your plan.</h3>
                  </div>
               </div>
               <div className="col-xl-5 ms-auto">
                  <p className="fs-24 pt-20">Try Free plan features for 14 days · No credit card required for exploration.
                  </p>
               </div>
            </div>

            <div className="row gx-xxl-5 pt-40 lg-pt-10">
               {pricing_data.map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className={`pr-column-wrapper mt-30 ${item.class_name}`}>
                        <div className="pr-header text-center mb-55">
                           <div className="plan fw-500 text-uppercase color-dark">{item.plan}</div>
                           <strong className="price fw-500">{item.price}</strong>
                           <p className="fs-24">{item.desc}</p>
                        </div>
                        <ul className="style-none text-center">
                           {item.price_features.map((feature, i) => (
                              <li key={i} className={feature.feature_class}>{feature.feature_title}</li>
                           ))}
                        </ul>
                        <div className="pr-footer text-center mt-60">
                           <Link href="#" className="btn-twelve w-100 rounded-0 sm">Subscribe Now</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default PricingTwoArea
