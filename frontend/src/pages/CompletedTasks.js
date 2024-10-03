import React from "react";
import Cards from "../components/home/Cards";

const CompletedTasks = () => {
  return (
    <div>
      <h1 className="text-2xl text-white p-4">Completed Tasks</h1>
      <Cards showCompletedOnly={true} />
    </div>
  );
};

export default CompletedTasks;
