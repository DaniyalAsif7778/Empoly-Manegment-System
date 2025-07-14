import React from "react";

function TasksList() {
  return (
    <>
      <div   className="Tasks  w-full h-[300px] p-4 mt-10 rounded-lg border border-border bg-surface overflow-scroll ">
        <div className="Task  bg-navbar rounded-md">
          <div className="flex flex-row  justify-between items-center px-4 py-2">
            <span className="bg-primary px-2 py-1">High</span>
            <h2 className="text-base">02 Feb 2025</h2>
          </div>

          <div className="flex flex-col items-start justify-center p-4  ">
            <h4 className="text-xl text-text-primary ">Make a Youtube video</h4>
            <p className="text-text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas eius similique.</p>
          </div>
        </div>
        <div className="Task  bg-navbar rounded-md">
          <div className="flex flex-row  justify-between items-center px-4 py-2">
            <span className="bg-primary px-2 py-1">High</span>
            <h2 className="text-base">02 Feb 2025</h2>
          </div>

          <div className="flex flex-col items-start justify-center p-4  ">
            <h4 className="text-xl text-text-primary ">Make a Youtube video</h4>
            <p className="text-text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas eius similique.</p>
          </div>
        </div>
        <div className="Task  bg-navbar rounded-md">
          <div className="flex flex-row  justify-between items-center px-4 py-2">
            <span className="bg-primary px-2 py-1">High</span>
            <h2 className="text-base">02 Feb 2025</h2>
          </div>

          <div className="flex flex-col items-start justify-center p-4  ">
            <h4 className="text-xl text-text-primary ">Make a Youtube video</h4>
            <p className="text-text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas eius similique.</p>
          </div>
        </div>
        <div className="Task  bg-navbar rounded-md">
          <div className="flex flex-row  justify-between items-center px-4 py-2">
            <span className="bg-primary px-2 py-1">High</span>
            <h2 className="text-base">02 Feb 2025</h2>
          </div>

          <div className="flex flex-col items-start justify-center p-4  ">
            <h4 className="text-xl text-text-primary ">Make a Youtube video</h4>
            <p className="text-text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas eius similique.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TasksList;
