import React from "react";
import { MeetingProps } from "./meetingTypes";

interface LastMeetingProps {
  previousMeetings: MeetingProps[]; // Các cuộc họp đã kết thúc
  onClose: () => void; // Hàm để đóng component
}

const LastMeeting: React.FC<LastMeetingProps> = ({
  previousMeetings,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] max-h-[70%] overflow-y-auto">
        <h4 className="font-bold text-xl text-black mb-4">
          Previous Meetings
        </h4>
        {previousMeetings.length > 0 ? (
          previousMeetings.map((meeting, index) => (
            <div
              key={index}
              className="mb-4 p-4 bg-[#f3a2be]/10 shadow rounded-lg border border-gray-300"
            >
              <h5 className="font-bold text-lg">{meeting.projectName}</h5>
              <p className="text-sm text-gray-700">
                {meeting.startTime} - {meeting.endTime}, {meeting.date}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No previous meetings found.</p>
        )}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-[#81BFB7] text-white py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LastMeeting;
