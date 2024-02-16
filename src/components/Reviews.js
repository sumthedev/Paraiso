import { FaStar, FaRegStar } from "react-icons/fa";
function Reviews() {
  return (
    <>
      <div className="card-container mt-[20px] mb-[20px]">
        <div
          className="card"
          style={{
            width: "calc(33.33% - 20px)",
            minWidth: "350px",
            height: "200px",
            marginRight: "20px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",

            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex items-center ml-[20px]">
            <img
              src="/images/review-01.png"
              alt="customer"
              style={{
                width: "50px",
                height: "50px",
                marginRight: "10px",
                borderRadius: "50%",
              }}
            />
            <div className="flex flex-col">
              <span className="text-17">Jons Sena</span>
              <span className="text-18 mt-[-10px]">2 days ago</span>
            </div>
          </div>
          <div>
            <h1 className="text-16 ml-[20px] mt-[10px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </h1>
          </div>
          <div className="flex items-center">
            <span style={{ display: "flex" }}>
              <FaStar color="yellow" />
              <FaStar color="yellow" className="ml-[10px]" />
              <FaStar color="yellow" className="ml-[10px]" />
              <FaStar color="yellow" className="ml-[10px]" />
              <FaRegStar color="gray" className="ml-[10px]" />
            </span>
            <span className="text-white ml-2">4.5</span>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "calc(33.33% - 20px)",
            minWidth: "350px",
            height: "200px",
            marginRight: "20px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",

            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex items-center ml-[20px]">
            <img
              src="/images/review-02.png"
              alt="customer"
              style={{
                width: "50px",
                height: "50px",
                marginRight: "10px",
                borderRadius: "50%",
              }}
            />
            <div className="flex flex-col">
              <span className="text-17">Alexa Jhons</span>
              <span className="text-18 mt-[-10px]">2 days ago</span>
            </div>
          </div>
          <div>
            <h1 className="text-16 ml-[20px] mt-[10px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </h1>
          </div>
          <div className="flex items-center">
            <span style={{ display: "flex" }}>
              <FaStar color="yellow" />
              <FaStar color="yellow" className="ml-[10px]" />
              <FaStar color="yellow" className="ml-[10px]" />
              <FaStar color="yellow" className="ml-[10px]" />
              <FaRegStar color="gray" className="ml-[10px]" />
            </span>
            <span className="text-white ml-2">4.5</span>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "calc(33.33% - 20px)",
            minWidth: "350px",
            height: "200px",
            marginRight: "20px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",

            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex items-center ml-[20px]">
            <img
              src="/images/review-03.png"
              alt="customer"
              style={{
                width: "50px",
                height: "50px",
                marginRight: "10px",
                borderRadius: "50%",
              }}
            />
            <div className="flex flex-col">
              <span className="text-17">Emma Willioms</span>
              <span className="text-18 mt-[-10px]">2 days ago</span>
            </div>
          </div>
          <div>
            <h1 className="text-16 ml-[20px] mt-[10px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </h1>
          </div>
          <div className="flex items-center">
            <span style={{ display: "flex" }}>
              <FaStar color="yellow" />
              <FaStar color="yellow" className="ml-[10px]" />
              <FaStar color="yellow" className="ml-[10px]" />
              <FaStar color="yellow" className="ml-[10px]" />
              <FaRegStar color="gray" className="ml-[10px]" />
            </span>
            <span className="text-white ml-2">4</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
