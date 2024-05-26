import Image, { StaticImageData } from "next/image"

import icon_1 from "@/assets/images/dashboard/icon/icon_28.svg"

interface DataType {
   id: number;
   name: string;
   date: string;
   title: string;
   desc: string;
   icon?: StaticImageData;
   class_name?: string;
}

const message_data: DataType[] = [
   {
      id: 1,
      name: "Jenny Rio.",
      date: "Aug 22",
      title: "Work inquiry from google.",
      desc: "Hello, This is Jenny from google. We’r the largest online platform offer...",
      icon: icon_1,
      class_name: "read border-0 pt-0"
   },
   {
      id: 2,
      name: "Hasan Islam.",
      date: "May 22",
      title: "Product Designer Opportunities",
      desc: "Hello, Greeting from Uber. Hope you doing great. I am approcing to you for..",
      class_name: "primary"
   },
   {
      id: 3,
      name: "Jakie Chan",
      date: "July 22",
      title: "Hunting Marketing Specialist",
      desc: "Hello, This is Jannat from HuntX. We offer business solution to our client..",
   },
]

const RecentMessage = () => {
   return (
      <div className="message-wrapper">
         <div className="message-sidebar border-0">
            <div className="email-read-panel">
               {message_data.map((item) => (
                  <div key={item.id} className={`email-list-item ${item.class_name}`}>
                     <div className="email-short-preview position-relative">
                        <div className="d-flex align-items-center justify-content-between">
                           <div className="sender-name">{item.name}</div>
                           <div className="date">{item.date}</div>
                        </div>
                        <div className="mail-sub">{item.title}</div>
                        <div className="mail-text">{item.desc}</div>
                        {item.icon &&
                           <div className="attached-file-preview d-flex align-items-center mt-15">
                              <div className="file d-flex align-items-center me-2">
                                 <Image src={item.icon} alt="" className="lazy-img me-2" />
                                 <span>details.pdf</span>
                              </div>
                           </div>
                        }
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default RecentMessage
