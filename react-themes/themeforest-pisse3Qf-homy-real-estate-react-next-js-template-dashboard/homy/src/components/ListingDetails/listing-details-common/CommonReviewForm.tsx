import AgencyFormOne from "@/components/forms/AgencyFormOne";
import LoginModal from "@/modals/LoginModal";
import Link from "next/link";
import { useState } from "react";

const CommonReviewForm = () => {

   const [loginModal, setLoginModal] = useState<boolean>(false);

   return (
      <>
         <h4 className="mb-20">Leave A Reply</h4>
         <p className="fs-20 lh-lg pb-15">
         <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal"
				className="color-dark fw-500 text-decoration-underline">Sign in</Link> to post your comment or
            signup if you don&apos;t have any account.</p>

         <AgencyFormOne style={true} />

         <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      </>
   )
}

export default CommonReviewForm;
