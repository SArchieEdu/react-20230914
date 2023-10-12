import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import classNames from "classnames";
import { selectCodecById } from "../../redux/entities/codec/selectors";

export const Codec = ({ codecId, className }) => {
  const codec = useSelector((state) => selectCodecById(state, codecId));

  if (!codec) {
    return null;
  }
  return <div className={classNames(styles.root, className)}>{codec.type}</div>;
};
