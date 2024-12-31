import React, { useState } from "react";

function AddBlock({ color, name, onClose, onAdd }: any) {
  const [blockName, setBlockName] = useState("Untitled");
  const [startTime, setStartTime] = useState("2024-08-24");
  const [endTime, setEndTime] = useState("2024-10-24");

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className={`bg-${color}100 p-10 rounded-md min-w-[450px] w-1/3 h-fit flex flex-col font-ubuntuMono z-20`}>
        <div className="flex justify-center mb-6">
          <div className={`text-2xl/6 bg-${color}200 px-8 py-2.5`}>ADD {name}</div>
        </div>

        <div className="mb-4 flex text-lg">
          <label className="mr-2 mt-1">Name</label>
          <input type="text" value={blockName} onChange={(e) => setBlockName(e.target.value)} className="w-full p-1 border border-gray-300 rounded-md" />
        </div>

        <div className="mb-10 flex text-lg">
          <label className="mr-2 mt-1">Time</label>
          <div className="w-full flex items-center space-x-2">
            <input
              type="date"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-1 border border-gray-300 rounded-md text-center"
            />
            <span>~</span>
            <input
              type="date"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-1 border border-gray-300 rounded-md text-center"
            />
          </div>
        </div>
        <div className="flex justify-evenly h-fit text-xl">
          <button onClick={onClose} className={`text-${color}300 border border-${color}300 rounded-md w-[150px] py-1`}>
            Cancel
          </button>
          <button
            onClick={() => {
              onAdd({ blockName, startTime, endTime });
              onClose();
            }}
            className={`bg-${color}300 text-white rounded-md w-[150px] py-1`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBlock;
