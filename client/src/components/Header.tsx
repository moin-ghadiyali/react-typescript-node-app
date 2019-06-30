import React from 'react';
import '../styles/Header.css'

export default class Header extends React.Component<any, any> {    
      render() {
        return (
          <div className="header">
            <a href="">Moin</a>
            <a className="login-signup-btn">Login</a>
          </div>
        );
      }
}