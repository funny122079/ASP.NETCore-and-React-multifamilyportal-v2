"use client"
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import NiceSelect from '@/ui/NiceSelect';

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

const AgencyFormOne = ({ style }: any) => {

   const selectHandler = (e: any) => { };

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Review submit successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={` ${style ? "" : "bg-white p-40"}`}>
         <div className="row">
            <div className="col-12">
               <div className="input-box-two mb-30">
                  <div className="label">Title*</div>
                  <input type="text" {...register("name")} placeholder="Rashed Kabir" className={`type-input ${style ? "" : "rounded-0"}`} />
                  <p className="form_error">{errors.name?.message}</p>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="input-box-two mb-30">
                  <div className="label">Email*</div>
                  <input type="email" {...register("email")} placeholder="rshdkabir@gmail.com" className={`type-input ${style ? "" : "rounded-0"}`} />
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="input-box-two mb-30">
                  <div className="label">Ratings*</div>
                  <NiceSelect
                     className={`nice select ${style ? "" : "rounded-0"}`}
                     options={[
                        { value: "01", text: "Ratings" },
                        { value: "02", text: "Five Star" },
                        { value: "02", text: "Four Star" },
                        { value: "02", text: "Three Star" },
                        { value: "02", text: "Two Star" },
                        { value: "02", text: "One Star" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-12">
               <div className="input-box-two mb-30">
                  <textarea {...register("message")} placeholder="Write your review here..." className={`${style ? "" : "rounded-0"}`} ></textarea>
                  <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
         </div>
         <button type='submit' className={`btn-five text-uppercase sm ${style ? "" : "rounded-0"}`}>Post Review</button>
      </form>
   )
}

export default AgencyFormOne
