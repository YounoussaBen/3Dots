import { Component } from "react";

class Testimony extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="testimony">
        <div className="testimony__avatar">
          <img src={this.props.img} alt=""/>
        </div>
        <div className="testimony__comment">
          <p className="text">
          “The work output of your engineer E.O must be commended for its timeliness and quality”
          </p>
          <p className="text">
            <strong style={{ color: "black" }}>Floxy Korkor Nartey / </strong>
            Businesswoman
          </p>
        </div>
      </div>
    );
  }
}
export default Testimony;
