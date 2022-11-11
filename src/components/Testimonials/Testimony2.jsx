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
          “Your two developers assigned to us: A. and S. have been of tremendous help in the restoration of our customer’s trust in our bundles and other products and services.”
          </p>
          <p className="text">
            <strong style={{ color: "black" }}>Alfred Neequaye / </strong>
            Businessman
          </p>
        </div>
      </div>
    );
  }
}
export default Testimony;
