import Image from 'next/image';
import DesktopImage from "../public/images/illustration-sign-up-desktop.svg"
import MobileImage from "../public/images/illustration-sign-up-mobile.svg"
import Form from "./Form"

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
                    <h1 className='font-bold text-5xl text-[#242742]'>Stay updated!</h1>
                    <p className='py-4 text-sm'>Join 60,000+ product managers receiving monthly updates on:</p>


                    <ul className="list-none pb-6 font-regular">
                        <li className="flex md:items-center space-x-4 py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                            <p>Product discovery and building what matters</p>
                        </li>
                        <li className="flex md:items-center space-x-4 py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                            <p>Measuring to ensure updates are a success</p>
                        </li>
                        <li className="flex md:items-center space-x-4 py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
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