import { data } from "../data/mockupData";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const rows = data;

function Users() {
  return (
    <>
      <div className="w-full">
        <div className="">
          <h1 className="text-white text-11">All Users</h1>
          <h1 className="hidden-text">All users</h1>
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

              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>School Name</th>
              <th>No of Orders</th>
              <th>Actions</th>
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
                  <img src={item.img} alt="pic-01" />
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.school}</td>
                <td>{item.orders}</td>
                <td>
                  <span className="flex-row flex ">
                    <RiDeleteBin6Line className="icon-03" />
                    <FiEdit3 className="icon-03 ml-[10px] " />
                  </span>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;
