import TodayMeeting from "@/components/Meeting/MeetingList";
import GanttChart from "../components/ui/BarClalendar";
import ProjectBlock from "@/components/ui/ProjectList";
import TodayTaskDeadline from "@/components/Task/todaytaskdeadline";
import ToDoList from "@/components/Task/todolist";


function Homepage() {
  const tasks = [
  {
    date: "2024-12-31",
    endTime: "15:30",
    projectName: "Project A",
    taskName: "Finish documentation",
  },
  {
    date: "2024-12-31",
    endTime: "17:00",
    projectName: "Project B",
    taskName: "Review pull request",
  },
];
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

  return (

    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-row m-8 justify-between">
      <TodayMeeting meetings={meetings} />
      <TodayTaskDeadline tasks={tasks} />
      <ToDoList />
      </div>
      <div className="flex m-8 justify-between">
        <ProjectBlock />
        <GanttChart color="pink" />
      </div>

    </div>
  );
}

export default Homepage;
