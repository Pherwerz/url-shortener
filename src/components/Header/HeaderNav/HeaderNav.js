import React from 'react';

import Logo from '../../../img/logo.svg';
import classes from './HeaderNav.module.scss';
import Button from '../../Button/Button';

const list = ['Features', 'Pricing', 'Resources'];

const headerNav = props => (
  <div className={classes.HeaderNav}>
    <img src={Logo} alt="logo" className={classes.HeaderNav__logo} />

    <ul className={classes.HeaderNav__list}>
      {list.map((cur, i) => (
        <li className={classes.HeaderNav__item} key={i}>
          <a href="home" className={classes.HeaderNav__link}>
            {cur}
          </a>
        </li>
      ))}
    </ul>

    <a href="home" className={classes.HeaderNav__link}>
      Login
    </a>

    <Button name="Sign Up" />
  </div>
);

export default headerNav;
