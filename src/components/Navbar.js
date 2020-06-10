import React, { Component } from 'react';
import logo from '../logox.png';


class Navbar extends Component {

  render() {
    
    return (
      <nav className="navbar navbar-yellow fixed-top bg-yellow flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.uits.edu.bd"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src={logo} alt="Logo" width="50px" /> [1 Eth = 17,183.32 tk]
        </a>
       
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-black"><span id="account"><b>My account :</b> <i>{this.props.account}</i></span></small>
            
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;