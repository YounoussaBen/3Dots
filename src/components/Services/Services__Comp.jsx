import { Component } from "react";
import { DiDigitalOcean} from "react-icons/di";
import { MdOutlineDeveloperMode} from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import {AiOutlineApi} from "react-icons/ai"

class ServicesComp extends Component {
  render() {
    return (
      <div className="services__servicesComp">
        <div>
          <h1>Our Servcices For Technology You Need</h1>
          <button className="btn btn-primary">Load More</button>
        </div>
        <div>
          <div>
            <div className="icon">
              <MdOutlineDeveloperMode />
            </div>
            <h4>Software Development</h4>
            <p>We closely partner with customer teams to enable the effective delivery of their strategic initiatives that depend on technology to be successful</p>
          </div>
          <div>
            <div className="icon">
              <BsLaptop />
            </div>
            <h4>IT Consulting Services</h4>
            <p>We jointly work with you to learn your IT environment and business goals to develop a blueprint and execute strategies.  </p>
          </div>
          <div>
            <div className="icon">
              <DiDigitalOcean />
            </div>
            <h4>Digital Transformation</h4>
            <p>Digital is the new-age currency. With widespread adoption of the digital technology, businesses are imbibing digital business strategies. </p>
          </div>
          <div>
            <div className="icon">
              <AiOutlineApi />
            </div>
            <h4>API Integration</h4>
            <p>We offer custom API development and testing services to meet a wide range of business requirements and security protocols..</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesComp;
