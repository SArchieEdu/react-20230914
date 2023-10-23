import { useState } from "react";
import { Button } from "../Button/component";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Codec } from "../Codec/component";
import { selectHeadphoneById } from "../../redux/entities/headphone/selectors";
import { selectProductAmountById } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart";
import { testThunk } from "../../redux/ui/cart/thunk/test-thunk";
import { useGetHeadphonesQuery } from "../../redux/services/api";
import { Reviews } from "../Reviews/component";

export const Product = ({ product }) => {
  // const product = useGetHeadphonesQuery(null, {
  //   selectFromResult: (result) =>
  //     result?.data.find(({ id }) => id === productId),
  // });
  const amount = useSelector((state) =>
    selectProductAmountById(state, product.id)
  );
  const dispatch = useDispatch();

  if (!product) {
    return null;
  }

  const { name, codecs } = product;

  return (
    <div className={styles.root}>
      <div className={styles.product}>
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
            onClick={() => dispatch(cartActions.decrement(product.id))}
            disabled={amount === 0}
            className={styles.action}
          />
          {amount}
          <Button
            title="+"
            onClick={() => dispatch(cartActions.increment(product.id))}
            disabled={amount === 5}
          />
        </div>
      </div>
      <Reviews productId={product.id} />
    </div>
  );
};
