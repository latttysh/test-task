import React from 'react';
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className="block">
        <div className={styles.logo}>Test task corp/</div>
        <div className={styles.sublogo}>Смотрим и думаем взять ли меня на работу</div>
      </div>
      <div className={styles.cart}>
        <div className={styles.price}>520 ₽</div>
        <div className={styles.count}>3 ШТ</div>
      </div>
    </div>
  );
}

export default Header;
