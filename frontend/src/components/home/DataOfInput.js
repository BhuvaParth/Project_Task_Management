import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 

const DataOfInput = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const newData = { title, desc, status: "In Complete" }; 

    try {
      const response = await fetch("http://localhost:3000/carddata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        toast.success("Data added successfully!"); 
        setTitle("");
        setDesc("");
        props.setInputDiv("hidden");
      } else {
        const errorText = await response.text(); 
        toast.error(`Error adding data: ${errorText}`);
        console.error("Error adding data:", response.statusText);
      }
    } catch (error) {
      toast.error(`Error adding data: ${error.message}`); 
      console.error("Error adding data:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={`${props.InputDiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>
      <div className={`${props.InputDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className="w-2/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button className="text-2xl" onClick={() => props.setInputDiv("hidden")}>
              <RxCross2 />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="px-3 py-2 bg-blue-400 rounded text-black font-semibold text-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DataOfInput;
