import React from 'react';

import classes from './HeaderBottom.module.scss';
import Button from '../../Button/Button';

const headerBottom = props => (
  <div className={classes.HeaderBottom}>
    <div className={classes.HeaderBottom__left}>
      <h1 className={classes.HeaderBottom__heading}>
        More than just shorter links
      </h1>

      <p className={classes.HeaderBottom__paragraph}>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>

      <Button name="Get Started" />
    </div>
    <div className={classes.HeaderBottom__right} />
  </div>
);

export default headerBottom;
