import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section className="min-h-[400px] p-[64px]">
      <h2>Contact</h2>
      <div className="max-w-[1200px] flex flex-wrap items-center gap-10 mx-auto bg-orange-100/30 rounded-xl shadow ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5187140832218!2d73.76181697514494!3d18.595724666874307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b918980d8af3%3A0x9a3bec4e8734aef6!2sProfessional%20and%20Qualified%20Electricals!5e0!3m2!1sen!2sin!4v1724668462781!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex flex-col text-gray-600 text-l font-bold gap-6  p-5">
          <a href="tel:+918010096692">
            <FontAwesomeIcon icon={faPhone} />
            &nbsp;+91 80100 96692
          </a>
          <a href="mailto:pshivcharan@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;pshivcharan@gmail.com
          </a>
          <a href="https://maps.app.goo.gl/XBizidhU4AfDLwSx9" target="_blank">
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;Wakad, Pune , Maharashtra
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
