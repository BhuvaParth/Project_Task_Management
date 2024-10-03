import React from "react";
import { CgNotes } from "react-icons/cg";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate =useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    props.onLogout(); 
    navigate("/login"); 
  };

  const data = [
    {
      title: "All tasks",
      icon: <CgNotes />,
      link: "/",
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
        {data.map((items, i) => (
          <Link to={items.link} key={i} className="flex items-center gap-3 my-2 hover:bg-gray-600 p-2 rounded transition-all duration-300">
            {items.icon} {items.title}
          </Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full rounded p-2"  onClick={handleLogout}>Log Out</button>
      </div>
    </>
  );
};

export default Sidebar;
