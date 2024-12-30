// SmallSquare.jsx
import React from "react";

function SmallSquare({ text = "Default Text" }: any) {
    return (
        <div
            style={{
                position: "absolute",
                top: "-45px", // Moves it upward (negative values move it above the BigSquare)
                left: "40px", // Moves it to the right
                width: "350px",
                height: "90px",
                backgroundColor: "#81BFB7",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "40px",
                fontFamily: "Calibri",
            }}
        >
            {text}
        </div>
    );
}

export default SmallSquare;
