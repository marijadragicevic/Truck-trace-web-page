import React from 'react';
import { FaRegEnvelope, FaLinkedinIn, CgFacebook, RiInstagramLine, BsTwitter, BsYoutube, BsTelephoneFill } from "./index";

const Navbar = () => {
    return (
        <nav>
            <div className='upper'>
                <article>< BsTelephoneFill /> <span>+012 345 6789</span> <span className='crta'>|</span> <FaRegEnvelope /><span>mail@ifo.com</span></article>
                <article><CgFacebook /><BsTwitter /><FaLinkedinIn /><RiInstagramLine /><BsYoutube /></article>
            </div>
        </nav >);

}

export default Navbar;