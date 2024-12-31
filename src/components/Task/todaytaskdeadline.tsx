import React, { useState, useEffect } from "react";

interface TaskProps {
  date: string; // Deadline date
  endTime: string; // Deadline time
  projectName: string; // Task's project name
  taskName: string; // Name of the task
}

const TodayTaskDeadline: React.FC<{ tasks?: TaskProps[] }> = ({ tasks = [] }) => {
  const today = new Date().toISOString().split("T")[0];
  const [highlightedTasks, setHighlightedTasks] = useState<
    { task: TaskProps; completed: boolean }[]
  >([]);

  useEffect(() => {
    // Initialize task list with "completed" status set to false
    const initialTasks = tasks
      .filter((task) => task.date === today)
      .map((task) => ({ task, completed: false }));
    setHighlightedTasks(initialTasks);
  }, [tasks]);

  const toggleTaskCompletion = (index: number) => {
    // Toggle the "completed" status of a task
    setHighlightedTasks((prevTasks) =>
      prevTasks.map((item, idx) =>
        idx === index ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <div className="p-4 w-[600px] bg-[#F0F9F8] rounded-lg max-w-xs">
      <div className="relative w-[200px] -top-6 px-4 py-2 bg-[#81BFB7] text-white font-bold text-base">
        Today's Deadlines
      </div>
      {highlightedTasks.length > 0 ? (
        highlightedTasks.map(({ task, completed }, index) => (
          <div key={index} className="flex items-center space-x-4 mb-2">
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleTaskCompletion(index)}
              className="form-checkbox h-5 w-5 text-[#FF90BC] border-gray-300 rounded"
            />
            {/* Time Block */}
            <div
              className={`px-3 py-1 rounded-md text-sm font-bold ${
                completed ? "bg-gray-300 text-gray-500" : "bg-[#D8F3E9] text-black"
              }`}
            >
              {task.endTime}
            </div>
            {/* Task Name */}
            <div
              className={`text-sm ${
                completed ? "line-through text-gray-400" : "text-gray-700"
              }`}
            >
              {task.taskName}
            </div>
          </div>
        ))
      ) : (
        <p>No task deadlines for today.</p>
      )}
    </div>
  );
};

export default TodayTaskDeadline;