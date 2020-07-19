import React from 'react';

import Aux from '../../hoc/Aux';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const layouts = props => (
  <Aux>
    <Header />
    <Main />
    <Footer />
  </Aux>
);

export default layouts;
