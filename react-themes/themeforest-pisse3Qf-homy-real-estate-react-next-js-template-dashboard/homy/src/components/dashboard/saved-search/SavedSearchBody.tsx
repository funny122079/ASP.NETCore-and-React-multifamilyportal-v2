import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo"
import Image from "next/image";
import Link from "next/link"

import icon_1 from "@/assets/images/icon/icon_46.svg";

interface DataType {
   id: number;
   title: string;
   date: string;
}[];
const table_data: DataType[] = [
   {
      id: 1,
      title: "Galaxy Family Home",
      date: "13 Sep, 2023"
   },
   {
      id: 2,
      title: "Big Apartments",
      date: "27 Aug, 2023"
   },
   {
      id: 3,
      title: "Villa in California with pool",
      date: "16 Jun, 2023"
   },
   {
      id: 4,
      title: "Small Houses",
      date: "4 Apr, 2023"
   },
   {
      id: 5,
      title: "Flat for Rent USA",
      date: "14 Feb, 2023"
   },
   {
      id: 6,
      title: "Apartments Near Market",
      date: "8 Jan, 2023"
   },
   {
      id: 7,
      title: "Home for Rent",
      date: "15 Dec, 2022"
   },
]
const SavedSearchBody = () => {
   return (
      <div className="dashboard-body">
         <div className="position-relative">
            <DashboardHeaderTwo title="Saved Search" />
            <h2 className="main-title d-block d-lg-none">Saved Search</h2>

            <div className="bg-white card-box p0 border-20">
               <div className="table-responsive pt-25 pb-25 pe-4 ps-4">
                  <table className="table saved-search-table">
                     <thead>
                        <tr>
                           <th scope="col">Title</th>
                           <th scope="col">Date</th>
                           <th scope="col">Action</th>
                        </tr>
                     </thead>
                     <tbody className="border-0">
                        {table_data.map((item) => (
                           <tr key={item.id}>
                              <td><Link href="#" className="property-name tran3s color-dark fw-500">{item.title}</Link></td>
                              <td>{item.date}</td>
                              <td>
                                 <div className="d-flex justify-content-end btns-group">
                                    <Link href="#"><i className="fa-sharp fa-regular fa-eye" data-bs-toggle="tooltip"
                                       title="View"></i></Link>
                                    <Link href="#" data-bs-toggle="tooltip" title="Delete"><i
                                       className="fa-regular fa-trash"></i></Link>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            <ul style={{marginLeft:"15px"}} className="pagination-one d-flex align-items-center style-none pt-40">
               <li className="me-3"><Link href="#">1</Link></li>
               <li className="selected"><Link href="#">2</Link></li>
               <li><Link href="#">3</Link></li>
               <li><Link href="#">4</Link></li>
               <li>....</li>
               <li className="ms-2"><Link href="#" className="d-flex align-items-center">
                  Last <Image src={icon_1} alt="" className="ms-2" /></Link></li>
            </ul>
         </div>
      </div>
   )
}

export default SavedSearchBody
