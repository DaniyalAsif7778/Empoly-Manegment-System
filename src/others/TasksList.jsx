import React from "react";
import { useAuthContext } from "../context/AuthContex";
import { CompletedButton, FailedButton, WorkingButtons } from "../imports";
import { toast } from "react-hot-toast";

function TasksList() {
  const { currentuser, statusUpdater } = useAuthContext();

  return (
    <div className="Tasks w-full h-[500px] p-4 mt-10 rounded-lg border pointer-events-auto border-border bg-surface overflow-scroll ">
      {currentuser.tasks.map((task, index) => {
        return (
          <div
            key={task.id}
            onClick={(e) => {
              if (e.target.classList.contains("working-btn")) {
                statusUpdater("Working", index);
                toast.success("Task marked as Working 🛠️");
                window.dispatchEvent(new Event("task-updated")); // 🔥
              }

              if (e.target.classList.contains("failed-btn")) {
                statusUpdater("Failed", index);
                toast.success("Task marked as Failed ❌");
                window.dispatchEvent(new Event("task-updated")); // 🔥
              }

              if (e.target.classList.contains("complete-btn")) {
                statusUpdater("Completed", index);
                toast.success("Task marked as Completed ✅");
                window.dispatchEvent(new Event("task-updated")); // 🔥
              }
            }}
            className="Task bg-navbar rounded-md relative"
          >
            {/* Header */}
            <div className="flex flex-row justify-between items-center px-4 py-2">
              <span className="bg-primary text-white text-sm font-medium px-2 py-1 rounded">
                High
              </span>
              <h2 className="text-sm text-text-secondary">{task.date}</h2>
            </div>

            {/* Content */}
            <div className="flex flex-col items-start justify-center p-4 pb-16">
              <h4 className="text-xl text-text-primary font-semibold">
                {task.title}
              </h4>
              <p className="text-sm text-text-secondary text-[20px] mt-1">
                {task.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <CompletedButton />
              <FailedButton />
              <WorkingButtons />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TasksList;
