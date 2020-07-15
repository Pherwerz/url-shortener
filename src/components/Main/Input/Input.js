import React from 'react';

import classes from './Input.module.scss';
import Button from '../../Button/Button';

const input = props => (
  <section className={classes.Input}>
    <form className={classes.Input__form}>
      <input
        type="text"
        placeholder="Shorten a link here..."
        className={classes.Input__text}
        required
      />

      <Button name="Shorten It!" />
    </form>
  </section>
);

export default input;
