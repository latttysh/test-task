import React from 'react';
import styles from './main.module.scss';
import Item from '../../components/Item';

function Main() {
  return (
    <div className={styles.main}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default Main;
