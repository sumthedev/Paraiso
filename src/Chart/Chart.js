import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "March", uv: 2000, pv: 9800, amt: 2290 },
  { name: "April", uv: 2780, pv: 3908, amt: 2000 },
  { name: "June", uv: 1890, pv: 4800, amt: 2181 },
  { name: "July", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Aug", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Sep", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Oct", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Nov", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Dec", uv: 2780, pv: 3908, amt: 2000 },
];

const formatYAxisTick = (value) => `${value}k`;

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#353535",
          color: "#bdbdbd",
          padding: "10px",
          border: "1px solid #2a2a2a",
        }}
      >
        <p>{`Name : ${payload[0].payload.name}`}</p>
        <p>{`Value : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function Chart() {
  return (
    <div id="chart">
      <div style={{ height: 300, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis tickFormatter={formatYAxisTick} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              strokeWidth={4}
              dataKey="pv"
              stroke="#FF6154"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              strokeWidth={4}
              dataKey="uv"
              stroke="#2D9CDB"
            />
            {data.map((entry, index) => (
              <ReferenceLine
                key={`reference-line-${index}`}
                x={entry.name}
                stroke="white"
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
