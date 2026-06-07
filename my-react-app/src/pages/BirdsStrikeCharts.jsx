import React, { useContext, useMemo} from "react";
import { FormContext } from "../pages/FormContext";
import BirdsStrikeReport from "./BirdStrikeReport";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BirdStrikeChart = () => {
  const { 
    availableYears,
    handlePrint,
    chartData,
    setSelectedMonth,
    setSelectedYear,  
    selectedMonth,
    selectedYear,
    chartRef,
    setReportType,
    reportType,
    yearlyChartData,
   } = useContext(FormContext);
  
  //  console.log(selectedYear, selectedMonth)

 const yMax = useMemo(() => {
    const maxValue = Math.max(
      ...chartData.map((d) =>
        Math.max(d.confirmed, d.unconfirmed, d.total)
      )
    );
    return maxValue === 0 ? 5 : Math.ceil(maxValue * 1.15);
  }, [chartData]);

  const SquareDot = (props) => {
  const { cx, cy, stroke, value } = props;

  // Hide dot if value is null
  if (value === null || value === undefined) return null;

  return (
    <rect
      x={cx - 2}
      y={cy - 2}
      width={4}
      height={4}
      fill={stroke}
      stroke="#000"
      strokeWidth={0.5}
    />
  );
};

  return (
    <div className="relative mx-auto mt-2 bg-white/10 text- backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/30"> 
    {/* // <div className="bg-white p-8 shadow border border-gray-300"> */}
      {/* REPORT HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-sm text-gray-600 uppercase tracking-wide mt-1">
          Bird Strike Graphical/Statistical Report
        </h2>
        <p className="text-xs text-white mt-2">
          {selectedMonth}/{selectedYear}
        </p>
      </div>

      {/* Month / Year Controls */}
      <div className="flex justify-between w-[100%] gap-4 mb-6">
      
<div className="flex gap-4">

  {/* Report Type Selector */}
  <select
    className="border px-3 py-1 text-sm"
    value={reportType}
    onChange={(e) => setReportType(e.target.value)}
  >
    <option value="monthly">Monthly Report</option>
    <option value="yearly">Yearly Report</option>
  </select>

  {/* Month selector only for monthly report */}
  {reportType === "monthly" && (
    <select
      className="border px-3 py-1 text-sm"
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(Number(e.target.value))}
    >
      {[
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
      ].map((month, idx) => (
        <option key={idx} value={idx + 1}>{month}</option>
      ))}
    </select>
  )}

  {/* Year selector (works for both reports) */}
  <select
    className="border px-3 py-1 text-sm"
    value={selectedYear}
    onChange={(e) => setSelectedYear(Number(e.target.value))}
  >
    {availableYears.map((year) => (
      <option key={year} value={year}>{year}</option>
    ))}
  </select>

</div>

    {/* Totals */}
      <div className="flex gap-4 mb-2 text-sm font-medium">
          <BirdsStrikeReport/>
      </div>

      <button
          onClick={handlePrint}
          className="bg-gray-300 tbn flex-end text-white px-4 py-2 rounded hover:bg-gray-400"
        >
          Print PDF
      </button>
      
      </div>

  {/* Chart */}
  <div ref={chartRef} className="print-area"> 
      <ResponsiveContainer width="100%" height={420}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
        >
          {/* <CartesianGrid stroke="#d1d5db" strokeDasharray="2 2" /> */}
        <CartesianGrid
            stroke="#d1d5db"
            strokeDasharray="2 2"
            vertical={true}
            horizontal={true}
          />
          <XAxis
          dataKey={reportType === "monthly" ? "day" : "month"}
            // dataKey="day"
            type="number"
            domain={[0, 31]}
            ticks={[0, 5, 10, 15, 20, 25, 30]}
            tick={{ fontSize: 11 }}
            label={{
              value: "DAY OF MONTH",
              position: "insideBottomRight",
              offset: -5,
              style: { fontSize: 11 },
            }}
          />
          <YAxis
            domain={[0, yMax]}
            allowDecimals={false}
            tick={{ fontSize: 11 }}
            label={{
              value: "NUMBER OF INCIDENTS",
              angle: -90,
              position: "insideLeft",
              style: { fontSize: 11 },
            }}
          />
          <Tooltip
            contentStyle={{
              fontSize: "12px",
              borderRadius: "4px",
            }}
          />

          <Legend
            verticalAlign="top"
            wrapperStyle={{ fontSize: "12px" }}
          />
      <Line
        data={reportType === "monthly" ? chartData : yearlyChartData}
        type="natural"
        dataKey="confirmed"
        stroke="#1127e9"
        strokeWidth={2}
        dot={<SquareDot />}
        connectNulls={true}
      />
      <Line
        data={reportType === "monthly" ? chartData : yearlyChartData}
        type="natural"
        dataKey="unconfirmed"
        stroke="#f35852"
        strokeWidth={2}
        dot={<SquareDot />}
        connectNulls={true}
      />
      </LineChart>
      </ResponsiveContainer>
  </div>
      {/* Footer */}
      <div className="text-xs text-white mt-6 text-right">
       Gambia Civil Aviation Authority, Bird Strike Reporting System Generated By Ebrima Nanko, AirSide.
      </div>
    </div>
  );
};

export default BirdStrikeChart;