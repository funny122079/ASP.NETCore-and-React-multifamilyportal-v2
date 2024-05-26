import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/icon_52.svg"
import icon_2 from "@/assets/images/icon/icon_53.svg"
import icon_3 from "@/assets/images/icon/icon_54.svg"
import icon_4 from "@/assets/images/icon/icon_55.svg"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   desc: JSX.Element;
}[];

const score_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Transit Score",
      desc: (<><span className="color-dark">63</span>/100 (Moderate Distance Walkable)</>),
   },
   {
      id: 2,
      icon: icon_2,
      title: "School Score",
      desc: (<><span className="color-dark">70</span>/100 (Short Distance Walkable)</>),
   },
   {
      id: 3,
      icon: icon_3,
      title: "Medical Score",
      desc: (<><span className="color-dark">77</span>/100 (Short Distance Walkable)</>),
   },
   {
      id: 4,
      icon: icon_4,
      title: "Shopping Mall Score",
      desc: (<><span className="color-dark">42</span>/100 (Long Distance Walkable)</>),
   },
];

const CommonProPertyScore = () => {
   return (
      <>
         <h4 className="mb-20">Walk Score</h4>
         <p className="fs-20 lh-lg pb-30">Risk management and compliance, when approached strategically, have the potential</p>
         <div className="row">
            {score_data.map((item) => (
               <div key={item.id} className="col-md-6">
                  <div className="block d-flex align-items-center mb-50 sm-mb-30">
                     <Image src={item.icon} alt="" className="lazy-img icon" />
                     <div className="text">
                        <h6>{item.title}</h6>
                        <p className="fs-16 m0">{item.desc}</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </>
   )
}

export default CommonProPertyScore;
