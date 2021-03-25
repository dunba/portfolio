import React, { useState } from "react";
import "./contact.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <>
      <h1 id="contacttitle">Get In Touch</h1>

      <div className="contactdiv">
        <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
          <div className="names">
            <div className="nameblox">
              <p>Name</p>
              <input
                name="name"
                required
                id="inputname"
                ref={register}
                type="text"
              />
            </div>

            <div className="nameblox">
              <p>Email</p>
              <input
                required
                name="email"
                id="inputname"
                ref={register}
                type="email"
              />
            </div>
          </div>

          <div className="emailsubject">
            <div className="nameblox">
              <p>Subject</p>
              <input
                name="subject"
                required
                ref={register}
                id="inputname2"
                type="text"
              />
            </div>
          </div>

          <div>
            <p>Message</p>
            <textarea
              name="message"
              ref={register}
              resize="none"
              rows="5"
              cols="80"
            />
          </div>
          <button type="submit" className="sendbtn" id="subbttn">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
