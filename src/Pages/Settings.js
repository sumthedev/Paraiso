import { MdOutlineConstruction } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(-1);
    e.preventDefault();
  };
  return (
    <div className="under-construction-container">
      <div className="under-construction-content">
        <MdOutlineConstruction className="construction-icon ml-[25px]" />
        <h1 className="text-02">Under Construction</h1>
        <button className="btn-02 text-white mt-[20px]" onClick={handleClick}>
          Return
        </button>
      </div>
    </div>
  );
}

export default Settings;
