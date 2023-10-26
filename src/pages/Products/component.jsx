import { Outlet } from "react-router-dom";
import { useGetHeadphonesQuery } from "../../redux/services/api";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";

export const ProductsPage = () => {
  const { data, isFetching } = useGetHeadphonesQuery();
  const [search, setSearch] = useSearchParams();

  return (
    <div>
      {isFetching && <div>Loading</div>}
      <input
        value={search.get("product")}
        placeholder="search"
        onChange={(event) => setSearch({ product: event.target.value })}
      />
      <div>
        {data
          ?.filter(({ name }) => name.indexOf(search.get("product")) !== -1)
          .map(({ id, name }) => (
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
      </div>
      <Outlet />
    </div>
  );
};
