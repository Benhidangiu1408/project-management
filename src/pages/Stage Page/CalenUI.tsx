// "use client";

// import * as React from "react";
// import { Calendar } from "@/components/ui/calendar";

// export function CalendarDemo() {
//   const [date, setDate] = React.useState<Date | undefined>(new Date());

//   // Example task data
//   const tasks: { [key: string]: string[] } = {
//     "2024-01-01": ["New Year's Celebration", "Send greetings to friends"],
//     "2024-01-15": ["Project Deadline", "Team Meeting at 3 PM"],
//     "2024-02-14": ["Valentine's Day Dinner"],
//   };

//   // Format date to string (YYYY-MM-DD) for lookup
//   const formatDate = (date: Date | undefined) =>
//     date ? date.toISOString().split("T")[0] : "";

//   // Get tasks for the selected date
//   const selectedDateTasks = tasks[formatDate(date)] || [];

//   return (
//     <div className="p-4">
//       <Calendar
//         mode="single"
//         selected={date}
//         onSelect={setDate}
//         className="rounded-md border shadow"
//       />
//       <div className="mt-4">
//         <h3 className="text-lg font-semibold">
//           Tasks for {date?.toLocaleDateString() || "Selected Date"}:
//         </h3>
//         {selectedDateTasks.length > 0 ? (
//           <ul className="mt-2 list-disc pl-5">
//             {selectedDateTasks.map((task, index) => (
//               <li key={index} className="text-gray-700">
//                 {task}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500 mt-2">No tasks for this date.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";

// import * as React from "react";
// import { Calendar } from "@/components/ui/calendar";

// export function CalendarDemo() {
//   const [date, setDate] = React.useState<Date | undefined>(new Date());

//   // Example task data
//   const tasks: { [key: string]: string[] } = {
//     "2024-01-01": ["New Year's Celebration"],
//     "2024-01-15": ["Project Deadline"],
//     "2024-02-14": ["Valentine's Day Dinner"],
//   };

//   // Format date to string (YYYY-MM-DD) for lookup
//   const formatDate = (date: Date | undefined) =>
//     date ? date.toISOString().split("T")[0] : "";

//   // Check if a date has tasks
//   const hasTasks = (currentDate: Date) => {
//     const formattedDate = formatDate(currentDate);
//     return tasks[formattedDate] || [];
//   };

//   return (
//     <div className="p-4">
//       <Calendar
//         mode="single"
//         selected={date}
//         onSelect={setDate}
//         className="rounded-md border shadow"
//         renderDay={(day) => {
//           const taskList = hasTasks(day);
//           const isSelected = formatDate(day) === formatDate(date);

//           return (
//             <div
//               className={`flex flex-col items-center justify-center w-24 h-24 rounded-md ${
//                 taskList.length > 0
//                   ? "bg-blue-100 border border-blue-500 text-blue-700"
//                   : ""
//               } ${isSelected ? "bg-orange-400 text-white" : ""}`}
//             >
//               <span className="text-lg font-bold">{day.getDate()}</span>
//               {taskList.length > 0 && (
//                 <span className="text-xs mt-1 text-center">{taskList[0]}</span>
//               )}
//             </div>
//           );
//         }}
//       />
//     </div>
//   );
// }

import React, { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

// Example task data
const tasks: { [key: string]: string[] } = {
  "2024-01-01": ["New Year's Celebration", "Project Deadline", "Project Deadline", "Project Deadline", "Project Deadline"],
  "2024-01-15": ["Project Deadline", "New Year's Celebration"],
  "2024-02-14": ["Valentine's Day Dinner"],
};

const frameworks = Array.from({ length: 2050 - 2019 + 1 }, (_, i) => {
  const year = 2019 + i;
  return { value: year.toString(), label: year.toString() };
});

// Utility to format date as YYYY-MM-DD
const formatDate = (date: Date) => date.toISOString().split("T")[0];

// Generate the days in a month
const getDaysInMonth = (year: number, month: number) => {
  const days = [];
  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const CustomCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const days = getDaysInMonth(year, month);

  // Handle year change
  const handleYearChange = (newYearInput: string) => {
    const newYear = parseInt(newYearInput, 10);
    setCurrentDate(new Date(newYear, month, 1));
  };

  // Navigate to the previous month
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Navigate to the next month
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <>
      <div className="flex justify-start w-[1000px]">
        <div className="mr-auto py-2">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="default" role="combobox" aria-expanded={open} className="w-[200px] justify-between border border-green200 bg-green100">
                {value ? frameworks.find((framework) => framework.value === value)?.label : "Select year..."}
                <ChevronsUpDown className="opacity-50 text-teal-500" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 bg-green200">
              <Command>
                <CommandInput placeholder="Search year..." className="h-9 " />
                <CommandList>
                  <CommandEmpty>No year found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                          handleYearChange(currentValue === value ? "" : currentValue);
                        }}
                      >
                        {framework.label}
                        <Check className={cn("ml-auto", value === framework.value ? "opacity-100" : "opacity-0")} />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="absolute left-[600px] items-center justify-center w-[300px] h-[50px] mb-35 bg-green300 text-white...">
          <p className="text-white text-center items-center justify-center text-3xl pt-1">Calendar</p>
        </div>
      </div>
      <div className="p-4 bg-pink100">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={handlePrevMonth} className="px-4 py-2 bg-slate-100 rounded-md hover:bg-slate-200">
            Previous
          </button>
          <h2 className="text-lg font-semibold">
            {currentDate.toLocaleString("default", { month: "long" })} {year}
          </h2>
          <button onClick={handleNextMonth} className="px-4 py-2 bg-slate-100 rounded-md hover:bg-slate-200">
            Next
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-bold text-black bg-slate-100 mb-2 ">
              {day}
            </div>
          ))}

          {days.map((day) => {
            const formattedDate = formatDate(day);
            const taskList = tasks[formattedDate] || [];

            return (
              <div
                key={formattedDate}
                onClick={() => setSelectedDate(day)}
                className={`relative flex flex-col items-center justify-center p-2 w-[145px] min-h-[120px] border rounded-md   ${
                  taskList.length > 0 ? " text-blue-700 border-violet-950" : " border-violet-950"
                } ${selectedDate?.toDateString() === day.toDateString() ? "ring-2 ring-orange-400 " : ""} cursor-pointer`}
              >
                <span className="text-center absolute top-2 left-2 text-white font-bold border rounded-full inline-block w-7 bg-pink300 ">{day.getDate()}</span>
                {taskList.length > 0 && (
                  <ul className="mt-1 text-xs text-center text-black">
                    {taskList.map((task, index) => (
                      <li key={index}>
                        <Badge className={`bg-white text-black truncate whitespace-nowrap  overflow-hidden w-[130px] block mb-2 ${index === 0 ? "mt-7" : ""}`}>
                          {task}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
