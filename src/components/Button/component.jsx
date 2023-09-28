import classNames from "classnames";
import styles from "./styles.module.css";

export const Button = ({ title, onClick, disabled, size, type, className }) => {
  return (
    <button
      className={classNames(
        styles.root,
        className,
        styles[size],
        styles[type],
        {
          [styles.disabled]: disabled,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
