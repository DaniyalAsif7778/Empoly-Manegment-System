import React from "react";

function AdminForm() {
  return (
    
      <div className="h-max   w-full bg-surface  mt-10">
        <form
          action=""
          className="   flex   flex-col justify-start sm:flex-row  items-between "
        >
          <div className=" w-full p-2 sm:w-1/2">
            <div className=" w-5/5  sm:w-4/5 flex flex-col items-start justify-center gap-2 p-3.5 ">
              <label htmlFor="task-tittle" className="text-text-primary">
                Task Tittle :
              </label>
              <input
                id="task-title"
                name="task-title"
                type="text"
                placeholder="Create Tittle"
                className="text-text-disabled border outline-none w-4/4 p-1 border-border-secondary"
              />
            </div>
            <div className=" w-5/5  sm:w-4/5 flex flex-col items-start justify-center gap-2 p-3.5 ">
              <label htmlFor="date" className="text-text-primary">
                Date :
              </label>
              <input
                id="  date"
                name=" date"
                type="Date"
                placeholder="Create Tittle"
                className="text-text-disabled border outline-none w-4/4 p-1 border-border-secondary"
              />
            </div>
            <div className=" w-5/5  sm:w-4/5 flex flex-col items-start justify-center gap-2 p-3.5 ">
              <label htmlFor="asinge-to" className="text-text-primary">
                Asinge to :
              </label>
              <input
                id=" asinge-to  "
                name=" asinge-to  "
                type="text"
                placeholder="Create Tittle"
                className="text-text-disabled border outline-none  w-full p-1 border-border-secondary"
              />
            </div>
            <div className=" w-5/5  sm:w-4/5 flex flex-col items-start justify-center gap-2 p-3.5 ">
              <label htmlFor="category " className="text-text-primary">
                Category :
              </label>
              <input
                id=" category"
                name="  category"
                type="text"
                placeholder="Create Tittle"
                className="text-text-disabled border outline-none w-4/4 p-1 border-border-secondary"
              />
            </div>
          </div>
          <div className=" w-full  sm:w-1/2  p-2 ">
            <div className="w-full   h-full flex flex-col  items-start justify-end">
              <div className=" w-full  flex flex-col items-start  sm:items-center sm:justify-between  gap-2 p-4  ">
                <label htmlFor="description " className="text-text-primary  ">
                  Description :
                </label>
                <textarea
                  name="description"
                  id="description"
                  
                  className="w-4/5 text-text-secondary outline-none rounded border border-border"
                ></textarea>
              </div>
              <div className=" w-full  flex  justify-start p-4">
                <button className=  "   text-text-primary p-2 w-full   bg-primary">
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    
  );
}

export default AdminForm;
