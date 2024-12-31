import React, { useState } from "react";
import { MeetingProps } from "./meetingTypes";

interface AddMeetingProps {
  onClose: () => void; // Hàm để đóng AddMeeting
  onAddMeeting: (meeting: MeetingProps) => void; // Hàm để thêm cuộc họp mới
}

const AddMeeting: React.FC<AddMeetingProps> = ({ onClose, onAddMeeting }) => {
  const [linkMeeting, setLinkMeeting] = useState("");
  const [linkMeetingNote, setLinkMeetingNote] = useState("");
  const [projectName, setProjectName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState("");

  const handleAddMeeting = () => {
    if (
      !linkMeeting.trim() ||
      !date.trim() ||
      !startTime.trim() ||
      !endTime.trim() ||
      !projectName.trim()
    ) {
      alert("Please fill in all fields!");
      return;
    }

    const start = new Date(`${date}T${startTime}`);
    const end = new Date(`${date}T${endTime}`);

    if (end <= start) {
      alert("End time must be after start time!");
      return;
    }

    onAddMeeting({
      date,
      startTime,
      endTime,
      linkMeeting,
      linkMeetingNote,
      projectName,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
  <div className="bg-white w-[600px] p-8 rounded-lg shadow-lg relative">
    {/* Header */}
    <div className="flex justify-center items-center">
    <div className="text-center w-[200px] text-lg font-bold bg-[#FF90BC] text-white py-2 rounded-md">
      ADD MEETING
    </div>
    </div>

    {/* Form */}
    <div className="space-y-6 mt-6">
      {/* Link Input */}
      <div className="flex  items-center space-x-4 space-y-2">
        <label className="text-gray-700 w-[80px] font-bold text-left">Link</label>
        <input
          type="text"
          value={linkMeeting}
          onChange={(e) => setLinkMeeting(e.target.value)}
          placeholder="Meeting Link"
          className="w-full border border-[#FADAE5] bg-[#FADAE5] rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF90BC] px-3 py-2"
        />
      </div>

      {/* Note Link Input */}
      <div className="flex  items-center space-x-4 space-y-2">
        <label className="text-gray-700 w-[80px] font-bold text-left">Note</label>
        <input
          type="text"
          value={linkMeetingNote}
          onChange={(e) => setLinkMeetingNote(e.target.value)}
          placeholder="Link to meeting notes"
          className="w-full border border-[#FADAE5] bg-[#FADAE5] rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF90BC] px-3 py-2"
        />
      </div>

      {/* Project Input */}
      <div className="flex  items-center space-x-4 space-y-2">
        <label className="text-gray-700 w-[80px] font-bold text-left">Project</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project Name"
          className="w-full border border-[#FADAE5] bg-[#FADAE5] rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF90BC] px-3 py-2"
        />
      </div>

      {/* Date Input */}
      <div className="flex  items-center space-x-4 space-y-2">
        <label className="text-gray-700 w-[80px] font-bold text-left">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-[#FADAE5] bg-[#FADAE5] rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF90BC] px-3 py-2"
        />
      </div>

      {/* Time Inputs */}
      <div className="flex  items-center space-x-4 space-y-2">
        <label className="text-gray-700 w-[80px] font-bold text-left">Time</label>
        <div className="flex items-center space-x-4">
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full border border-[#FADAE5] bg-[#FADAE5] rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF90BC] px-3 py-2"
          />
          <span className="text-gray-500">~</span>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border border-[#FADAE5] bg-[#FADAE5] rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF90BC] px-3 py-2"
          />
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-center space-x-6 mt-8">
      <button
        onClick={onClose}
        className="text-[#FF90BC] bg-white border border-[#FADAE5] w-[150px] py-2 rounded-md hover:bg-pink-100"
      >
        Cancel
      </button>
      <button
        onClick={handleAddMeeting}
        className="bg-[#FF90BC] text-white w-[150px] py-2 rounded-md hover:bg-[#FADAE5]"
      >
        ADD
      </button>
    </div>
  </div>
</div>

  );
};

export default AddMeeting;
