import TodayMeeting from "@/components/Meeting/MeetingList";

function Homepage() {
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
        <div>
            <TodayMeeting meetings={meetings} />
        </div>
    );
}

export default Homepage;
