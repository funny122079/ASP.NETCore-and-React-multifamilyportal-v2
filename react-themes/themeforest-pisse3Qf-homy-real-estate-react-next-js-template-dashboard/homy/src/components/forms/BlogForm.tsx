"use client"
import LoginModal from "@/modals/LoginModal";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";

interface FormData {
   name: string;
   email: string;
   message: string;
}

const schema = yup
   .object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

const BlogForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Comment submit successfully', { position: 'top-center' });
      notify();
      reset();
   };

   const [loginModal, setLoginModal] = useState<boolean>(false);

   return (
      <>
         <div className="blog-comment-form">
            <h3 className="blog-inner-title">Leave A Comment</h3>
            <p><a onClick={() => setLoginModal(true)} style={{ cursor: "pointer" }} className="text-decoration-underline fw-500">Sign in</a> Sign-in to post your comment or signup
               if you don’t have any account.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-30">
               <div className="input-wrapper mb-30">
                  <label>Name*</label>
                  <input {...register("name")} type="text" placeholder="Rashed Kabir" />
                  <p className="form_error">{errors.name?.message}</p>
               </div>
               <div className="input-wrapper mb-40">
                  <label>Email*</label>
                  <input {...register("email")} type="email" placeholder="rshdkabir@gmail.com" />
                  <p className="form_error">{errors.email?.message}</p>
               </div>
               <div className="input-wrapper mb-30">
                  <textarea {...register("message")} placeholder="Your Comment"></textarea>
                  <p className="form_error">{errors.message?.message}</p>
               </div>
               <button className="btn-five rounded-0">Post Comment</button>
            </form>
         </div>
         <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      </>
   )
}

export default BlogForm;
