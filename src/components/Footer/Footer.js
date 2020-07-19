import React from 'react';

import classes from './Footer.module.scss';
import Container from '../../hoc/Container';
import Logo from '../../img/logoWhite.svg';
import Icons from '../../img/icons.svg';

const lists = [
  {
    title: 'Features',
    list: ['Link Shortening', 'Branded Links', 'Analytics']
  },
  {
    title: 'Resources',
    list: ['Blog', 'Developers', 'Support']
  },
  {
    title: 'Company',
    list: ['About', 'Our Team', 'Careers', 'Contact']
  }
];

const icon = [
  'icon-facebook2',
  'icon-twitter',
  'icon-pinterest',
  'icon-instagram'
];

const footer = props => (
  <footer className={classes.Footer}>
    <Container>
      <div className={classes.Footer__box}>
        <img src={Logo} alt="logo white" />
        <div className={classes.Footer__right}>
          {lists.map((cur, i) => (
            <div className={classes.Footer__boxes} key={i}>
              <h3 className={classes.Footer__heading}>{cur.title}</h3>
              <ul className={classes.Footer__list}>
                {cur.list.map((cur, i) => (
                  <li className={classes.Footer__items} key={i}>
                    {cur}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={classes.Footer__icon}>
            {icon.map((cur, i) => (
              <svg key={i} className={classes.Footer__iconSub}>
                <use xlinkHref={`${Icons}#${cur}`}></use>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </Container>

    <div className={classes.attribution}>
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noopener noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>{' '}
      . Coded by <a href="pherwerz.github.io">Adebayo Fawaz</a>.
    </div>
  </footer>
);

export default footer;
