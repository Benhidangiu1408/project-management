import StoryBoard from "./StoryBoard";
import Report from "../../components/Report/Report-table";
import Meeting from "@/components/Meeting/meeting";

const meetings = [
  {
    date: "2024-12-02",
    startTime: "12:00",
    endTime: "15:00",
    linkMeeting: "https://zoom.us/meeting123",
    linkMeetingNote: "https://docs.meetingnote.com/123",
    projectName: "Project Alpha", // Tên Project
  },
  {
    date: "2024-12-02",
    startTime: "15:00",
    endTime: "16:00",
    linkMeeting: "https://zoom.us/meeting125",
    linkMeetingNote: "https://docs.meetingnote.com/124",
    projectName: "Project Beta",
  },
  {
    date: "2024-12-02",
    startTime: "17:00",
    endTime: "17:30",
    linkMeeting: "https://zoom.us/meeting124",
    linkMeetingNote: "https://docs.meetingnote.com/124",
    projectName: "Project Beta",
  },

  {
    date: "2024-12-03",
    startTime: "09:00",
    endTime: "10:00",
    linkMeeting: "https://zoom.us/meeting125",
    linkMeetingNote: "https://docs.meetingnote.com/125",
    projectName: "Project Gamma",
  },
];

function Stage() {
  return (
    <div>
      <div className="flex pt-10 h-[500px]">
        <Report />
        <div className="pt-[30px] z-30">
          <Meeting meetings={meetings} />
        </div>
      </div>
      <div className="z-0">
        <StoryBoard />
      </div>
    </div>
  );
}

export default Stage;
