import React from 'react';

import classes from './Main.module.scss';
import Container from '../../hoc/Container';
import Input from './Input/Input';
import Stat from './Stat/Stat';
import Started from './Started/Started';

const main = props => (
  <main className={classes.Main}>
    <Container>
      <Input />
      <Stat />
    </Container>
    <Started />
  </main>
);

export default main;
