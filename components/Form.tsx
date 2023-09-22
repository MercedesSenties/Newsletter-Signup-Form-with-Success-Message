"use client";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Image from "next/image";
import DesktopImage from "/public/images/illustration-sign-up-desktop.svg";
import MobileImage from "/public/images/illustration-sign-up-mobile.svg";
import { listData, ListItem } from "@/data/listData";

const Form: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [invalidEmail, isInvalidEmail] = useState<boolean>(false);
  const [buttonOpacity, setButtonOpacity] = useState<number>(100);
  const [cursorStyle, setCursorStyle] = useState<string>("pointer");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = e.target.value;
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!enteredEmail.match(emailPattern)) {
      isInvalidEmail(true);
      setErrorMessage("Valid email required");
      //set button/cursor styles dinamically depending on email validation
      setButtonOpacity(40);
      setCursorStyle("not-allowed");
    } else {
      isInvalidEmail(false);
      setErrorMessage("");
      setButtonOpacity(100);
      setCursorStyle("pointer");
    }
  };

  //function to handle form submission
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!invalidEmail && e.target.email.value != "") {
        //show the success popup
        setShowPopup(true);
      }

      //set the last email entered
      setEmail(e.target.email.value);
    } catch {
      setErrorMessage("An error occurred, please try again");
      setShowPopup(false);
    }
  };

  return (
    <div>
      {/* Show the popup window when true and hide the newsletter box*/}
      {showPopup ? (
        <div className="flex justify-center items-center h-screen z-50 md:p-4 overflow-x-hidden overflow-y-auto md:inset-0 ">
          <div className="text-dark-grey flex flex-col bg-white border border-gray-200 md:rounded-2xl shadow text-sm md:max-w-lg md:max-h-fit p-10 h-full md:h-auto w-full">
            <AiFillCheckCircle className="text-pink text-4xl"></AiFillCheckCircle>
            <h1 className="font-roboto-bold text-5xl py-4 mt-4">
              Thanks for subscribing!
            </h1>
            <p className="text-sm">
              A confirmation email has been sent to{" "}
              <span className="font-roboto-bold">{email}</span>. Please open it
              and click the button inside to confirm your subscription.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="font-roboto-bold text-white bg-dark-grey hover:bg-gradient-to-r from-pink to-orange rounded-lg text-sm px-5 py-4 text-center w-full mt-10"
            >
              Dismiss message
            </button>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col items-center bg-white border border-gray-200 md:rounded-2xl 
        shadow h-full text-sm md:flex-row md:max-w-3xl md:max-h-fit lg:max-w-4xl"
        >
          {/*Render the mobile image on top of the text*/}
          <div className="md:hidden">
            <Image
              src={MobileImage}
              className="w-auto mb-5"
              alt="Mobile Image"
            />
          </div>

          <div className="px-12 text-dark-grey">
            <div>
              <h1 className="font-roboto-bold text-5xl">Stay updated!</h1>
              <p className="py-4 text-sm">
                Join 60,000+ product managers receiving monthly updates on:
              </p>

              <ul className="list-none pb-6">
                {listData.map((data: ListItem, index) => (
                  <li
                    className="flex md:items-center space-x-4 py-1"
                    key={index}
                  >
                    <AiFillCheckCircle className="text-pink text-2xl" />
                    <p>{data.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md group"
              noValidate
            >
              {/* Disable default validation with noValidate*/}

              <div className="mb-6">
                <div className="flex flex-column justify-between">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xs text-gray-900 font-roboto-bold"
                  >
                    Email address
                  </label>
                  {/* Display error message */}
                  {errorMessage && (
                    <p className="text-xs text-red">{errorMessage}</p>
                  )}
                </div>
                <input
                  type="email"
                  id="email"
                  onBlur={handleEmailChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                                invalid:[&:not(:placeholder-shown):not(:focus)]:border-red 
                                invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red 
                                invalid:[&:not(:placeholder-shown):not(:focus)]:bg-opacity-30"
                  placeholder="email@company.com"
                  required
                />
              </div>
              <button
                type="submit"
                //i used the group class to disable the clicking of the button if something inside the form is invalid
                className={`font-roboto-bold cursor-${cursorStyle} text-white bg-dark-grey hover:bg-gradient-to-r from-pink to-orange rounded-lg text-sm px-5 py-4 
                  text-center w-full mb-6 md:mb-0 opacity-${buttonOpacity}`}
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>

          {/* Render the desktop image on the right*/}
          <div className="hidden md:block">
            <Image
              src={DesktopImage}
              className="max-h-fit p-5 pl-0"
              alt="Desktop Image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
