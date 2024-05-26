interface DataType {
   title: string;
   count: string;
}[];

const list_data: DataType[] = [
   { title: "School & Collage:", count: "0.9km", },
   { title: "Grocery Center:", count: "0.2km", },
   { title: "Metro Station:", count: "0.7km", },
   { title: "Gym:", count: "2.3km", },
   { title: "University:", count: "2.7km", },
   { title: "Hospital:", count: "1.7km", },
   { title: "Shopping Mall:", count: "1.1km", },
   { title: "Police Station:", count: "1.2km", },
   { title: "Bus Station:", count: "1.1km", },
   { title: "River:", count: "3.1km", },
   { title: "Market:", count: "3.4km", },
];

const CommonNearbyList = () => {
   return (
      <>
         <h4 className="mb-20">What’s Nearby</h4>
         <p className="fs-20 lh-lg pb-30">Risk management and compliance, when approached strategically, have th
            potential to go beyond mitigating threats.</p>
         <ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
            {list_data.map((list, i) => (
               <li key={i}>{list.title}<span className="fw-500 color-dark">{list.count}</span></li>
            ))}
         </ul>
      </>
   )
}

export default CommonNearbyList;
