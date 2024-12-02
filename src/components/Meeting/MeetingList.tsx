import React, { useState, useEffect } from "react";
import { MeetingProps } from "./meetingTypes";

const TodayMeeting: React.FC<{ meetings?: MeetingProps[] }> = ({ meetings = [] }) => {
  const today = new Date().toISOString().split("T")[0];
  const [highlightedMeetings, setHighlightedMeetings] = useState<
    { meeting: MeetingProps; highlighted: boolean }[]
  >([]);

  useEffect(() => {
    const checkHighlight = () => {
      const now = new Date();
      const updatedMeetings = meetings
        .filter((meeting) => meeting.date === today) // Lọc các cuộc họp có ngày là hôm nay
        .map((meeting) => {
          const meetingStart = new Date(`${meeting.date}T${meeting.startTime}`);
          const meetingEnd = new Date(`${meeting.date}T${meeting.endTime}`);
          return {
            meeting,
            highlighted: now >= meetingStart && now < meetingEnd, // Highlight nếu đang trong khoảng thời gian
          };
        });

      setHighlightedMeetings(updatedMeetings);
    };

    checkHighlight(); // Kiểm tra ngay lập tức
    const interval = setInterval(checkHighlight, 60000); // Kiểm tra lại mỗi phút

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, [meetings]);

  return (
    <div className="p-4 w-[600px] bg-pink-50 rounded-lg max-w-xs">
      <div className="relative w-[200px] -top-6 px-4 py-2 bg-[#FF90BC] text-white font-bold text-base">
        Today Meetings
      </div>
      {highlightedMeetings.length > 0 ? (
        highlightedMeetings.map(({ meeting, highlighted }, index) => (
          <div key={index} className="flex items-center mb-2">
            <div
              className={`px-3 py-1 rounded-md text-sm font-bold ${
                highlighted ? 'bg-gray-700 text-white' : 'bg-[#FADAE5] text-black'
              }`}
            >
              {meeting.startTime} - {meeting.endTime}
            </div>
            <div
              className={`ml-2 text-sm text-gray-700 ${
                highlighted ? 'font-bold' : 'font-normal'
              }`}
            >
              {meeting.projectName} {/* Tên Project */}
            </div>
          </div>
        ))
      ) : (
        <p>No meetings scheduled for today.</p>
      )}
    </div>
  );
};

export default TodayMeeting;