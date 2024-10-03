// import React, { useState } from "react";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import Cards from "../components/home/Cards";
// import DataOfInput from "../components/home/DataOfInput";
// import { EditData } from "../components/home/EditData";

// const AllTasks = () => {
//   const [InputDiv, setInputDiv] = useState("hidden");
//   const [EditDiv, setEditDiv] = useState("hidden");
//   const [editData, setEditData] = useState(null);

//   return (
//     <>
//       <div className="h-[600px] overflow-x-hidden">
//         <div className="flex justify-end w-full px-4 py-2">
//           <button onClick={() => setInputDiv("fixed")}>
//             <IoIosAddCircleOutline className="text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300" />
//           </button>
//         </div>
//         <Cards home={"true"} setInputDiv={setInputDiv} setEditDiv={setEditDiv} setEditData={setEditData} />
//       </div>

//       <DataOfInput InputDiv={InputDiv} setInputDiv={setInputDiv} />

//       <EditData EditDiv={EditDiv} setEditDiv={setEditDiv} editData={editData} />
//     </>
//   );
// };

// export default AllTasks;


import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Cards from "../components/home/Cards";
import DataOfInput from "../components/home/DataOfInput";
import { EditData } from "../components/home/EditData";

const AllTasks = () => {
  const [InputDiv, setInputDiv] = useState("hidden");
  const [EditDiv, setEditDiv] = useState("hidden");
  const [editData, setEditData] = useState(null);

  return (
    <>
      <div className="h-[600px] overflow-x-hidden">
        <div className="flex justify-end w-full px-4 py-2">
          <button onClick={() => setInputDiv("fixed")}>
            <IoIosAddCircleOutline className="text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300" />
          </button>
        </div>
        <Cards home={"true"} setInputDiv={setInputDiv} setEditDiv={setEditDiv} setEditData={setEditData} showCompletedOnly={null} />
      </div>
      <DataOfInput InputDiv={InputDiv} setInputDiv={setInputDiv} />
      <EditData EditDiv={EditDiv} setEditDiv={setEditDiv} editData={editData} />
    </>
  );
};

export default AllTasks;
