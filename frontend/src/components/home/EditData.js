import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

export const EditData = (props) => {
  const { editData, setEditDiv } = props; 
  const [title, setTitle] = useState(editData?.title || "");
  const [desc, setDesc] = useState(editData?.desc || "");
  const [status, setStatus] = useState(editData?.status || "In Complete");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    setTitle(editData?.title || "");
    setDesc(editData?.desc || "");
    setStatus(editData?.status || "In Complete");
  }, [editData]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedData = { title, desc, status };
    try {
      const response = await fetch(
        `http://localhost:3000/carddata/${editData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        setStatusMessage("Data updated successfully!");
        setEditDiv("hidden");
      } else {
        setStatusMessage("Error updating data");
      }
    } catch (error) {
      console.error("Error updating data:", error);
      setStatusMessage("Error updating data");
    }
  };

  return (
    <>
      <div
        className={`${props.EditDiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}
      ></div>
      <div
        className={`${props.EditDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="w-2/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button className="text-2xl" onClick={() => setEditDiv("hidden")}>
              <RxCross2 />
            </button>
          </div>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded w-full bg-gray-700 px-3 py-2 my-2"
            />
            <textarea
              name="desc"
              cols="30"
              rows="10"
              placeholder="Description.."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="rounded w-full bg-gray-700 px-3 py-2 my-3"
            ></textarea>
            <button
              type="submit"
              className="px-3 py-2 bg-blue-400 rounded text-black font-semibold text-xl"
            >
              Update
            </button>
          </form>
          {statusMessage && (
            <div className="mt-3 text-center text-white">{statusMessage}</div>
          )}
        </div>
      </div>
    </>
  );
};
