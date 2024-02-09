import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ItemForm from "./ItemForm";

export default function RightSideBar({ onClose, onConfirm }) {
  const [isHidden, setIsHidden] = useState(false);
  const [imgUrl, setImgUrl] = useState(""); // State to hold image URL

  const handleFileUpload = (e) => {
    const fileInput = e.target;

    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgUploader = document.querySelector(".img-uploader");
        imgUploader.style.backgroundImage = `url('${reader.result}')`;
        setImgUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  const handleConfirm = (formData) => {
    onConfirm(formData, imgUrl); // Pass the image URL to onConfirm function
  };
  return (
    <div className="rightBar">
      <div className="text-white">
        <button
          className="text-white ml-[20px] flex item-center mt-[20px] text-center btn-04"
          onClick={onClose}
        >
          <span className="ml-[-6px] mt-[2px]">
            <RxCross2 className="icon-06" />
          </span>
        </button>
      </div>
      <div className="flex flex-col  items-center justify-center">
        <div>
          <h1 className="text-14">New Item</h1>
        </div>
        <div
          className="img-uploader mt-[10px] "
          onClick={() => document.getElementById("fileInput").click()}
        >
          <span onClick={handleClick} className={isHidden ? "hidden" : ""}>
            <img
              src="/images/icons/dish.svg"
              alt="dish"
              className="ml-[10px]"
            />
            <p className="">Select an image</p>
          </span>

          <div>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => handleFileUpload(e)}
            />
          </div>
        </div>
        <ItemForm onConfirm={handleConfirm} />
      </div>
    </div>
  );
}
