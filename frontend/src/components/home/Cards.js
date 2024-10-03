import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Cards = (props) => {
  const [data, setData] = useState([]);
  const { setEditDiv, setEditData, showCompletedOnly, home } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/carddata");
        const result = await response.json();
        const filteredData =
          showCompletedOnly === true
            ? result.filter((task) => task.status === "Complete")
            : showCompletedOnly === false
            ? result.filter((task) => task.status === "In Complete")
            : result;

        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [showCompletedOnly]);

  const handleDeletedata = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/carddata/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setData((prevData) => prevData.filter((item) => item.id !== id));
        toast.success("Task deleted successfully!");
      } else {
        console.error("Error deleting data:", response.statusText);
        toast.error("Error deleting task.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Error deleting task.");
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "In Complete" ? "Complete" : "In Complete";

    const updatedData = {
      ...data.find((item) => item.id === id),
      status: newStatus,
    };

    try {
      const response = await fetch(`http://localhost:3000/carddata/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        setData((prevData) =>
          prevData.map((item) => (item.id === id ? updatedData : item))
        );
        toast.success(`Task marked as ${newStatus}!`);
      } else {
        console.error("Error updating status:", response.statusText);
        toast.error("Error updating task status.");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Error updating task status.");
    }
  };

  const handleEdit = (item) => {
    setEditDiv("fixed");
    setEditData(item);
    toast.info("Editing task...");
  };

  const handleAddTask = () => {
    props.setInputDiv("fixed");
    toast.info("Add Task clicked!"); 
  };

  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-3 gap-4 p-4">
        {data.length > 0 ? (
          data.map((items, i) => (
            <div key={i} className="flex flex-col justify-between bg-gray-800 rounded-sm p-4">
              <div>
                <h3 className="text-xl font-semibold">{items.title}</h3>
                <p className="text-gray-300 my-2">{items.desc}</p>
              </div>
              <div className="flex justify-between items-center w-full mt-4">
                <button
                  className={`${
                    items.status === "In Complete"
                      ? "bg-red-400"
                      : "bg-green-700"
                  } p-2 rounded w-2/6`}
                  onClick={() => handleToggleStatus(items.id, items.status)}
                >
                  {items.status}
                </button>
                <div className="flex justify-between text-white p-2 w-3/12 text-2xl font-semibold">
                  <button onClick={() => handleEdit(items)}>
                    <CiEdit />
                  </button>
                  <button onClick={() => handleDeletedata(items.id)}>
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No tasks found.</p>
        )}

        {home === "true" && showCompletedOnly === null && (
          <button
            type="button"
            className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300"
            onClick={handleAddTask}
          >
            <IoIosAddCircleOutline className="text-5xl" />
            <h2 className="text-2xl mt-4">Add Task</h2>
          </button>
        )}
      </div>
    </>
  );
};

export default Cards;
