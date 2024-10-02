import React from "react";
import { CgNotes } from "react-icons/cg";
import { FaCheckDouble } from "react-icons/fa";
import { MdLabelImportant } from "react-icons/md";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const data = [
    {
      title: "All tasks",
      icon: <CgNotes />,
      link: "/",
    },
    {
      title: "Important tasks",
      icon: <MdLabelImportant />,
      link: "/importantTasks",
    },
    {
      title: "Completed tasks",
      icon: <FaCheckDouble />,
      link: "/completedTasks",
    },
    {
      title: "Incompleted tasks",
      icon: <TbNotebookOff />,
      link: "/incompletedTasks",
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-xl font-bold">Task Manager</h2>
        <h4 className="mb-1 text-gray-400">task@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          <Link to={items.link} key={i} className="flex items-center gap-3 my-2 hover:bg-gray-600 p-2 rounded transition-all duration-300">
            {items.icon} {items.title}
          </Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full rounded p-2">Log Out</button>
      </div>
    </>
  );
};

export default Sidebar;
