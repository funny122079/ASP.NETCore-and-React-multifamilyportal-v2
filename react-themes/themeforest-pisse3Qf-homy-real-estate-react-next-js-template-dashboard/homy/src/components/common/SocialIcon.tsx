import Link from "next/link"

const SocialIcon = () => {
   return (
      <>
         <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
         <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
         <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
      </>
   )
}

export default SocialIcon
