// BigSquare.jsx
import React from "react";

function BigSquare({ children }: any) {
  return (
    <div
      style={{
        position: "relative", // Set the container to relative
        width: "900px",
        height: "550px",
        backgroundColor: "#FFEDF1", // Pink color
        top: "70px", // Adjust as needed
        left: "350px", // Adjust as needed
        overflow: "visible",
      }}
    >
      {children}
    </div>
  );
}

export default BigSquare;
