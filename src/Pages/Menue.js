// import { data } from "../data/mockupData";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useState } from "react";

import { IoAdd } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa6";
import { IoChevronDownSharp } from "react-icons/io5";
import Popover from "../components/Popover";
import RightSideBar from "../components/RightSideBar";

// const rows = data;

function Menue() {
  const [isAllItemPopoverOpen, setAllItemPopoverOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [items, setItems] = useState([]); // State to hold all items

  const toggleAllItemPopover = () => {
    setAllItemPopoverOpen(!isAllItemPopoverOpen);
  };

  const toggleRightSidebar = () => {
    setRightSidebarOpen(!isRightSidebarOpen); // Rename function
  };

  const handleConfirm = (formData, imgUrl) => {
    setItems([...items, { ...formData, img: imgUrl }]);
    console.log(imgUrl);
    console.log(formData);
    setRightSidebarOpen(false);
  };
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id)); // Remove item with matching id
  };
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center p-[10px]">
          <h1 className="text-white text-11 flex items-center">
            <FaChevronLeft className="ml-2" />
            <span className="ml-2">MecDonalds Menu</span>
          </h1>
          <div className="flex items-center space-x-4">
            <button
              className="text-white flex items-center"
              onClick={toggleAllItemPopover}
            >
              {isAllItemPopoverOpen && <Popover />}
              <span className="ml-2 text-12">All item</span>
              <IoChevronDownSharp />
            </button>
            <button className="text-white flex items-center">
              <span className="ml-2 text-12">Sort by</span>
              <IoChevronDownSharp />
            </button>

            <button
              className="text-white btn-02 flex items-center"
              onClick={toggleRightSidebar}
            >
              <span className="text-13">Add Item</span>
              <IoAdd className="icon-05" />
            </button>
          </div>
        </div>
        {isRightSidebarOpen && (
          <RightSideBar
            onClose={toggleRightSidebar}
            onConfirm={handleConfirm}
          />
        )}
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
              <th>About Item</th>
              <th>Size</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>

            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    className="user-check ml-[10px] flex"
                  />
                </td>
                <td>
                  <img
                    src={item.img}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "20px",
                    }}
                    alt={item.itemName}
                  />
                </td>
                <td>{item.itemName}</td>
                <td>{item.itemDescription}</td>

                <td>
                  {item.sizes.map((size, index) => (
                    <span key={index}>
                      {size.size === "Small"
                        ? "S"
                        : size.size === "Medium"
                        ? "M"
                        : "L"}
                      {index !== item.sizes.length - 1 ? "," : ""}
                    </span>
                  ))}
                </td>
                <td>
                  {item.sizes.map((size, index) => (
                    <div key={index}>{size.price}</div>
                  ))}
                </td>
                <td>{item.selectedCategory}</td>
                <td>
                  <span className="flex-row flex">
                    <button onClick={() => handleDelete(item.id)}>
                      <RiDeleteBin6Line className="icon-03" />
                    </button>
                    <FiEdit3 className="icon-03 ml-[10px]" />
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

export default Menue;
