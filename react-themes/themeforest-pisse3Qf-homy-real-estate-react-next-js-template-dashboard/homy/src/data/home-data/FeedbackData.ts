import { StaticImageData } from "next/image";

import feedbackThumb_1 from "@/assets/images/media/img_01.jpg";
import feedbackThumb_2 from "@/assets/images/media/img_02.jpg";
import feedbackThumb_3 from "@/assets/images/media/img_03.jpg";

import feedback3Thumb_1 from "@/assets/images/media/img_01.jpg";
import feedback3Thumb_2 from "@/assets/images/media/img_02.jpg";
import feedback3Thumb_3 from "@/assets/images/media/img_03.jpg";

import quoteIcon from "@/assets/images/icon/icon_29.svg";

interface DataType {
   id: number;
   page: string;
   desc: string;
   title: string;
   country: string;
   thumb: StaticImageData;
   quote_icon: StaticImageData;
}

const feedback_data: DataType[] = [
   {
      id: 1,
      page: "home_3",
      desc: "Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!",
      title: "Rashed Kabir",
      country: "Milan, Itlay",
      thumb: feedback3Thumb_1,
      quote_icon: quoteIcon,
   },
   {
      id: 2,
      page: "home_3",
      desc: "Found our dream home. Great Business with them. Thank you for excellent service.",
      title: "Jannat Ferdu.",
      country: "London, Uk",
      thumb: feedback3Thumb_2,
      quote_icon: quoteIcon,
   },
   {
      id: 3,
      page: "home_3",
      desc: "Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!",
      title: "Jubayer Hasan",
      country: "Miami, USA",
      thumb: feedback3Thumb_3,
      quote_icon: quoteIcon,
   },
   {
      id: 4,
      page: "home_3",
      desc: "Found our dream home. Great Business with them. Thank you for excellent service.",
      title: "Jannat Ferdu.",
      country: "London, Uk",
      thumb: feedback3Thumb_2,
      quote_icon: quoteIcon,
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      desc: "Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!",
      title: "Rashed Kabir,",
      country: "Claifornia",
      thumb: feedbackThumb_1,
      quote_icon: quoteIcon,
   },
   {
      id: 2,
      page: "home_5",
      desc: "Found our dream home. Great Business with them. simplified tasks, and saved time. Thank You",
      title: "Jannat Ferdu,",
      country: "Claifornia",
      thumb: feedbackThumb_2,
      quote_icon: quoteIcon,
   },
   {
      id: 3,
      page: "home_5",
      desc: "Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!",
      title: "Jubayer Hasan,",
      country: "Claifornia",
      thumb: feedbackThumb_3,
      quote_icon: quoteIcon,
   },
]

export default feedback_data;