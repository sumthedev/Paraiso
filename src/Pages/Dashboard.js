import Chart from "../Chart/Chart";
import { FaCircle } from "react-icons/fa6";
import Reviews from "../components/Reviews";

function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="flex w-full bg-black-200 flex-col">
          <div className="w-full">
            <div className="flex card-container  ">
              <div
                className="card "
                style={{
                  width: "calc(33.33% - 20px)",
                  minWidth: "335px",
                  height: "175px",
                  marginRight: "20px",
                }}
              >
                <div className="flex flex-row p-[30px] justify-around">
                  <span className="mt-[10px] ">
                    <img
                      src="/images/shop.png"
                      alt="shop"
                      style={{ minWidth: "100px" }}
                    />
                  </span>
                  <div className="flex flex-col mr-[25px] text-white">
                    <h1 className="text-08">$128</h1>
                    <p className="text-09">Total Revenue</p>

                    <p className="flex items-center">
                      <span className="ml-[-20px]">
                        <img src="/images/icon.svg" alt="arrow-down" />
                      </span>
                      <span className="ml-[-20px] text-10">12 (30 Days)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "calc(33.33% - 20px)",
                  minWidth: "335px",

                  height: "175px",
                  marginRight: "20px",
                }}
              >
                <div className="flex flex-row p-[30px] justify-around">
                  <span className="mt-[10px] ">
                    <img
                      src="/images/orders.svg"
                      alt="shop"
                      style={{ minWidth: "100px" }}
                    />
                  </span>
                  <div className="flex flex-col mr-[25px] text-white">
                    <h1 className="text-08">72</h1>
                    <p className="text-09">Total Orders</p>

                    <p className="flex items-center">
                      <span className="ml-[-20px]">
                        <img src="/images/icon-02.svg" alt="arrow-down" />
                      </span>
                      <span className="ml-[-20px] text-10">4 (30 days)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "calc(33.33% - 20px)",
                  minWidth: "335px",

                  height: "175px",
                  marginRight: "20px",
                }}
              >
                <div className="flex flex-row p-[30px] justify-around">
                  <span className="mt-[10px] ">
                    <img
                      src="/images/stock.svg"
                      alt="shop"
                      style={{ minWidth: "100px" }}
                    />
                  </span>
                  <div className="flex flex-col mr-[25px] text-white">
                    <h1 className="text-08">357</h1>
                    <p className="text-09">Completed Orders</p>

                    <p className="flex items-center">
                      <span className="ml-[-20px]">
                        <img src="/images/icon-02.svg" alt="arrow-up" />
                      </span>
                      <span className="ml-[-20px] text-10">4 (30 days)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="chart-div p-[10px]"
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="flex  justify-between items-center  w-full">
                <h1 className="text-15 ml-[55px] ">Total Revenue</h1>
                <div className="flex items-center ">
                  <span className="text-white flex items-center">
                    <FaCircle className="icon-07" />
                    <span className="">2023</span>
                  </span>
                  <span className="text-white flex items-center">
                    <FaCircle className="icon-08" />
                    <span className="">2024</span>
                  </span>
                </div>
              </div>
              <Chart />
            </div>
          </div>
          <div className="user-review">
            <h1 className="text-white mt-[20px] text-19">User Reviews</h1>
          </div>

          <Reviews />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
