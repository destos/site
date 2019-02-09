import React from 'react';
import styles from './Copyright.module.scss';

// TODO: bring in font-awesome fonts

const Copyright = ({ copyright }) => (
  <div className={styles['copyright']}>
    <a
      href={copyright.link}
      rel="noopener noreferrer"
      target="_blank">
        {copyright.text}
    </a>
    {copyright.svgs.map((cc_icon, i) => (
        <img src={cc_icon} key={i}/>
    ))}
  </div>
);

export default Copyright;
