import React from 'react';
import { FaChevronRight, MdLocationOn, BsTelephoneFill, FaEnvelope, BsTwitter, CgFacebook, FaLinkedinIn, RiInstagramLine } from "./index";

const Footer = () => {
    return (
        <footer>
            <div className='container row'>
                <article>
                    <h3>Get in Touch</h3>
                    <p><MdLocationOn /> 123 Street, Krusevac, Serbia</p>
                    <p><BsTelephoneFill /> +012 345 67890</p>
                    <p><FaEnvelope />mail@info.com</p>
                    <span><i><BsTwitter /></i><i><CgFacebook /></i><i><FaLinkedinIn /></i><i><RiInstagramLine /></i></span>
                </article>
                <article>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><FaChevronRight /> Home</li>
                        <li><FaChevronRight /> About Us</li>
                        <li><FaChevronRight /> Our Services</li>
                        <li><FaChevronRight /> Pricing Plan</li>
                        <li><FaChevronRight /> Contact Us</li>
                    </ul>
                </article>
                <article>
                    <h3>Newsletter</h3>
                    <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                    <form>
                        <input type="text" placeholder="Your Email Address" required />
                        <input type="submit" value="Sign Up" />
                    </form>
                </article>
            </div>
            <hr />
            <div className='container'>
                <p>&copy; All Rights Reserved.Designed by Marija</p>
            </div>
        </footer >
    );
}

export default Footer;