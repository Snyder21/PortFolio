import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bpjmmddb", userInfo);
      toast.success("Your message has been sent succesfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!!");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 "
      >
        <h1 className="text-3xl font-bold mb-3">Contact Here</h1>
        <span>Fill the given form to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5 bg-col:#2272FF">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="https://getform.io/f/bpjmmddb"
            method="POST"
            className="bg-gray-300 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-black-200" htmlFor="fname">
                Full Name
              </label>
              <input
                {...register("fname", { required: true })}
                className="shadow rounded-lg appearance-none border px-2 py-3 text-black-200 leading-tight focus:outline-none focus:shadow-outline"
                id="fname"
                name="fname"
                type="text"
                placeholder="Enter first name"
              />
              {errors.fname && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-black-700" htmlFor="lname">
                Last Name
              </label>
              <input
                {...register("lname", { required: true })}
                className="shadow rounded-lg appearance-none border px-2 py-3 text-black-200 leading-tight focus:outline-none focus:shadow-outline"
                id="lname"
                name="lname"
                type="text"
                placeholder="Enter last name"
              />
              {errors.lname && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-black-700" htmlFor="email">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border px-2 py-3 text-black-200 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your  Email"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-black-700" htmlFor="message">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border px-2 py-3 text-black-200 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your  message"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Click to send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
