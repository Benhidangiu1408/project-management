import GanttChart from "@/components/ui/BarClalendar";
import StoryPointTable from "./Stage Page/StoryPointTable";
import StageBlock from "@/components/ui/StageList";

function Project() {
  return (
    <div>
      <div className="flex justify-around mb-10">
        <StoryPointTable />
        <StageBlock />
      </div>
      <GanttChart color="green" />
    </div>
  );
}

export default Project;
