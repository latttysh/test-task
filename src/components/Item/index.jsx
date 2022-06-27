import React from 'react';
import styles from './item.module.scss';

function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <img src="./img/2.png" alt="" />
      </div>
      <div className={styles.title}>Я весёлый</div>
      <div className={styles.info}>
        <div className={styles.price}>от 395 ₽</div>
        <button>
          Добавить <div className={styles.counter}>5</div>
        </button>
      </div>
    </div>
  );
}

export default Item;
