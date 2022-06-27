import React from 'react';
import styles from './header.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const items = useSelector((state) => state.items);
  const totalCount = items.cart.reduce((sum, item) => sum + item.price, 0);
  console.log(items.cart);

  return (
    <div className={styles.header}>
      <div className="block">
        <Link to={'/'}>
          <div className={styles.logo}>Test task corp/</div>
        </Link>
        <div className={styles.sublogo}>Смотрим и думаем взять ли меня на работу</div>
      </div>
      <Link to={'/cart'}>
        <div className={styles.cart}>
          <div className={styles.price}>{totalCount} ₽</div>
          <div className={styles.count}>{items.cart.length} ШТ</div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
