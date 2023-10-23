import { Outlet } from "react-router-dom";
import { useGetHeadphonesQuery } from "../../redux/services/api";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";
import classNames from "classnames";

export const ProductsPage = () => {
  const { data, isFetching } = useGetHeadphonesQuery();

  return (
    <div>
      {isFetching && <div>Loading</div>}
      {data?.map(({ id, name }) => (
        <NavLink
          key={id}
          to={id}
          className={({ isActive }) =>
            classNames({ [styles.activeTab]: isActive })
          }
        >
          <button>{name}</button>
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};
