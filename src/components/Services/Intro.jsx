import { Component } from "react";
import { GrTroubleshoot } from "react-icons/gr";
import {GrTechnology} from "react-icons/gr"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

class Intro extends Component {
  render() {
    return (
      <div className="services__intro">
        <div className="pos-rel">
          <div className="services__intro__image">
            <img
              src="https://andela.com/wp-content/uploads/2015/12/Tech-Talent-Born-in-Africa-Will-Play-a-Transformational-Role-in-IT.png"
              alt=""
            />
          </div>
          <Swiper
            className="services__intro__miniSlider"
            spaceBetween={30}
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="icon">
                <GrTechnology />
              </div>
              <p>DIGITAL TECHNOLOGY SOLUTIONS</p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon">
                <GrTroubleshoot />
              </div>
              <p>END TO END IoT SOLUTIONS</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="services__intro__text">
            <h1>We are the solutions for IT problems</h1>
            <p className="text">
            Our team of engineers and IT consultants are certified in all major technologies and can guide you with all your technology decisions and IT consulting projects. Our consulting services can provide you a more dependable strategy that is built for the future of your company
            </p>
            <button className="btn btn-primary">More About</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
