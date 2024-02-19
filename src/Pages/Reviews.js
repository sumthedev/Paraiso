import { reviewData } from "../data/mockupData";

import { RiDeleteBin6Line } from "react-icons/ri";

const rows = reviewData;

function Reviews() {
  return (
    <>
      <div className="w-full">
        <div className="">
          <h1 className="text-white text-11 user-table-text">
            Customer Reviews
          </h1>
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

              <th>Image</th>
              <th>Customer Name</th>
              <th>Restaurant</th>
              <th>Stars</th>
              <th>Review</th>
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
                <td>{item.restaurant}</td>
                <td>{item.stars}</td>
                <td>{item.review}</td>

                <td>
                  <span className="flex-row flex ">
                    <RiDeleteBin6Line className="icon-03" />
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

export default Reviews;
