import React from "react";
import { MenuItem } from "../MenuItem/component";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      {menu.map((product) => (
        <MenuItem key={product.id} product={product} />
      ))}
    </div>
  );
};
