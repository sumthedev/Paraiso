import React from "react";
import { NavLink, Link } from "react-router-dom";

function Popover() {
  return (
    <>
      <div className="popover ">
        <div className="flex flex-col p-[10px] text-left">
          <NavLink to="/menue" className="p-[4px]">
            All Items
          </NavLink>
          <Link className="mt-[5px]">Drinks</Link>
          <Link className="mt-[5px]">Fast Food</Link>
          <Link className="mt-[5px]">Sweets</Link>
        </div>
        <div className="btn-03 ">
          <button className="p-[10px]">+ Add New</button>
        </div>
      </div>
    </>
  );
}

export default Popover;
