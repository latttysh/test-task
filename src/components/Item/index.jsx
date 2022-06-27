import React from 'react';
import styles from './item.module.scss';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slice/ItemSlice';

function Item({ title, imgUrl, price, id }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <img src={imgUrl} alt="photo" />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>
        <div className={styles.price}>от {price} ₽</div>
        <button onClick={() => dispatch(addItem({ title, imgUrl, price, id }))}>Добавить</button>
      </div>
    </div>
  );
}

export default Item;
