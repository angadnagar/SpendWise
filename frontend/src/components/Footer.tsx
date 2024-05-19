import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

 
 export const Footer=()=>{
   
    return (
        <div className="bg-gray-800"> 
        <div className="flex justify-between items-center text-white pt-4">
            
            <div className="flex text-white gap-8 ml-12">
                <div className="flex flex-col p-6 gap-2">
                <Link to="/" className="underline hover:no-underline">SpendWise Premium</Link>
                <Link to="/" className="underline hover:no-underline">SpendWise Silver</Link>
                <Link to="/" className="underline hover:no-underline">SpendWise Gold</Link>
                <Link to="/" className="underline hover:no-underline">Community</Link>
                <Link to="/" className="underline hover:no-underline">Security</Link>
                </div>
                <div className="flex flex-col p-6 gap-2">
                <Link to="https://shorturl.at/nxAX2" className="underline hover:no-underline">Facebook</Link>
                <Link to="https://shorturl.at/aIKM2" className="underline hover:no-underline">Instagram</Link>
                <Link to="/" className="underline hover:no-underline">Blog</Link>
                <Link to="/" className="underline hover:no-underline">Contact Us</Link>
                <Link to="/" className="underline hover:no-underline">Terms of use</Link>
            </div>

            </div>

            <div className="lg:ml-auto flex items-center space-x-8 mr-32">
                
                <span className="text-gray-200">Social Links:</span>
                <Link to="https://shorturl.at/nxAX2"><FaFacebook size={30} /></Link>
                <Link to="https://shorturl.at/aIKM2"><FaInstagram size={30} /></Link>
                <Link to="https://shorturl.at/rwCRW"><FaLinkedin size={30} /></Link>
            </div>
            </div>
                <div className="flex justify-center p-4 text-gray-400">Copyright 2024 SpendWise | All Rights Reserved | SpendWise is made with 🩶 by Angad Nagar.</div>
                </div>
    )
 }