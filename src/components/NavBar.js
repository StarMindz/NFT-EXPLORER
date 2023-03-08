/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import style from './NavBar.module.css';
import companiesLogo from '../images/logo.png';

const NavBar = () => {
  const [state, setState] = useState({ toggle: true });

  const pullMenu = () => {
    setState((state) => ({ toggle: !state.toggle }));
  };

  const nav = (
    <div className={style.nav_bar}>
      <div className={style.nav_bar_head}>
        <img className={style.company_name} src={companiesLogo} alt="Companies Logo" />
      </div>
      <div className={`${style.nav_bar_menu} ${state.toggle ? '' : style.active}`}>
        <NavLink onClick={pullMenu} exact activeClassName={style.active} className={style.home} to="/">HOME</NavLink>
        <NavLink onClick={pullMenu} activeClassName={style.active} className={style.search} to="/search">NFT</NavLink>
      </div>
      <div className={`${style.hamburger} ${state.toggle ? '' : style.active}`} onClick={pullMenu}>
        <span className={style.horizontal} />
        <span className={style.horizontal} />
        <span className={style.horizontal} />
      </div>
    </div>
  );
  return nav;
};

export default NavBar;
