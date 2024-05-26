import Image from "next/image";

import icon_1 from "@/assets/images/dashboard/icon/icon_28.svg";

interface DataType {
   id: number;
   name: string;
   date: string;
   title: string;
   desc: string;
   class_name?: string;
   attached_file_1?: boolean;
   attached_file_2?: boolean;
}[]

const email_read_data: DataType[] = [
   {
      id: 1,
      name: "Jenny Rio.",
      date: "AUG 22",
      title: "Work inquiry from google.",
      desc: "Hello, This is Jenny from google. We’r the largest online platform offer...",
      class_name: "read",
      attached_file_1: true,
   },
   {
      id: 2,
      name: "Hasan Islam.",
      date: "MAY 22",
      title: "Account Manager",
      desc: "Hello, Greeting from Uber. Hope you doing great. I am approcing to you for..",
      class_name: "primary selected",
      attached_file_2: true,
   },
   {
      id: 3,
      name: "Jannatul Ferdaus.",
      date: "JUN 22",
      title: "Product Designer Opportunities",
      desc: "Hello, This is Jannat from HuntX. We offer business solution to our client..",
   },
   {
      id: 4,
      name: "Jakie Chan",
      date: "NOV 22",
      title: "Hunting Marketing Specialist",
      desc: "Hello, We’r the well known Real Estate Inc provide best interior/exterior solut...",
      class_name: "read",
   },
   {
      id: 5,
      name: "Jakie Chan",
      date: "NOV 22",
      title: "Hunting Marketing Specialist",
      desc: "Hello, We’r the well known Real Estate Inc provide best interior/exterior solut...",
      class_name: "read",
   },
   {
      id: 6,
      name: "Jakie Chan",
      date: "NOV 22",
      title: "Hunting Marketing Specialist",
      desc: "Hello, We’r the well known Real Estate Inc provide best interior/exterior solut...",
      class_name: "read",
   },
]

const EmailReadPanel = () => {
   return (
      <div className="email-read-panel">
         {email_read_data.map((item) => (
            <div key={item.id} className={`email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 ${item.class_name}`}>
               <div className="email-short-preview position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="sender-name">{item.name}</div>
                     <div className="date">{item.date}</div>
                  </div>
                  <div className="mail-sub">{item.title}</div>
                  <div className="mail-text">{item.desc}</div>
                  {item.attached_file_1 && <div className="attached-file-preview d-flex align-items-center mt-15">
                     <div className="file d-flex align-items-center me-2">
                        <Image src={icon_1} alt="" className="lazy-img me-2" />
                        <span>details.pdf</span>
                     </div>
                  </div>}
                  {item.attached_file_2 && <div className="attached-file-preview d-flex align-items-center mt-15">
                     <div className="file d-flex align-items-center me-2">
                        <Image src={icon_1} alt="" className="lazy-img me-2" />
                        <span>details.pdf</span>
                     </div>
                     <div className="file d-flex align-items-center me-2">
                        <Image src={icon_1} alt="" className="lazy-img me-2" />
                        <span>form.pdf</span>
                     </div>
                  </div>}
               </div>
            </div>
         ))}
      </div>
   )
}

export default EmailReadPanel
