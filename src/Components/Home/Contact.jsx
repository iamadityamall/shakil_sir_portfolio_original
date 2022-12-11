import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <section
      data-aos="fade-in"
      id="contact"
      className="transition-all duration-150 ease-in-out grid grid-cols-1 gap-y-8 py-20 lg:gap-16"
    >
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-bold font-poppins border-b-4  border-black lg:text-7xl">
          Contacts
        </h1>
        <p className="font-poppins text-sm px-2 text-justify pt-4 lg:text-lg lg:w-[50vw] lg:text-center">
          At present, I am looking for full-time, part-time, internships
          opportunities in the web technologies as a frontend developer
        </p>
      </div>
      <div className="flex flex-col space-y-10 md:grid md:grid-cols-2 md:items-center md:space-y-0">
        <div className="flex flex-col p-2 font-poppins space-y-4">
          <aside className="flex flex-col space-y-2">
            <div className="flex space-x-5 items-center">
              <figure className="text-3xl">
                <BiMessageDetail />
              </figure>
              <p className="font-bold">Have a question?</p>
            </div>
            <div className="flex flex-col space-y-2 pl-14 text-sm">
              <p>I am here to help</p>
              <p>Email me at contact.adityamall@gmail.com</p>
            </div>
          </aside>
          <aside className="flex flex-col space-y-2">
            <div className="flex space-x-5 items-center">
              <figure className="text-3xl">
                <HiLocationMarker />
              </figure>
              <p className="font-bold">Current Location</p>
            </div>
            <div className="flex flex-col space-y-2 pl-14 text-sm">
              <p>Mumbai, India</p>
              <p>Open to relocate</p>
            </div>
          </aside>
        </div>
        <form
          className="flex flex-col space-y-2 rounded-md"
          method="POST"
          action="https://formsubmit.co/185aaa3a07699dacb61b853e16a9bef8"
        >
          <div className="flex flex-col space-y-2 rounded-md">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-2 rounded-md border-2 border-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="w-full p-2 rounded-md border-2 border-black"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-2 rounded-md border-2 border-black"
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            className="w-full rounded-md p-2 border-2 border-black"
            placeholder="type your message"
          ></textarea>
          <button className="w-full p-2 bg-white text-black rounded-lg border-2 border-black font-poppins">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
