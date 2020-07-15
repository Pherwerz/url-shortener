import React from 'react';

import classes from './Stat.module.scss';
import icon1 from '../../../img/icon-brand-recognition.svg';
import icon2 from '../../../img/icon-detailed-records.svg';
import icon3 from '../../../img/icon-fully-customizable.svg';

const boxItems = [
  {
    img: icon1,
    header: 'Brand Recognition',
    text:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
  },
  {
    img: icon2,
    header: 'Detailed Records',
    text:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
  },
  {
    img: icon3,
    header: 'Fully Customizable',
    text:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
  }
];

const stat = props => (
  <section className={classes.Stat}>
    <h2 className={classes.Stat__heading}>Advanced Statistics</h2>

    <p className={classes.Stat__paragraph}>
      Track how your links are performing across the web with our advanced
      statistics dashboard.
    </p>

    <div className={classes.Stat__box}>
      {boxItems.map((cur, i) => (
        <div className={classes.Stat__item} key={i}>
          <div className={classes.Stat__boxImage}>
            <img src={cur.img} alt={cur.header} className={classes.Stat__img} />
          </div>
          <h3 className={classes.Stat__boxHeader}>{cur.header}</h3>
          <p className={classes.Stat__boxParagraph}>{cur.text}</p>
        </div>
      ))}
      <div className={classes.Stat__float} />
    </div>
  </section>
);

export default stat;
