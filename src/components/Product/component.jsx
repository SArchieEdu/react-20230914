import { useState } from "react";
import { Button } from "../Button/component";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Codec } from "../Codec/component";
import { selectHeadphoneById } from "../../redux/entities/headphone/selectors";
import { selectProductAmountById } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart";
import { testThunk } from "../../redux/ui/cart/thunk/test-thunk";

export const Product = ({ productId }) => {
  const product = useSelector((state) => selectHeadphoneById(state, productId));
  const amount = useSelector((state) =>
    selectProductAmountById(state, productId)
  );
  const dispatch = useDispatch();

  if (!product) {
    return null;
  }

  const { name, codecs } = product;

  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <span>{name}</span>
        <div className={styles.codecs}>
          {codecs.map((id) => (
            <Codec key={id} codecId={id} className={styles.codec} />
          ))}
        </div>
      </div>
      <div>
        <Button
          title="-"
          onClick={() => dispatch(cartActions.decrement(productId))}
          disabled={amount === 0}
          className={styles.action}
        />
        {amount}
        <Button
          title="+"
          onClick={() => dispatch(cartActions.increment(productId))}
          disabled={amount === 5}
        />
      </div>
    </div>
  );
};
