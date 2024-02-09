import Chart from "../Chart/Chart";
import Reviews from "../components/Reviews";

function Analytics() {
  return (
    <div className="flex justify-center flex-col items-center h-full">
      <div className="mt-[20px]">
        <Chart />
      </div>
      <div className="mt-[20px]">
        <h1 className=" mt-[20px] text-19 ">User Reviews</h1>
      </div>
      <div className="mt-[20px] ml-[20px]">
        <Reviews />
      </div>
    </div>
  );
}

export default Analytics;
