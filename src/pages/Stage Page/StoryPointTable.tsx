import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
interface Storypoint {
  point: number;
  time: number;
}
const StoryPointTable = () => {
  const [storypoints, setStorypoint] = useState<Storypoint[]>([
    {
      point: 1,
      time: 8,
    },
    {
      point: 2,
      time: 8,
    },
    {
      point: 3,
      time: 8,
    },
    {
      point: 4,
      time: 8,
    },
    {
      point: 5,
      time: 8,
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
    const newValue = e.target.value;
    setStorypoint((prevData) =>
      prevData.map((row) =>
        row.point === rowSTT ? { ...row, [key]: newValue } : row
      )
    );
  };
  return (
    // <Table>
    //   <TableHeader>
    //     <TableRow>
    //       <TableHead className="w-1 text-center">Point</TableHead>
    //       <TableHead className="w-4 text-center">Time(hours)</TableHead>
    //     </TableRow>
    //   </TableHeader>
    //   <TableBody>
    //     {storypoints.map((storypoint) => (
    //       <TableRow className="bg-pink-100 pt-5">
    //         <TableCell className="font-medium ">{storypoint.point}</TableCell>
    //         <TableCell>{storypoint.time}</TableCell>
    //       </TableRow>
    //     ))}
    //   </TableBody>
    // </Table>
    <>
      <div className="flex w-[250px] h-[300px] font-medium bg-teal-50 relative ...">
        <div className="absolute -top-5 left-5 w-40  bg-teal-300 text-white...">
          <p className="text-white text-left pl-3">Story Point</p>
        </div>
        <div className="flex flex-col w-full bg-rose-50 place-content-center items-center">
          <div className="w-4/5">
            <div className="flex flex-row text-pink-400 font-semibold px-7 space-x-5 mt-4 mb-3">
              <div>Point</div>
              <div>Time(hours)</div>
            </div>
            {storypoints.map((storypoint) => (
              <div className="flex flex-row px-7 justify-between mb-2 bg-pink-200">
                <div className="rounded-full text-white my-1 bg-teal-300 min-w-[30px] min-h-[30px] flex items-center justify-center">
                  {storypoint.point}
                </div>
                <div
                  className="rounded-lg bg-cyan-100 my-1 w-[50px] min-h-[10px] flex items-center justify-center"
                  onClick={() => handleEdit(storypoint.point, "time")}
                >
                  {editCell.rowId === storypoint.point ? (
                    <Input
                      type="text"
                      value={storypoint.time}
                      onChange={(e) =>
                        handleChange(e, storypoint.point, "time")
                      }
                      onBlur={() => setEditCell({ rowId: null, key: "" })}
                      className=" rounded-lg bg-cyan-100  w-[43px] h-[25px]"
                      autoFocus
                    />
                  ) : (
                    <span className="">{storypoint.time}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryPointTable;
