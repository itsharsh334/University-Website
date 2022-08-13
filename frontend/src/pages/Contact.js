import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as FaIcons from "react-icons/fa";
function Contact() {
  console.log("working");
  return (
    <div className="contact">
      <h1 style={{ fontSize: "5rem", color: "blue" }}>Contact</h1>
      <h1 className="contact-info" style={{ display: "block" }}>
        Harsh Priyadarshi
        <br></br>
        Phone: +91 9899145555
        <br></br>
      </h1>
      <br></br>
      {/* <FaIcons icon="fa-brands fa-facebook-f" />
        <FaIcons icon="fa-brands fa-github" /> */}
      <div className="icons-contact" style={{ display: "block" }}>
        <br></br>
        <FaIcons.FaGithubAlt />

        <FaIcons.FaFacebookF />

        <FaIcons.FaInstagram />
      </div>
    </div>
  );
}

export default Contact;
