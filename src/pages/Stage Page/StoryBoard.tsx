import React from "react";
import StoryBoardTable from "./StoryBoardTable";

const StoryBoard = () => {
  return (
    <div>
      <div className="flex  w-fit h-fit font-medium bg-teal-50 relative ...">
        <div className="absolute -top-5 left-10 w-40  bg-pink-300 text-white...">
          <p className="text-white pl-3 text-left">Story Board</p>
        </div>
        <div className="w-full mt-8 mb-8 relative flex place-content-center items-center  ">
          <StoryBoardTable />
        </div>
      </div>
    </div>
  );
};

export default StoryBoard;
