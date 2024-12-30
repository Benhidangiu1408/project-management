// SmallCircle.jsx
import React from "react";

function SmallCircle({ text, backgroundColor, top, left }: any) {
    return (
        <div
            style={{
                position: "absolute", // Enables positioning relative to the parent
                width: "55px",
                height: "55px",
                top: top,
                left: left,
                borderRadius: "50%", // Makes it a circle
                backgroundColor: backgroundColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "30px",
                fontFamily: "Calibri",
            }}
        >
            {text}
        </div>
    );
}

export default SmallCircle;
