import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

function Signout({ onLogout }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to the login page
    onLogout();
  };

  return (
    <div className="under-construction-container">
      <div className="under-construction-content">
        <IoIosLogOut className="construction-icon ml-[25px]" />
        <h1 className="text-02">Bye Bye</h1>
        <button className="btn-02 text-white mt-[20px]" onClick={handleClick}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Signout;
