import { useState } from "react";
import { Button } from "../Button/component";

import styles from "./styles.module.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";

export const Product = ({ name }) => {
  const [amount, setAmount] = useState(0);
  const { user } = useContext(UserContext);

  if (!name) {
    return null;
  }

  return (
    <div>
      {name} -
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
      for {user} discount 10%
    </div>
  );
};
