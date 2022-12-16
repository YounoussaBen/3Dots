import { Component } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:lormail@gmail.com">
          <AiFillMail />
          <span>info@pkj.com</span>
        </a>

        <a href="tel:+233593104435">
          <AiFillPhone />
          <span>+233593104435</span>
        </a>
      </div>
    );
  }
}

export default Contact;
