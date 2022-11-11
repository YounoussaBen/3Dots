import { Component } from "react";
import Testimony1 from "./Testimony1";
import Testimony2 from "./Testimony2";
import Testimony3 from "./Testimony1";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
class Testimonials extends Component {
  constructor() {
    super();
    this.state = {
      slidesPerView: 2.5
    };
    this.fitSlidesPerView = this.fitSlidesPerView.bind(this);
  }
  fitSlidesPerView() {
    if (window.innerWidth <= 1024 && !(window.innerWidth <= 600)) {
      this.setState({ slidesPerView: 1.3 });
    } else if (window.innerWidth <= 600) {
      this.setState({ slidesPerView: 1 });
    } else {
      this.setState({ slidesPerView: 2.5 });
    }
  }
  componentDidMount() {
    this.fitSlidesPerView();
  }

  render() {
    window.addEventListener("resize", this.fitSlidesPerView);

    return (
      <section id="testimony" className="container container__testimonials">
        <h1 className="container">What People Say About Us</h1>
        <Swiper
          className="testimonials__slide container"
          slidesPerView={this.state.slidesPerView}
          spaceBetween={20}
        >
          <SwiperSlide>
            <Testimony1 img="https://www.acsint.io/images/user1.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <Testimony2 img="https://www.acsint.io/images/user4.png"/>  </SwiperSlide>
          <SwiperSlide>
            <Testimony3 img="https://www.acsint.io/images/user2.png"/>  </SwiperSlide>
        </Swiper>
      </section>
    );
  }
}
export default Testimonials;
