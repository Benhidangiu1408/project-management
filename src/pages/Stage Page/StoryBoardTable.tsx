"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

interface Task {
  stt: number;
  story: string;
  point: number | null;
  pic: string;
  deadline: Date | null;
}
const StoryBoardTable = () => {
  const [tasks, setTask] = useState<Task[]>([
    {
      stt: 1,
      story: "mm",
      point: null,
      pic: "",
      deadline: new Date("2024-01-01"),
    },
    {
      stt: 2,
      story: "mm",
      point: null,
      pic: "",
      deadline: new Date("2024-01-01"),
    },
    {
      stt: 3,
      story: "mm",
      point: null,
      pic: "",
      deadline: new Date("2024-01-01"),
    },
    {
      stt: 4,
      story: "mm",
      point: null,
      pic: "",
      deadline: new Date("2024-01-01"),
    },
    {
      stt: 5,
      story: "mm",
      point: 3,
      pic: "aa",
      deadline: new Date("2024-01-01"),
    },
  ]);
  const [editCell, setEditCell] = useState({ rowId: null, key: "" });

  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleEdit = (rowId: any, key: any) => {
    setEditCell({ rowId, key });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowSTT: any,
    key: any
  ) => {
    // const newValue = e.target.value;
    const newValue =
      key === "deadline" ? new Date(e.target.value) : e.target.value;
    setTask((prevData) =>
      prevData.map((row) =>
        row.stt === rowSTT ? { ...row, [key]: newValue } : row
      )
    );
  };
  return (
    <div className="w-5/6">
      <Table>
        <TableHeader className="bg-pink-300">
          <TableRow>
            <TableHead className=" text-white text-center w-[5px]">
              STT
            </TableHead>
            <TableHead className="w-[300px] text-white text-center">
              Story
            </TableHead>
            <TableHead className="text-white text-center w-[10px]">
              Point
            </TableHead>
            <TableHead className=" text-white text-center w-[70px]">
              Pic
            </TableHead>
            <TableHead className=" text-white text-center w-[150px]">
              Deadline
            </TableHead>
            <TableHead className="t text-white text-center w-[5px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow> */}
          {tasks.map((task) => (
            <TableRow
              key={task.stt}
              className={task.stt % 2 === 0 ? "bg-emerald-100" : "bg-teal-50"}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <TableCell className="font-medium">{task.stt}</TableCell>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex flex-row">
                    <span>+</span>
                    <Separator orientation="vertical" />
                    <div>-</div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <TableCell
                className="font-medium text-left"
                onClick={() => handleEdit(task.stt, "story")}
              >
                {editCell.rowId === task.stt && editCell.key === "story" ? (
                  <Input
                    type="text"
                    value={task.story}
                    onChange={(e) => handleChange(e, task.stt, "story")}
                    onBlur={() => setEditCell({ rowId: null, key: "" })}
                    className="border rounded h-4"
                    autoFocus
                  />
                ) : (
                  <span className="">{task.story}</span>
                )}
              </TableCell>
              <TableCell
                className="font-medium "
                onClick={() => handleEdit(task.stt, "point")}
              >
                {editCell.rowId === task.stt && editCell.key === "point" ? (
                  <Input
                    type="text"
                    value={task.point!}
                    onChange={(e) => handleChange(e, task.stt, "point")}
                    onBlur={() => setEditCell({ rowId: null, key: "" })}
                    className="border rounded h-4"
                    autoFocus
                  />
                ) : (
                  <span> {task.point === null ? "" : task.point}</span>
                )}
              </TableCell>
              <TableCell
                className="font-medium "
                onClick={() => handleEdit(task.stt, "pic")}
              >
                {editCell.rowId === task.stt && editCell.key === "pic" ? (
                  <Input
                    type="text"
                    value={task.pic!}
                    onChange={(e) => handleChange(e, task.stt, "pic")}
                    onBlur={() => setEditCell({ rowId: null, key: "" })}
                    className="border rounded h-4"
                    autoFocus
                  />
                ) : (
                  <span className=""> {task.pic}</span>
                )}
              </TableCell>
              <TableCell
                className=" font-medium"
                onClick={() => handleEdit(task.stt, "deadline")}
              >
                {editCell.rowId === task.stt && editCell.key === "deadline" ? (
                  <Input
                    type="text"
                    value={
                      task.deadline
                        ? task.deadline.toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) => handleChange(e, task.stt, "deadline")}
                    onBlur={() => setEditCell({ rowId: null, key: "" })}
                    className="border rounded h-4 "
                    autoFocus
                  />
                ) : (
                  <span>
                    {" "}
                    {task.deadline
                      ? task.deadline.toISOString().split("T")[0]
                      : ""}
                  </span>
                )}
              </TableCell>
              <TableCell>
                <input
                  type="checkbox"
                  // id="vehicle1"
                  // name="vehicle1"
                  // value="Bike"
                  style={{ backgroundColor: "white" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StoryBoardTable;
