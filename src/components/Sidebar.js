import { NavLink } from "react-router-dom";
import { CiGrid42 } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import { RiStore2Line } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { BiDish } from "react-icons/bi";
import { MdOutlineInsertChart } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { useRef } from "react";

function Sidebar({ isOpen, toggleSidebar }) {
  const sidebarRef = useRef(null);

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (startX && sidebarRef.current) {
      const currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      if (diff < 0) {
        // Swiping left
        toggleSidebar(false);
      }
      startX = null;
    }
  };

  let startX = null;

  return (
    <>
      <div
        ref={sidebarRef}
        className={`sidebar ${isOpen ? "open" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="flex logo flex-row p-[30px]">
          <img src="/images/icons/paraiso.svg" alt="logo" />
          <h1 className="logo-text p-[10px]">
            <span>Paraiso</span>
          </h1>
        </div>

        <div className="p-[20px]">
          <NavLink to="/" className="flex items-center p-[10px]">
            <CiGrid42 className="icon" />
            <span className="ml-[10px]"> Dashboard</span>
          </NavLink>

          <NavLink to="users" className="flex items-center p-[10px]">
            <LuUsers2 className="icon" />
            <span className="ml-[10px]">Users</span>
          </NavLink>

          <NavLink to="restaurants" className="flex items-center p-[10px]">
            <RiStore2Line className="icon" />
            <span className="ml-[10px]">Restaurants</span>
          </NavLink>

          <NavLink to="analytics" className="flex items-center p-[10px]">
            <MdOutlineInsertChart className="icon" />
            <span className="ml-[10px]">Analytics</span>
          </NavLink>

          <NavLink to="foods" className="flex items-center p-[10px]">
            <BiDish className="icon" />
            <span className="ml-[10px]">Foods</span>
          </NavLink>

          <NavLink to="reviews" className="flex items-center p-[10px]">
            <HiOutlinePencil className="icon" />
            <span className="ml-[10px]">Reviews</span>
          </NavLink>

          <NavLink to="/settings" className="flex items-center p-[10px]">
            <IoSettingsOutline className="icon" />
            <span className="ml-[10px]">Settings</span>
          </NavLink>
        </div>

        <div className="mt-auto p-[20px]">
          <NavLink to="signout" className="flex items-center p-[10px]">
            <IoIosLogOut className="icon" />
            <span className="ml-[10px]">Sign Out</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
