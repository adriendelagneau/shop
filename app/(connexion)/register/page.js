"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import RippleButton from "@/components/button/RippleButton";
import { signUpWithCredential } from "@/app/_authActions";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    const {name, email, password } = data;

    const res = await signUpWithCredential({ name, email, password })
    
    if(res?.msg) alert(res?.msg)
  };


  return (
    <div className="pt-[300px] w-[300px] min-h-screen flex flex-col items-center mx-auto">
          <h1 className="pb-8 text-5xl">Register</h1>
          
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-auto p-4 border shadow-xl"
          >
              
        <div className="relative mt-6">
          <input
            type="text"
            className="relative z-10 w-full p-2 bg-transparent border-2 rounded-lg outline-none peer focus:border-stone-900 placeholder:text-transparent"
            id="text1"
            placeholder="name"
            name="name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 8,
                message: "Min length is 8",
              },
              maxLength: {
                value: 32,
                message: "Max length is 32",
              },
            })}
          />
          <label
            htmlFor="text1"
            className="absolute z-20 px-1 text-sm text-gray-600 transition-all bg-white left-2 peer-placeholder-shown:top-3 peer-focus:-top-2 -top-2 peer-focus:text-stone-900 peer-placeholder-shown:-z-10 peer-focus:z-20 peer-placeholder-shown:text-base peer-focus:text-sm"
          >
            Name
          </label>
          <p className="w-full h-5 pt-1 text-red-800">{errors.name?.message}</p>
        </div>

        <div className="relative mt-6">
          <input
            type="email"
            className="relative z-10 w-full p-2 bg-transparent border-2 rounded-lg outline-none peer focus:border-stone-900 placeholder:text-transparent"
            id="email"
            placeholder="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 8,
                message: "Min length is 8",
              },
              maxLength: {
                value: 32,
                message: "Max length is 32",
              },
            })}
          />
          <label
            htmlFor="email"
            className="absolute z-20 px-1 text-sm text-gray-600 transition-all bg-white left-2 peer-placeholder-shown:top-3 peer-focus:-top-2 -top-2 peer-focus:text-stone-900 peer-placeholder-shown:-z-10 peer-focus:z-20 peer-placeholder-shown:text-base peer-focus:text-sm"
          >
            Email
          </label>
          <p className="w-full h-5 pt-1 text-red-800">
            {errors.email?.message}
          </p>
        </div>

        <div className="relative mt-6">
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="relative z-10 w-full p-2 pr-8 bg-transparent border-2 rounded-lg outline-none peer focus:border-stone-900 placeholder:text-transparent"
            id="password"
            placeholder="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Min length is 8",
              },
              maxLength: {
                value: 32,
                message: "Max length is 32",
              },
            })}
          />
          <label
            htmlFor="password"
            className="absolute z-20 px-1 text-sm text-gray-600 transition-all bg-white left-2 peer-placeholder-shown:top-3 peer-focus:-top-2 -top-2 peer-focus:text-stone-900 peer-placeholder-shown:-z-10 peer-focus:z-20 peer-placeholder-shown:text-base peer-focus:text-sm"
          >
            Password
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute w-4 h-4 top-3.5 right-3 hover:cursor-pointer z-10"
            onMouseDown={(e) => {
              e.preventDefault();
              setIsPasswordVisible((prevState) => !prevState);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="w-full h-5 pt-1 text-red-800">
            {errors.password?.message}
          </p>
        </div>

        <RippleButton
          text={isLoading ? "Loading..." : "Register"}
          buttonClasses={"w-full mt-10 text-xl rounded-md bg-stone-900"}
          type="submit"
          disabled={isLoading}
        />
      </form>

      <Link href="/login" className="mt-9 hover:text-stone-900 text-md">
        Already an account? LOGIN.
      </Link>
    </div>
  );
};

export default Register;
