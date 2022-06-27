import React from 'react';
import styles from './header.module.scss';
import { useSelector } from 'react-redux';

function Header() {
  const items = useSelector((state) => state.items);
  const totalCount = items.cart.reduce((sum, item) => sum + item.price, 0);
  console.log(items.cart);

  return (
    <div className={styles.header}>
      <div className="block">
        <div className={styles.logo}>Test task corp/</div>
        <div className={styles.sublogo}>Смотрим и думаем взять ли меня на работу</div>
      </div>
      <div className={styles.cart}>
        <div className={styles.price}>{totalCount} ₽</div>
        <div className={styles.count}>{items.cart.length} ШТ</div>
      </div>
    </div>
  );
}

export default Header;
