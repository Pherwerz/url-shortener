import React from 'react';

import Container from '../../hoc/Container';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderBottom from './HeaderBottom/HeaderBottom';

const header = props => (
  <header>
    <Container>
      <HeaderNav />
      <HeaderBottom />
    </Container>
  </header>
);

export default header;
