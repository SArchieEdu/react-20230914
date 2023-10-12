import { useState } from "react";
import { Button } from "../Button/component";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { Codec } from "../Codec/component";
import { selectHeadphoneById } from "../../redux/entities/headphone/selectors";

export const Product = ({ productId }) => {
  const product = useSelector((state) => selectHeadphoneById(state, productId));
  const [amount, setAmount] = useState(0);

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
          onClick={() => setAmount(amount - 1)}
          disabled={amount === 0}
          className={styles.action}
        />
        {amount}
        <Button
          title="+"
          onClick={() => setAmount(amount + 1)}
          disabled={amount === 5}
        />
      </div>
    </div>
  );
};
