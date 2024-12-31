import moment from "moment";
import React, { useState } from "react";

function GanttChart({ color }: any) {
  const tasks = [
    { name: "Smart Printing", start: "2024-10-01", end: "2024-10-25" },
    { name: "Software", start: "2024-10-05", end: "2024-10-16" },
    { name: "Project", start: "2024-10-07", end: "2024-10-20" },
    { name: "Network", start: "2024-10-03", end: "2024-10-09" },
    { name: "Assignment", start: "2024-10-08", end: "2024-10-11" },
  ];

  const [time, setTime] = useState(moment());
  const daysInMonth = time.daysInMonth(); // Number of days in the chart
  const currentDate = time.date(); // Highlighted date

  return (
    <div className={`p-4 bg-${color}100 w-fit`}>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{time.format("MMMM YYYY")}</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setTime(time.clone().subtract(1, "d"));
            }}
          >
            {"<"}
          </button>
          <input
            type="date"
            value={time.format("YYYY-MM-DD")}
            className="text-sm text-gray-500"
            onChange={(e) => {
              setTime(moment(e.target.value));
            }}
          />
          <button
            onClick={() => {
              setTime(time.clone().add(1, "d"));
            }}
          >
            {">"}
          </button>
          {/* <select className="text-sm text-gray-500 bg-transparent outline-none">
            <option>Month</option>
            <option>Week</option>
          </select> */}
        </div>
      </div>

      {/* Timeline (Days) */}
      <div className="flex border-b border-gray-300 pb-2 overflow-x-auto w-auto">
        {/* Empty space for project name column */}
        <div className="w-32"></div>
        {/* Days row */}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className={`flex-shrink-0 flex justify-center items-center text-sm w-8 ${
              day === currentDate
                ? `text-white bg-${color}300 rounded-full`
                : time.clone().set("date", day).isoWeekday() === 7 || time.clone().set("date", day).isoWeekday() === 6
                ? `text-black bg-${color}200 rounded-full`
                : "text-gray-800"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Task Rows */}
      <div className="relative mt-4 space-y-2">
        {tasks.map((task, index) => {
          const startTime = moment(task.start);
          const endTime = moment(task.end);
          if (endTime.isBefore(time.clone().startOf("month"), "day") || startTime.isAfter(time.clone().endOf("month"), "day")) {
            return null;
          }
          return (
            <div key={index} className="flex items-center">
              {/* Task Label */}
              <div className="w-32 text-sm text-gray-700">{task.name}</div>

              {/* Gantt Bar */}
              <div
                className={`relative h-6 bg-${color}300 rounded-full`}
                style={{
                  marginLeft: `${(startTime.date() - 1) * 2}rem`, // Each day width = 2rem
                  width: `${(endTime.date() - startTime.date() + 1) * 2}rem`,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GanttChart;
