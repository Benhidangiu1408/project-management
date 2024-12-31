import React, { useState } from "react";

function DatePicker() {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (event: any) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div>
            <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={handleDateChange}
                style={{
                    padding: "18px",
                    fontSize: "28px",
                    margin: "10px 0",
                    borderRadius: "9px",
                    border: "1px transparent",
                }}
            />
        </div>
    );
}

export default DatePicker;
