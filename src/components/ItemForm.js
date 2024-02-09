import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

function ItemForm({ onConfirm }) {
  const [showPopover, setShowPopover] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [sizes, setSizes] = useState([
    { size: "Small", price: "" },
    { size: "Medium", price: "" },
    { size: "Large", price: "" },
  ]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowPopover(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "itemName") setItemName(value);
    else if (name === "itemDescription") setItemDescription(value);
    else {
      const index = parseInt(name.split("-")[1]);
      const updatedSizes = [...sizes];
      updatedSizes[index].price = value;
      setSizes(updatedSizes);
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    const formData = {
      itemName: itemName,
      itemDescription: itemDescription,
      selectedCategory: selectedCategory,
      sizes: sizes,
    };

    onConfirm(formData);
  };

  return (
    <>
      <div className="flex flex-col">
        <div>
          <span className="ml-[7px] text-12">Item Details</span>
        </div>
        <form onSubmit={handleConfirm}>
          <div className="flex flex-col relative">
            <input
              onChange={handleInputChange}
              type="text"
              name="itemName"
              value={itemName}
              className="item-input ml-[7px] mt-[10px] p-[25px] "
              placeholder="Enter item name"
              autocomplete="off"
            />
            <input
              onChange={handleInputChange}
              type="text"
              name="itemDescription"
              value={itemDescription}
              className="item-input ml-[7px] mt-[10px] p-[25px]"
              placeholder="About Item"
              autocomplete="off"
            />
            <div className="relative" style={{ color: " #bdbdbd" }}>
              <input
                type="text"
                className="item-input mt-[10px] ml-[7px] p-[25px] pr-[40px]"
                placeholder="Category"
                value={selectedCategory}
                readOnly
                onClick={() => setShowPopover(!showPopover)}
              />
              <div className="absolute p-[10px] mt-[5px] text-white top-1/2 transform -translate-y-1/2 right-2 cursor-pointer">
                <IoChevronDownSharp
                  onClick={() => setShowPopover(!showPopover)}
                />
              </div>
              {showPopover && (
                <div className="absolute popover-01 ml-[7px] bg-white shadow-md mt-2 py-1 rounded-md">
                  <div
                    className="cursor-pointer text-white  p-2"
                    onClick={() => handleCategorySelect("Fast food")}
                  >
                    Fast food
                  </div>
                  <div
                    className="cursor-pointer text-white  p-2"
                    onClick={() => handleCategorySelect("Drinks")}
                  >
                    Drinks
                  </div>
                  <div
                    className="cursor-pointer text-white  p-2"
                    onClick={() => handleCategorySelect("Sweets")}
                  >
                    Sweets
                  </div>
                </div>
              )}
            </div>
            <span className="text-12 mt-[10px]">Select Price</span>
            <div className="user-table w-[85%] ml-[40px] rounded-[15px] overflow-x-auto">
              <table id="customers" className="rounded-[15px]">
                <colgroup>
                  <col style={{ width: "25%" }} />
                  <col style={{ width: "50%" }} />
                  <col style={{ width: "25%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        className="user-check-01 ml-[10px] flex"
                        autocomplete="off"
                      />
                    </th>
                    <th>Size</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((size, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          className="user-check ml-[10px] flex"
                          autocomplete="off"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`size-${index}`}
                          value={size.size}
                          autocomplete="off"
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          className="w-[45px]"
                          type="text"
                          name={`price-${index}`}
                          value={size.price}
                          autocomplete="off"
                          placeholder="$0.00"
                          onChange={handleInputChange}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <button className="text-white btn-02 ml-[125px] mt-[12px] flex items-center">
            <span className="ml-[9px]">Confirm</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default ItemForm;
