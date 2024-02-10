/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
const Hire_me = () => {
  const {
    register,
    handleSubmit,
    // setValue,
    reset,
    // control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onTouched",
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = React.useState(false);

  const apiKey = "f873cb0d-77f5-4854-a207-decc831cd275";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Derek Cross Website",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <div
      className="bg-gradient-to-b from-[#414b84] to-[#0d0346] h-full relative"
      id="contactme"
    >
      <div className="px-3 pt-20 lg:flex items-end justify-between gap-8 container mx-auto">
        <div className="lg:w-2/3">
          <p className="text-[#c0d6bb] lg:text-2xl text-xl uppercase">
            Hire me
          </p>
          <span className="flex pb-8 pt-4">
            <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f29b73] text-transparent bg-clip-text lg:text-[3rem] leading-normal text-2xl">
              Let's Talk
            </h1>
          </span>

          <div className="lg:hidden block mx-auto sm:w-[30rem] w-4/5 rounded-[560px] rounded-b-none border border-b-0 border-r-0 border-[#4c613e]">
            <img
              src="/assets/Main_Image.png"
              alt=""
              className="h-[106%] -mt-8 w-full"
            />
          </div>
          <form
            className="lg:w-11/12 flex flex-col lg:gap-6 gap-3 text-white lg:mt-0 mt-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}
            ></input>
            <div className="flex lg:gap-6 gap-3 w-full">
              <label htmlFor="Name" className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#0d0346] w-full px-4 h-16 outline-none"
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80,
                  })}
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </label>
              <label htmlFor="Email" className="w-full">
                <input
                  id="email_address"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-[#0d0346] w-full px-4 h-16 outline-none"
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </label>
            </div>
            <label htmlFor="Message" className="w-full">
              <textarea
                placeholder="Message..."
                className="resize-none bg-[#0d0346] w-full px-4 h-40 outline-none"
                // value={message}
                // onChange={(e) => setMessage(e.target.value)}
                {...register("message", {
                  required: "Enter your Message",
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </label>

            <div className="pt-4 flex justify-between h-40">
              <div>
                {isSubmitSuccessful && isSuccess && (
                  <div className="mt-3 text-sm text-center text-green-500">
                    {message || "Success. Message sent successfully"}
                  </div>
                )}
                {isSubmitSuccessful && !isSuccess && (
                  <div className="mt-3 text-sm text-center text-red-500">
                    {message || "Something went wrong. Please try later."}
                  </div>
                )}
              </div>
              <div className="bg-gradient-to-b from-[#414b84] to-[#0d0346] rounded-full rounded-b-none lg:w-40 w-32 lg:h-20 h-16 lg:p-8 p-6">
                <button
                  className="rounded-full bg-[#6797ff] text-[white] lg:h-24 h-20 lg:w-24 w-20 p-4 relative transition ease-out duration-300 transform hover:scale-125"
                  type="submit"
                >
                  <p className="lg:text-2xl text-lg font-medium">Send</p>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-40 w-20 lg:h-32 h-20 rounded-t-[560px] border-t border-[#0d0346] absolute left-0 bottom-0"></div>
        <div className="lg:block hidden xl:w-[30rem] lg:w-[35%] h-[70%] rounded-[560px] rounded-b-none border border-b-0 border-r-0 border-[#4c613e] absolute right-0">
          <img
            src="/assets/Main_Image_1.webp"
            alt=""
            className=" -mt-40  h-[134%] w-[85%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hire_me;
