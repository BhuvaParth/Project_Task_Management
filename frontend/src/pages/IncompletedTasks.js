// import React from 'react'
// import Cards from '../components/home/Cards'

// const IncompletedTasks = () => {
//   return (
//     <>
//       <div>
//         <Cards home={'false'} />
//       </div>
//     </>
//   )
// }

// export default IncompletedTasks
import React from "react";
import Cards from "../components/home/Cards";

const IncompletedTasks = () => {
  return (
    <>
      <div>
        <Cards showCompletedOnly={false} />
      </div>
    </>
  );
};

export default IncompletedTasks;
