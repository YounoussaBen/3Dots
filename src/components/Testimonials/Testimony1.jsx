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
          "The level of sophistication of your solution, the short time within which it was developed and its impact on our bottom-line, is quite impressive"
          </p>
          <p className="text">
            <strong style={{ color: "black" }}>Asiedu Samuel / </strong>
            Businessman
          </p>
        </div>
      </div>
    );
  }
}
export default Testimony;
