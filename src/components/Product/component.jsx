import { Button } from "../Button/component";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Codec } from "../Codec/component";
import { selectProductAmountById } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart";
import { Reviews } from "../Reviews/component";
import { useParams } from "react-router-dom";
import { useGetHeadphonesQuery } from "../../redux/services/api";

export const Product = () => {
  const { productId } = useParams();

  const { data: product } = useGetHeadphonesQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result?.data?.find(({ id }) => id === productId),
      };
    },
  });

  const amount = useSelector((state) =>
    selectProductAmountById(state, product?.id)
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
