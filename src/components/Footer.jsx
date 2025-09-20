import React from 'react'
import email from "../assets/email.png"
import call from "../assets/call.png"
import location from "../assets/location.png"

const Footer = () => {
    return (
        <div>
            <div style={{backgroundColor: '#4f5f76'}} className="pt-6 px-4 md:px-20 lg:px-32 w-full overflow-hidden" id="Footer">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <p className="text-black mt-2">
                            Empowering communities through civic engagement. Report issues, track progress, and make your voice heard
                        </p>
                    </div>

                    <div className="w-full md:w-1/5 mb-4 md:mb-0">
                        <h3 className="text-white text-lg font-bold mb-4">Helpline</h3>
                        <ul className="flex flex-col text-black gap-2">
                            <li className="flex items-center gap-2">
                                <img src={email} alt="Email Logo" className="w-5 h-5" />
                                <a href="#" className="hover:text-white">
                                    Support@codeVision.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={call} alt="Call Logo" className="w-5 h-5" />
                                <a href="#" className="hover:text-white">
                                    +1 (555) 123-4567
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <img src={location} alt="Location Logo" className="w-5 h-5" />
                                <a href="#" className="hover:text-white">
                                    Raman Hostel, MMMUT
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 py-4 mt-10 text-center text-black">
                    Copyright 2025 © CodeVision. All Right Reserved.
                </div>
            </div>

        </div>
    )
}

export default Footer