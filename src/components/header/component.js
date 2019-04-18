import React, { Component } from 'react';
import './style.css'
import MenuIcon from '../ui/icons/menu';

class AppHeader extends Component {
  render(){
    const MobileMenu = () => {
      return (
        <div className="mobile-menu">
          <MenuIcon/>
        </div>
      )
    }
    const Logotype = () => {
      return (
        <h1 className="logotype">TRA robotics</h1>
      )
    }
    return(
      <header className="page-header">
        <Logotype/>
        <MobileMenu/>
      </header>
    )
  }
}
export default AppHeader;