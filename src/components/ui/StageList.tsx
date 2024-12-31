import { useState } from "react";
import AddBlock from "./AddBlock";

const StageBlock = () => {
  // State for stages
  const [stages, setStages] = useState(["Stage 1", "Stage 2", "Stage 3", "Stage 4"]);

  const [show, setShow] = useState(false);

  const toggleAdd = () => {
    setShow(!show);
  };

  // Function to add a new stage
  const addStage = ({ blockName, startTime, endTime }: any) => {
    setStages([...stages, `Stage ${blockName}`]);
  };

  return (
    <div className="bg-pink100 p-4 w-64 rounded-md shadow-md relative">
      {show && <AddBlock color="pink" name="Stage" onClose={toggleAdd} onAdd={addStage} />}
      {/* Header */}
      <div className="bg-green300 text-white text-sm px-4 py-1 absolute top-[-15px]">Stage</div>

      {/* Stage List */}
      <div className="space-y-2 mt-4">
        {stages.map((stage, index) => (
          <div key={index} className="bg-pink200 text-gray-700 text-sm font-medium px-4 py-2">
            {stage}
          </div>
        ))}

        {/* Add Stage Button */}
        <button onClick={toggleAdd} className="w-full bg-pink100 text-pink300 text-2xl font-bold px-4 border-[3px] border-pink200 hover:bg-pink200">
          +
        </button>
      </div>
    </div>
  );
};

export default StageBlock;
