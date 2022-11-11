import { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import Logo from "./Logo";
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <footer id="contact" className="container footer__container">
        <div className="about">
        <Logo />
          <p className="text">
          We will suppert you in a every way to make your businees successful. Do not hesitate to reach out to us. Customer satisfaction is our priority
          </p>
          <ul className="footer__socials">
            <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" >
          <AiFillFacebook />
          </a>
            </li>
            <li>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" >
          <CgInstagram />
          </a>
            </li>
            <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
          <AiFillTwitterSquare />
          </a>
            </li>
          </ul>
        </div>
        <div className="services">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#services" className="text">
                Software Development
              </a>
            </li>
            <li>
              <a href="#services" className="text">
                IT Consultant
              </a>
            </li>
            <li>
              <a href="#services" className="text">
                API integration
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <address className="text">
                  Office: 233 Accra West Hills Mall
              </address>
            </li>
            <li>
              <a href="tel:+233593104435" className="text">
                Tel : +233593104435
              </a>
            </li>
            <li>
              <a href="mailto:lormail@gmail.com" className="text">
                Email: 3dots@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
