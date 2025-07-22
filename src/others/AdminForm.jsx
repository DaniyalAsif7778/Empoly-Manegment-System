import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContex";

function AdminForm() {
  const { addTask } = useAuthContext();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const taskHandler = (e) => {
    e.preventDefault();

    // You might also validate here:
    if (!title.trim() || !date.trim() || !assignedTo.trim() || !category.trim()) {
      alert("Please fill all required fields");
      return;
    }

    addTask({
       
      title: title.trim(),
      date: date.trim(),
      assignedTo: assignedTo.trim(), // keep your existing key or rename in context
      category: category.trim(),
      description: description.trim(),
    });

    // Reset form
    setTitle("");
    setDate("");
    setAssignedTo("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="h-max w-full bg-surface mt-10">
      <form
        onSubmit={taskHandler}
        className="flex flex-col justify-start sm:flex-row items-between"
      >
        <div className="w-full p-2 sm:w-1/2">
          <div className="w-5/5 sm:w-4/5 flex flex-col items-start justify-center gap-2 p-3.5">
            <label htmlFor="task-title" className="text-text-primary">
              Task Title:
            </label>
            <input
              id="task-title"
              name="task-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Create Title"
              className="text-text-disabled border outline-none w-full p-1 border-border-secondary"
            />
          </div>

          <div className="w-5/5 sm:w-4/5 flex flex-col items-start justify-center gap-2 p-3.5">
            <label htmlFor="date" className="text-text-primary">
              Date:
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-text-disabled border outline-none w-full p-1 border-border-secondary"
            />
          </div>

          <div className="w-5/5 sm:w-4/5 flex flex-col items-start justify-center gap-2 p-3.5">
            <label htmlFor="assign-to" className="text-text-primary">
              Assign To:
            </label>
            <input
              id="assign-to"
              name="assign-to"
              type="text"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              placeholder="Employee username"
              className="text-text-disabled border outline-none w-full p-1 border-border-secondary"
            />
          </div>

          <div className="w-5/5 sm:w-4/5 flex flex-col items-start justify-center gap-2 p-3.5">
            <label htmlFor="category" className="text-text-primary">
              Category:
            </label>
            <input
              id="category"
              name="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              className="text-text-disabled border outline-none w-full p-1 border-border-secondary"
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2 p-2">
          <div className="w-full h-full flex flex-col items-start justify-end">
            <div className="w-full flex flex-col items-start sm:items-center sm:justify-between gap-2 p-4">
              <label htmlFor="description" className="text-text-primary">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-4/5 text-text-secondary outline-none rounded border border-border"
              ></textarea>
            </div>
            <div className="w-full flex justify-start p-4">
              <button
                type="submit"
                className="text-text-primary p-2 w-full bg-primary"
              >
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
