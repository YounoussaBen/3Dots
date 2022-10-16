import { Component } from "react";
import logo from '../../assets/images/logo.png';


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