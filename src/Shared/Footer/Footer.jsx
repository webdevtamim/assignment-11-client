import React from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from 'react-icons/fa';
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {

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
            text: '16 East 34th Street, 15th Floor, New York, NY 10016',
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
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <h4 className="footer-title">Quick Links</h4>
                <ul>
                    {
                        quickLinks.map((quickLink, index) => (
                            <li key={index}>
                                <Link to={quickLink.link}>{quickLink.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h4 className="footer-title">Contac Info</h4>
                <ul>
                    {
                        contactsInfo.map((contactInfo, index) => (
                            <li key={index}>
                                {React.createElement(iconComponents[contactInfo.logo])}
                                <a href={contactInfo.link} target={contactInfo.target}>{contactInfo.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </footer>
    );
};

export default Footer;