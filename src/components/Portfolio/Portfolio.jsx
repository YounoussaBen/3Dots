import { Component } from "react";
import Work from "./work_box";
import "./style.css";
class Portfolio extends Component {
  constructor() {
    super();
    this.works = [
      {
        img: "https://codewebltd.com/wp-content/uploads/2021/05/ck-website-cover-min-1024x602.png",
        title: "Central kitchens ",
        text:
          "Central kitchens was established purely to provide kitchen lovers with extraordinary kitchen concepts that is not only contemporary in its looks but also affordable for every home"
      },
      {
        img:
          "https://codewebltd.com/wp-content/uploads/2019/11/efghana-website-cover-min-1024x602.png",
        title: "Entrepreneurs Foundation of Ghana",
        text:
          "Entrepreneurs Foundation of Ghana, organizers of Ghana Entrepreneurs Awards. Dissatisfied with its current website, she turned to Online looking for a good software and website design company in Ghana to revamp her website."
      },
      {
        img:
          "https://codewebltd.com/wp-content/uploads/2021/05/bluproperties-website-cover-min1-1024x602.png",
        title: "Blu Properties Company Limited",
        text:
          "Blu Properties Company Limited is a real estate company based in Accra, Ghana that specialize in providing home space and office spaces to individuals and organizations."
      }
    ];
  }
  render() {
    return (
      <section className="container container__portfolio" id="portfolio">
        {/* <div className="portfolio__header">
          <h1>See Our Works Or Portfolio</h1>
          <button className="btn btn-primary">More About</button>
        </div> */}
        {this.works.map((work, index) => {
          if (index === 1) {
            return (
              <>
                <div className="portfolio__header">
                  <h1>See Our Works Or Portfolio</h1>
                  <button className="btn btn-primary">More About</button>
                </div>
                <Work img={work.img} title={work.title} text={work.text} />
              </>
            );
          }
          return <Work img={work.img} title={work.title} text={work.text} />;
        })}
      </section>
    );
  }
}
export default Portfolio;
