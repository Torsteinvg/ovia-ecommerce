"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactFormData {
  name: string;
  number: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  // Handle form submission
  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-[url('https://ovia.no/wp-content/uploads/2023/10/Clip-path-group.png')] bg-gray-50 bg-no-repeat bg-left-bottom">
      <div className="py-20 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 font-cloveris text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <input
              type="text"
              id="name"
              className={`h-[70px] px-6 py-2 bg-gray-50 border border-black text-gray-900 text-sm  focus:placeholder:text-[#db572e] placeholder:text-base block w-full ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Name*"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              id="number"
              className={`h-[70px] px-6 py-2 bg-gray-50 border border-black text-gray-900 text-sm focus:placeholder:text-[#db572e] placeholder:text-base block w-full ${
                errors.number ? "border-red-500" : ""
              }`}
              placeholder="Telephone*"
              {...register("number", { required: "Number is required" })}
            />
            {errors.number && (
              <p className="text-red-500 text-sm">{errors.number.message}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              id="email"
              className={`h-[70px] px-6 py-2 bg-gray-50 border border-black text-gray-900 text-sm  focus:placeholder:text-[#db572e] placeholder:text-base block w-full ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Email*"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <textarea
              id="message"
              rows={6}
              className={`block h-[184px] py-2 px-6 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-black focus:placeholder:text-[#db572e] placeholder:text-base  ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Message*"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              id="sende-melding-btn"
              className="text-white bg-black uppercase hover:bg-[#db572e] font-medium text-md px-8 py-4"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
