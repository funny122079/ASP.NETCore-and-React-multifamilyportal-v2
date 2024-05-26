import { StaticImageData } from "next/image"

import brandLogo_1 from "@/assets/images/logo/p_logo_01.png"
import brandLogo_2 from "@/assets/images/logo/p_logo_02.png"
import brandLogo_3 from "@/assets/images/logo/p_logo_03.png"
import brandLogo_4 from "@/assets/images/logo/p_logo_04.png"
import brandLogo_5 from "@/assets/images/logo/p_logo_05.png"
import brandLogo_6 from "@/assets/images/logo/p_logo_06.png"

interface DataType {
   id: number;
   page: string;
   img: StaticImageData[];
}

const brand_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      img: [brandLogo_1, brandLogo_2, brandLogo_3, brandLogo_4, brandLogo_5, brandLogo_6, brandLogo_3],
   },
]

export default brand_data;