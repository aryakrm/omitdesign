import React from "react";
import "./Contact.scss";
import { HiOutlineMail } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="Contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="contact">
        <div className="contactImages">
          <img src="/assets/contactImages/contact1.jpg" alt="img" />
          <img src="/assets/contactImages/contact2.jpg" alt="img" />
          <img src="/assets/contactImages/contact3.jpg" alt="img" />
          <img src="/assets/contactImages/contact4.jpg" alt="img" />
          <img src="/assets/contactImages/contact5.jpg" alt="img" />
          <img src="/assets/contactImages/contact6.jpg" alt="img" />
          <img src="/assets/contactImages/contact7.jpg" alt="img" />
        </div>
        <h2>Omit Design</h2>
        <h6>
          {" "}
          <HiOutlineMail /> info@omitdesign.com
        </h6>
        <h6>
          {" "}
          <BsPhone /> +90 538 517 78 66
        </h6>
        <a href="https://www.instagram.com/omitdesign/" target={"_blank"}>
          <BsInstagram style={{ marginRight: "1rem" }} />
          OmitDesign
        </a>
      </div>
      <div className="address">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110680.7982803634!2d28.68861396299452!3d40.41385233020113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d338aeb9987f3d%3A0xc08101af1fd8796!2sMira%20Ofis%20Beytepe!5e0!3m2!1sen!2str!4v1677227026419!5m2!1sen!2str"
          title="OmitDesign"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </div>
      <div className="subscribe"></div>
    </motion.div>
  );
}

export default Contact;
