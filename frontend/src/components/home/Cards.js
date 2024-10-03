import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit, CiHeart } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

const Cards = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/carddata'); 
        const result = await response.json();
        setData(result); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.length > 0 &&
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
              >
                {items.status}
              </button>
              <div className="flex justify-between text-white p-2 w-2/6 text-2xl font-semibold">
                <button>
                  <CiHeart />
                </button>
                <button>
                  <CiEdit />
                </button>
                <button>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      {props.home === "true" && (
        <button
          type="button"
          className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300"
          onClick={() => props.setInputDiv("fixed")}
        >
          <IoIosAddCircleOutline className="text-5xl" />
          <h2 className="text-2xl mt-4">Add Task</h2>
        </button>
      )}
    </div>
  );
};

export default Cards;
