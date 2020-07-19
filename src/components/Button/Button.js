import React from 'react';
import classes from './Button.module.scss';

const button = props => (
  <button className={classes.Btn} onClick={props.clicked}>
    {props.name}
  </button>
);

export default button;
