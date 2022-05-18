import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FaShoppingBasket, FaEnvelope, FaLinkedinIn, CgFacebook, RiInstagramLine, BsTwitter, BsYoutube, BsTelephoneFill, FaTruck, CgMenu } from "./index";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
    const [myStyle, setMyStyle] = useState("flex");

    const handleDropDown = () => {
        if (myStyle === "flex") {
            setMyStyle("none");
        } else {
            setMyStyle("flex");
        }
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                setMyStyle("flex");
            }
        })
    }, [])

    return (
        <nav>
            <div className='upper'>
                <div className='container'>
                    <article>< BsTelephoneFill /> <span>+012 345 6789</span> <span className='crta'>|</span> <FaEnvelope /><span>mail@info.com</span></article>
                    <article><i><CgFacebook /></i><i><BsTwitter /></i><i><FaLinkedinIn /></i><i><RiInstagramLine /></i><i><BsYoutube /></i></article>
                </div>
            </div>

            <div className='navbar container'  >
                <h2><FaTruck /> Faster</h2>
                <i className='dropDown' onClick={() => handleDropDown()} ><CgMenu /></i>
                <Fade duration={700} direction="down">
                    <ul className='list' style={{ display: `${myStyle}` }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/price">Price</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li ><i className='basket'><FaShoppingBasket /></i></li>
                    </ul>
                </Fade>
            </div>
        </nav >);

}

export default Navbar;