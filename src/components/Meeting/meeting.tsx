import React, { useState, useEffect } from "react";
import { MeetingProps } from "./meetingTypes";
import LastMeeting from "./lastmeeting";
import AddMeeting from "./addmeeting";
import { IoLinkSharp } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";

const Meeting: React.FC<{ meetings?: MeetingProps[] }> = ({ meetings = [] }) => {
  const today = new Date().toISOString().split("T")[0];
  const [upcomingMeetings, setUpcomingMeetings] = useState<MeetingProps[]>([]);
  const [previousMeetings, setPreviousMeetings] = useState<MeetingProps[]>([]);
  const [showLastMeetings, setShowLastMeetings] = useState(false);
  const [showAddMeeting, setShowAddMeeting] = useState(false);

  // Function to handle adding a new meeting
  const handleAddMeeting = (newMeeting: MeetingProps) => {
    setUpcomingMeetings((prev) => [...prev, newMeeting]);
  };

  useEffect(() => {
    const UpcomingMeeting = () => {
      const now = new Date();

      // Filter and sort upcoming meetings
      const updatedMeetings = meetings
        .filter((meeting) => {
          const meetingStart = new Date(`${meeting.date}T${meeting.startTime}`);
          const meetingEnd = new Date(`${meeting.date}T${meeting.endTime}`);

          // Return true for upcoming or ongoing meetings
          return (
            meetingStart > now ||
            (meeting.date === today && now < meetingEnd)
          );
        })
        .sort((a, b) => {
          const dateA = new Date(`${a.date}T${a.startTime}`).getTime();
          const dateB = new Date(`${b.date}T${b.startTime}`).getTime();
          return dateA - dateB;
        });

      setUpcomingMeetings(updatedMeetings);
    };

    UpcomingMeeting(); // Run on mount
    const interval = setInterval(UpcomingMeeting, 60000); // Refresh every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, [meetings]);

  const handleViewPreviousMeetings = () => {
    const now = new Date();

    const pastMeetings = meetings
      .filter((meeting) => {
        const meetingEnd = new Date(`${meeting.date}T${meeting.endTime}`);
        return (
          new Date(meeting.date) < new Date(today) ||
          (meeting.date === today && meetingEnd < now)
        );
      })
      .sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.endTime}`).getTime();
        const dateB = new Date(`${b.date}T${b.endTime}`).getTime();
        return dateB - dateA; // Sort descending by end time
      });

    setPreviousMeetings(pastMeetings);
    setShowLastMeetings(true);
  };

  return (
    <div className="flex flex-col px-8 pb-14 w-full bg-rose-50 max-md:px-5 max-md:max-w-full space-y-[10px]">
      {/* Header */}
      <div className="relative w-[200px] -top-6 px-4 py-2 bg-[#81BFB7] text-white font-bold text-base">
        Meeting
      </div>

      {/* Upcoming Meetings */}
      {upcomingMeetings.length > 0 ? (
        upcomingMeetings.map((meeting, index) => (
          <div
            key={index}
            className="w-[400px] bg-white p-4 rounded-lg shadow-md border border-gray-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-xl text-black">Next meeting</h4>
              <div className="flex items-center gap-2">
                <IoLinkSharp className="text-xl text-[#81BFB7] cursor-pointer" />
                <SlNotebook className="text-xl text-[#81BFB7] cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg font-bold text-gray-800">
                {meeting.startTime} ~ {meeting.endTime}
              </span>
              <span className="text-sm text-gray-600">
                {new Date(meeting.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No upcoming meetings.</p>
      )}

      {/* Buttons */}
      <button
        onClick={handleViewPreviousMeetings}
        className="w-[400px] h-10 bg-[#f3a2be]/20 py-2 mb-2 text-sm font-bold text-[#e97c98] border-none rounded"
      >
        View previous meeting
      </button>

      {showLastMeetings && (
        <LastMeeting
          previousMeetings={previousMeetings}
          onClose={() => setShowLastMeetings(false)}
        />
      )}

      <button
        onClick={() => setShowAddMeeting(true)}
        className="w-[400px] h-10 bg-[#f3a2be]/20 py-2 text-sm font-bold text-[#e97c98] border-none rounded"
      >
        Add meeting
      </button>

      {showAddMeeting && (
        <AddMeeting
          onClose={() => setShowAddMeeting(false)}
          onAddMeeting={handleAddMeeting} //Lỗi ở đây
        />
      )}
    </div>
  );
};

export default Meeting;
