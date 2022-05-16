import React from 'react';
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedinIn, CgFacebook, RiInstagramLine, BsTwitter, BsYoutube, BsTelephoneFill, FaTruck, CgMenu } from "./index";

const Navbar = () => {
    return (
        <nav>
            <div className='upper'>
                <div className='container'>
                    <article>< BsTelephoneFill /> <span>+012 345 6789</span> <span className='crta'>|</span> <FaEnvelope /><span>mail@info.com</span></article>
                    <article><i><CgFacebook /></i><i><BsTwitter /></i><i><FaLinkedinIn /></i><i><RiInstagramLine /></i><i><BsYoutube /></i></article>
                </div>
            </div>

            <div className='container'>
                <h2><FaTruck /> Faster</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/price">Price</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav >);

}

export default Navbar;