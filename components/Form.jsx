'use client'
import { useState } from 'react';
import { AiFillCheckCircle } from "react-icons/ai";

const Form = () => {

const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');

    //function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
    
        try {
            //get the email value from the input field
            const enteredEmail = e.target.email.value;
    
            //validate the email format
            const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            if (!enteredEmail.match(emailPattern)) {
                setErrorMessage('Valid email required');
                return; //don't proceed further if email is invalid
            }
    
            //store the email entered
            setEmail(enteredEmail);
    
            //show the success popup
            setShowPopup(true);
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
        }
    };
    

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md group" noValidate>
            {/* Disable default validation with noValidate*/}

            <div className="font-roboto-regular mb-6">
                <div className='flex flex-column justify-between'>
                    <label htmlFor="email" className="block mb-2 text-xs text-gray-900 font-roboto-bold">
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
            className="font-roboto-bold text-white bg-dark-grey hover:bg-gradient-to-r from-pink to-orange rounded-lg text-sm px-5 py-4 text-center w-full mb-6 md:mb-0
                    group-invalid:cursor-not-allowed"
            >
            Subscribe to monthly newsletter
            </button>

            {/* Show the popup window*/}
            {showPopup && (
                <div className="fixed top-0 left-0 right-0 flex justify-center items-center h-screen z-50 md:p-4 overflow-x-hidden overflow-y-auto md:inset-0 bg-charcoal-grey">
                    <div className="flex flex-col bg-white border border-gray-200 md:rounded-2xl shadow text-sm md:max-w-lg md:max-h-fit p-10 h-full md:h-auto w-full">
                        <AiFillCheckCircle className="text-pink text-4xl"></AiFillCheckCircle>
                        <h1 className='font-roboto-bold text-5xl text-dark-grey py-4 mt-4'>Thanks for subscribing!</h1>                            
                        <p className='font-roboto-regular text-sm'>A confirmation email has been sent to <span className='font-roboto-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                        <button 
                            onClick={() => setShowPopup(false)}
                            className="font-roboto-bold text-white bg-dark-grey hover:bg-gradient-to-r from-pink to-orange rounded-lg text-sm px-5 py-4 text-center w-full mt-10"
                        >
                            Dismiss message
                        </button>
                    </div>
                </div>
                
            )}

        </form>
            
    );
};

export default Form;