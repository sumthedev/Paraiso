import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { restaurantData } from "../data/mockupData";
import { FiEdit3 } from "react-icons/fi";
import { BiDish } from "react-icons/bi";

const rows = restaurantData;

function Restaurants() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/menue");
  };
  return (
    <>
      <div className="w-full">
        <div className="">
          <h1 className="text-white text-11">Registered Restaurants</h1>
          <h1 className="hidden-text">Customer Reviews</h1>
        </div>
        <div className="user-table">
          <table id="customers">
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="user-check-01 ml-[10px] flex"
                />
              </th>

              <th>Logo</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>
                <span className="ml-[-25px]">Orders</span>
              </th>
              <th>
                <span className="ml-[5px]">Actions</span>
              </th>
              <th>Set Menue</th>
            </tr>

            {rows.map((item, index) => (
              <tr>
                <td>
                  <input
                    type="checkbox"
                    className="user-check ml-[10px] flex"
                  />
                </td>
                <td>
                  <img src={item.logo} alt="pic-01" />
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.orders}</td>
                <td>
                  <span className="flex-row flex ">
                    <RiDeleteBin6Line className="icon-03" />
                    <FiEdit3 className="icon-03 ml-[10px] " />
                  </span>
                </td>

                <td>
                  <button onClick={handleClick} className="ml-[20px] ">
                    <BiDish className="icon-04" />
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Restaurants;
