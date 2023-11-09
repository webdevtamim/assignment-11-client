import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaRegEnvelope } from 'react-icons/fa';
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {

    const handleSubscribe = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        console.log(email);
        e.currentTarget.reset();
    }

    const quickLinks = [
        {
            text: 'All jobs',
            link: '/alljobs'
        },
        {
            text: 'Applied jobs',
            link: '/appliedjobs'
        },
        {
            text: 'My jobs',
            link: '/myjobs'
        },
        {
            text: 'Blogs',
            link: '/blogs'
        },
    ];

    const contactsInfo = [
        {
            text: '+1-646-956-2012',
            link: 'tel:+1-646-956-2012',
            logo: 'LuPhoneCall',
            target: '_self'
        },
        {
            text: 'info@myjobgator.com',
            link: 'mailto:info@myjobgator.com',
            logo: 'FaRegEnvelope',
            target: '_self'
        },
        {
            text: '34th Street, 15th Floor, New York',
            link: 'https://www.google.com/maps/place/16+E+34th+St+15th+Floor,+New+York,+NY+10016,+USA/@40.7477695,-73.9859719,17z/data=!4m6!3m5!1s0x89c259a832afd85b:0xcc514a968cca1701!8m2!3d40.747766!4d-73.983783!16s%2Fg%2F11khjvvtkw?entry=ttu',
            logo: 'IoLocationOutline',
            target: '_blank'
        },
    ];
    const iconComponents = {
        FaRegEnvelope: FaRegEnvelope,
        LuPhoneCall: LuPhoneCall,
        IoLocationOutline: IoLocationOutline,
    };

    return (
        <footer className="bg-[#212529] px-5">
            <div className="footer max-w-[1400px] mx-auto pt-20 pb-12 lg:justify-between justify-items-center">
                <div>
                    <Link to={'/'} className="flex items-center space-x-2 pt-2 lg:pt-0">
                        <img className="w-1/6" src="icon.png" alt="" />
                        <span className="lg:text-3xl md:text-2xl text-3xl font-extrabold text-white">My Job Gator</span>
                    </Link>
                    <p className="text-white pt-5 pb-2 text-center md:text-left mx-auto md:mx-0">ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                    <div className="text-white text-xl flex gap-3 mx-auto md:mx-0">
                        <a className="hover:text-[#F03737] hover:scale-75 duration-300" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF></FaFacebookF></a>
                        <a className="hover:text-[#F03737] hover:scale-75 duration-300" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter></FaTwitter></a>
                        <a className="hover:text-[#F03737] hover:scale-75 duration-300" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube></FaYoutube></a>
                    </div>
                </div>
                <div className="pt-3">
                    <h4 className="text-xl font-bold text-white">QUICK LINKS</h4>
                    <ul className="border-t border-[#4e5e6a] pt-8 w-full text-white space-y-2 text-center md:text-left">
                        {
                            quickLinks.map((quickLink, index) => (
                                <li key={index} className="hover:text-[#F03737] duration-300">
                                    <Link to={quickLink.link}>{quickLink.text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="pt-3 justify-items-center md:justify-items-start">
                    <h4 className="text-xl font-bold text-white text-center">CONTACT INFO</h4>
                    <ul className="border-t border-[#4e5e6a] pt-8 space-y-3 text-white lg:w-full w-44">
                        {
                            contactsInfo.map((contactInfo, index) => (
                                <li key={index} className="flex gap-2 items-center text-[#F03737] justify-center md:justify-start">
                                    {React.createElement(iconComponents[contactInfo.logo])}
                                    <a className="text-white hover:text-[#F03737] duration-300" href={contactInfo.link} target={contactInfo.target}>{contactInfo.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="pt-3 justify-items-center md:justify-items-start">
                    <h2 className="text-xl font-bold text-white">SUBSCRIBE</h2>
                    <form onSubmit={handleSubscribe} className="form-control border-t border-[#4e5e6a] pt-8">
                        <label className="input-group">
                            <span className="bg-[#F03737] text-white">Email</span>
                            <input type="email" name="email" placeholder="info@site.com" className="input input-bordered bg-white w-28 lg:w-full" />
                        </label>
                    </form>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto border-t border-[#4e5e6a] pb-5 pt-7">
                <p className="text-center text-white">© Copyright Web Dev Tamim. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;