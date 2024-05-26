"use client"
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   email: string;
   phone: number;
   message: string;
}

const schema = yup
   .object({
      phone: yup.number()
         .transform((originalValue, originalObject) => {
            // Convert empty string to NaN
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Phone number is required')
         .required('Phone must be a number'),
      email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

const AgencyFormTwo = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Review submit successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="input-box-three mb-25">
            <div className="label">Your Email*</div>
            <input type="email" {...register("email")} placeholder="Enter mail address" className="type-input rounded-0" />
            <p className="form_error">{errors.email?.message}</p>
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Your Phone*</div>
            <input type="tel" {...register("phone")} placeholder="Your phone number" className="type-input rounded-0" />
            <p className="form_error">{errors.phone?.message}</p>
         </div>
         <div className="input-box-three mb-15">
            <div className="label">Message*</div>
            <textarea {...register("message")} placeholder="Hello, I am interested in [Califronia Apartments]" className="rounded-0"></textarea>
            <p className="form_error">{errors.message?.message}</p>
         </div>
         <button type='submit' className="btn-nine text-uppercase w-100 mb-20">INQUIry</button>
      </form>
   )
}

export default AgencyFormTwo
