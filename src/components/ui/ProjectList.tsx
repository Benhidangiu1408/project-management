import { useState } from "react";
import AddBlock from "./AddBlock";

const ProjectBlock = () => {
  // State for project
  const [projects, setProjects] = useState(["Smart Printing", "Software", "Project", "Network", "Assignment"]);

  const [show, setShow] = useState(false);

  const toggleAdd = () => {
    setShow(!show);
  };

  // Function to add a new stage
  const addProject = ({ blockName, startTime, endTime }: any) => {
    setProjects([...projects, `${blockName}`]);
  };

  return (
    <div className="bg-green100 p-4 w-64 rounded-md shadow-md relative mr-3">
      {show && <AddBlock color="green" name="Project" onClose={toggleAdd} onAdd={addProject} />}
      {/* Header */}
      <div className="bg-pink300 text-white text-sm px-4 py-1 absolute top-[-15px]">Project</div>

      {/* Project List */}
      <div className="space-y-2 mt-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-green200 text-gray-700 text-sm font-medium px-4 py-2">
            {project}
          </div>
        ))}

        {/* Add Project Button */}
        <button onClick={toggleAdd} className="w-full bg-green100 text-green300 text-2xl font-bold px-4 border-[3px] border-green200 hover:bg-green200">
          +
        </button>
      </div>
    </div>
  );
};

export default ProjectBlock;
