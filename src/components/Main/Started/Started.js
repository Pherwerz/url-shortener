import React from 'react';

import classes from './Started.module.scss';
import Container from '../../../hoc/Container';
import Button from '../../Button/Button';

const started = props => (
  <section className={classes.Started}>
    <Container>
      <div className={classes.Started__box}>
        <h2 className={classes.Started__heading}>Boost your links today</h2>
        <Button name="Get Started" />
      </div>
    </Container>
  </section>
);

export default started;
