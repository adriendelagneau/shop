'use client'

import { useForm } from "react-hook-form";
import RippleButton from "./button/RippleButton";
import { forgotPasswordWitnCredentials } from "@/app/_authActions";

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  

    const submit = async (data) => {
      const { email} = data;
  
  
      try {
       const res = await forgotPasswordWitnCredentials(email)
            if(res?.msg) alert(res?.msg)
      } catch (error) {
        console.error(error);
  
      }
    };
  
    return (
        <>
        
        <form className="w-[300px] mx-auto h-auto" onSubmit={handleSubmit(submit)}>

<div className="relative mt-6">
  <input
    type="email"
    className="relative z-10 w-full p-2 bg-transparent border-2 rounded-lg outline-none peer focus:border-stone-900 placeholder:text-transparent"
    id="email"
    placeholder="email"
    name='email'
    {...register("email", {
      required: "Email is required",
      minLength: {
        value: 8,
        message: "Min length is 8"
      },
      maxLength: {
        value: 32,
        message: "Max length is 32"
      }
    })}
  />
  <label htmlFor="email" className="absolute z-20 px-1 text-sm text-gray-600 transition-all bg-white left-2 peer-placeholder-shown:top-3 peer-focus:-top-2 -top-2 peer-focus:text-stone-900 peer-placeholder-shown:-z-10 peer-focus:z-20 peer-placeholder-shown:text-base peer-focus:text-sm">Email</label>
  <p className='w-full h-5 pt-1 text-red-800'>{errors.email?.message}</p>
</div>



<RippleButton type={"submit"} text={"send Email"} buttonClasses={"w-full mt-10 text-xl rounded-md bg-stone-900 "} />
</form>
        </>
  )
}

export default ForgotPassword