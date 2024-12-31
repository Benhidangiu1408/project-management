import React, { useState } from "react";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    setTasks([
      ...tasks,
      { id: Date.now(), name: newTask.trim(), completed: false },
    ]);
    setNewTask("");
  };

  // Toggle task completion
  const toggleCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-4 w-[600px] bg-pink100 rounded-lg max-w-xs">
      <div className="relative w-[200px] -top-6 px-4 py-2 bg-[#FF90BC] text-white font-bold text-base">
        To do list
      </div>
      {/* Input and Add Button */}
      <div className="flex items-center mb-4 space-x-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 border border-[#FADAE5] bg-[#FADAE5] rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF90BC]"
        />
        <button
          onClick={addTask}
          className="bg-[#FF90BC] text-white px-4 py-2 rounded-md hover:bg-[#FADAE5]"
        >
          Add
        </button>
      </div>
      {/* Task List */}
      <ul className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-4 py-2"
            >
              <div className="flex items-center space-x-3">
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompletion(task.id)}
                  className="form-checkbox h-5 w-5 text-[#FF90BC] border-gray-300 rounded"
                />
                {/* Task Name */}
                <span
                  className={`text-gray-700 ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.name}
                </span>
              </div>
              {/* Delete Button */}
              <button
                onClick={() => deleteTask(task.id)}
                className="text-pink200 hover:text-pink300"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No tasks added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default ToDoList;
