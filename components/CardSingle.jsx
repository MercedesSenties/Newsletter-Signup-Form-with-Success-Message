import Image from 'next/image';
import DesktopImage from "../public/images/illustration-sign-up-desktop.svg"
import MobileImage from "../public/images/illustration-sign-up-mobile.svg"
import Form from "./Form"
import { AiFillCheckCircle } from "react-icons/ai";

const CardSingle = () => {
    

    return(
        <div className="flex flex-col items-center bg-white border border-gray-200 md:rounded-2xl shadow text-sm md:flex-row md:max-w-4xl md:max-h-fit">

            {/*Render the mobile image on top of the text*/}
            <div className="md:hidden">
                <Image
                src={MobileImage}
                className="w-auto max-h-min cursor-default mb-5"
                alt="Mobile Image"
                />
            </div>

            <div className='px-12'>
                <div>
                    <h1 className='font-bold text-5xl text-dark-grey'>Stay updated!</h1>
                    <p className='py-4 text-sm'>Join 60,000+ product managers receiving monthly updates on:</p>


                    <ul className="list-none pb-6 font-regular">
                        <li className="flex md:items-center space-x-4 py-1">
                            <AiFillCheckCircle className="text-pink text-2xl"></AiFillCheckCircle>
                            <p>Product discovery and building what matters</p>
                        </li>
                        <li className="flex md:items-center space-x-4 py-1">
                            <AiFillCheckCircle className="text-pink text-2xl"></AiFillCheckCircle>
                            <p>Measuring to ensure updates are a success</p>
                        </li>
                        <li className="flex md:items-center space-x-4 py-1">
                            <AiFillCheckCircle className="text-pink text-2xl"></AiFillCheckCircle>
                            <p>And much more!</p>
                        </li>
                    </ul>
                </div> 
                
                <Form></Form>
            </div>

            {/* Render the desktop image on the right*/}
            <div className="hidden md:block">
                <Image
                src={DesktopImage}
                className="max-h-fit cursor-default p-5 pl-0"
                alt="Desktop Image"
                />
            </div>
        </div>
        

    );
};

export default CardSingle;