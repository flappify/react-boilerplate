import React from 'react';
import {connect} from 'react-redux';
import logo from '../../../assets/logo.png';
import SignOut from './signOut';

import "./navbar.styles.css";

class NavBar extends React.Component{
  handleToggle=()=>{
    document.getElementsByTagName("BODY")[0].classList.toggle("themetoggle");
    var x=document.querySelectorAll(".togglecolortext");
    for (var i = 0; i < x.length; i++) {
        x[i].classList.toggle("toggle-white");
    }
    document.querySelector(".theme-toggler").classList.toggle("fa-sun");
  }
  render(){
    const {auth}=this.props;
    return(
      <nav>
        <div className="navbar">
              <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="og">
                  <div className="og-logo">
                    <img src={logo} alt="brand-logo"/>
                  </div>
                  <div className="og-name">
                    <h1 className="togglecolortext">FLAPPIFY BOILERPLATE</h1>
                  </div>
              </div>
              <div className="menu">
                  <div className="menu-list">
                    <ul>
                      <li className="primary-menu"><a href="/" className="togglecolortext">Home</a></li>
                      <li className="primary-menu drop-menu">
                        <div className="togglecolortext drop-button">Services<i className="fas fa-angle-down"></i></div>
                        <div className="drop-down-box">
                          <ul className="sub-menu-list">
                            <li className="sub-menu"><a href="/services/web-development">Web Development</a></li>
                            <li className="sub-menu"><a href="/services/app-development">App Development</a></li>
                            <li className="sub-menu"><a href="/services/digital-marketing">Digital Marketing</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="primary-menu"><a href="/contact" className="create">Get a Quote</a></li>
                    </ul>
                    <div className="toggle" onClick={this.handleToggle}>
                      <i className="fas fa-moon theme-toggler togglecolortext"></i>
                    </div>
                    {(!auth.uid)? null:<SignOut/> }
                  </div>
              </div>
            </div>
      </nav>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    auth:state.firebase.auth
  }
}
export default connect(mapStateToProps)(NavBar);