import { Component } from "react";
import logo from '../../assets/images/logos.jpeg';


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