import React from 'react';
import Header from '../Components/Header';
import { MdLocationOn } from '../Components';
import { Fade } from "react-awesome-reveal"

const Contact = () => {
    return (
        <>
            <Header name={"-Contact Us-"} />

            <section className='contact container'>
                <Fade direction='right'>
                    <article>
                        <h3><MdLocationOn style={{ color: "white" }} /> 14 Street, Krusevac, Serbia</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23222.075139260123!2d21.904188800000004!3d43.319296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1653159441324!5m2!1sen!2srs"  ></iframe>
                    </article>
                </Fade>

                <Fade direction='left'>
                    <article >
                        <hgroup>
                            <h4>Contact Us</h4>
                            <h2>Contact For Any Queris</h2>
                        </hgroup>
                        <form>
                            <input type="text" placeholder='Your Name' />
                            <input type="text" placeholder='Your Email' />
                            <input type="text" placeholder='Subject' />
                            <textarea name='Message' placeholder='Message'></textarea>
                            <input type="submit" value="Send Message" />
                        </form>
                    </article>
                </Fade>
            </section>
        </>
    );
}

export default Contact;