import React from 'react';
import classes from './Button.module.scss';

const button = props => <button className={classes.Btn}>{props.name}</button>;

export default button;
