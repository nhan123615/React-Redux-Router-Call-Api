import React, { Component } from "react";
import { Link, Route } from "react-router-dom";


const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Product Management',
    to: '/product-list',
    exact: false
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? 'active' : ''
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        )
      }}
    />
  );
}

class Menu extends Component {
  render() {
    return (

      <div className="navbar navbar-default">
        <a className="navbar-brand" href="#/">CALL API</a>
        <ul className="nav navbar-nav">
          {this.showMenus(menus)}
        </ul>
      </div>


    );
  }

  showMenus = menus => {
    var rs = null;
    if (menus.length > 0) {
      rs = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        )
      })
    }
    return rs;
  }

}

export default Menu;
