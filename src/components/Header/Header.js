import React from 'react';

import Container from '../../hoc/Container';
import classes from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderBottom from './HeaderBottom/HeaderBottom';

const header = props => (
  <header className={classes.Header}>
    <Container>
      <HeaderNav />
      <HeaderBottom />
    </Container>
  </header>
);

export default header;
