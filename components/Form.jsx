'use client'
import { useState } from 'react';

const Form = () => {

const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');

    //function to open the popup
    const openPopup = () => {
        setShowPopup(true);
    };

    //function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        //get the email value from the input field
        const enteredEmail = e.target.email.value;

        //store the email entered
        setEmail(enteredEmail); 
        
        openPopup();

        } catch (error) {
        setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md group" noValidate>
            {/* Disable default validation with noValidate*/}

            <div className="font-regular mb-6">
                <label htmlFor="email" className="block mb-2 text-xs font-medium text-gray-900 font-bold">
                    Email address
                </label>
                <input
                    type="email"
                    id="email"
                    
                    //i used the peer class to show the error message based on the validation of the email. If it's invalid and is not empty or focused, then it'll be shown
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 
                    invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-500 
                    invalid:[&:not(:placeholder-shown):not(:focus)]:bg-opacity-30 
                    peer"
                    placeholder="email@company.com"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
                <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    Valid email required
                </span>
            </div>
            <button
            type="submit"

            //i used the group class to disable the clicking of the button if something inside the form is invalid
            className="font-bold text-white bg-[#242742] hover:bg-gradient-to-r from-[#FF527B] to-[#FE6939] rounded-lg text-sm px-5 py-4 text-center w-full mb-6 md:mb-0
                    group-invalid:pointer-events-none
                    group-invalid:opacity-80"
            >
            Subscribe to monthly newsletter
            </button>

            {/* Show the popup window*/}
            {showPopup && (
                <div className="fixed top-0 left-0 right-0 flex justify-center items-center h-screen z-50 md:p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#36384e]">
                    <div className="flex flex-col bg-white border border-gray-200 md:rounded-2xl shadow text-sm md:max-w-lg md:max-h-fit p-10 h-full md:h-auto w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>                                
                        <h1 className='font-bold text-5xl text-[#242742] py-4 mt-4'>Thanks for subscribing!</h1>                            
                        <p className='font-regular text-sm'>A confirmation email has been sent to <span className='font-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                        <button 
                            onClick={() => setShowPopup(false)}
                            className="font-bold text-white bg-[#242742] hover:bg-gradient-to-r from-[#FF527B] to-[#FE6939] rounded-lg text-sm px-5 py-4 text-center w-full mt-10"
                        >
                            Dismiss message
                        </button>
                    </div>
                </div>
                
            )}

            {/* Display error message */}
            {errorMessage && (
            <p className="text-red-600">{errorMessage}</p>
            )}

            
        </form>
    );
};

export default Form;