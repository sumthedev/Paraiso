import { GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between p-[18px]">
      <div className="flex items-center">
        <h1 className="text-white mr-2 text-01">Hello Admin</h1>
        <div className="nav-bell ml-[10px]">
          <GoBell className="text-white bell " />
        </div>
      </div>

      <div className="nav-search flex items-center">
        <CiSearch className="text-white search " />
        <input className="ml-[-10px]" type="text" placeholder="Search" />
      </div>

      <div className="flex items-center">
        <h1 className="text-white mr-2 text-02">Mr.Admin</h1>
        <img src="/images/admin.png" alt="admin" />
      </div>
    </nav>
  );
}

export default Navbar;
