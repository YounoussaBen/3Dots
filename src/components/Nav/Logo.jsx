import { Component } from "react";
import "./style.css"
import logo from '../../assets/images/logo.jpeg';


class Logo extends Component {
    state = {  } 
    render() { 
        return (
            <div className="logo">
                <img src={logo} alt="LOGO" />
            </div>
        );
    }
}
 
export default Logo;