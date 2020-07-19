import React, { Component } from 'react';

import classes from './Result.module.scss';
import Button from '../../../Button/Button';

class Result extends Component {
  render() {
    let links = '';

    if (this.props.datas) {
      links = this.props.datas.map((cur, i) => (
        <div className={classes.Result__res} key={i}>
          <div className={classes.Result__item}>
            <p>{cur.url}</p>

            <div className={classes.Result__right}>
              <p>{cur.link}</p>

              <Button name="copy" clicked={() => {}} />
            </div>
          </div>
        </div>
      ));
    }

    return <section className={classes.Result}>{links}</section>;
  }
}

export default Result;
