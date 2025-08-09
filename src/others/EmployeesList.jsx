import { useState } from "react";
import { useAuthContext } from "../context/AuthContex";

function EmployeesList() {
  const { currentadmin, deleteTask } = useAuthContext();
  const [expandedEmployees, setExpandedEmployees] = useState({});
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  if (!currentadmin?.Employees) return <p> No Employee Exits</p>;

  const toggleEmployeeTasks = (eid) =>
    setExpandedEmployees((prev) => ({ ...prev, [eid]: !prev[eid] }));

  const toggleDescription = (taskId) =>
    setExpandedDescriptions((prev) => ({ ...prev, [taskId]: !prev[taskId] }));

  const getCount = (tasks, status) =>
    Array.isArray(tasks)
      ? tasks.filter((t) => t.taskStatus === status).length
      : 0;

  return (
    <div className="w-full bg-[var(--color-surface)] p-6 rounded-xl shadow-md text-[var(--color-text-primary)]">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Employee Summary
      </h2>

      {/* Header Row */}
      <div className="grid grid-cols-6 gap-4 py-3 px-4 bg-[var(--color-navbar)] text-gray-500 rounded-md border mb-2">
        <span className="font-medium">Employee</span>
        <span className="text-center">
          <span className="block md:hidden">N</span>
          <span className="hidden md:block">New</span>
        </span>
        <span className="text-center">
          <span className="block md:hidden">A</span>
          <span className="hidden md:block">Active</span>
        </span>
        <span className="text-center">
          <span className="block md:hidden">C</span>
          <span className="hidden md:block">Completed</span>
        </span>
        <span className="text-center">
          <span className="block md:hidden">F</span>
          <span className="hidden md:block">Failed</span>
        </span>
        <span className="text-center">
          <span className="block md:hidden">T</span>
          <span className="hidden md:block">Tasks</span>
        </span>
      </div>

      {/* Employee Rows */}
      <div className="flex flex-col gap-3">
        {currentadmin.Employees.map((emp) => {
          const isOpen = expandedEmployees[emp.id];
          return (
            <div key={emp.id} className="border rounded-md overflow-hidden">
              <div className="grid grid-cols-6 gap-4 p-4 bg-[var(--color-navbar)] hover:shadow transition-all">
                <div className="font-semibold">{emp.userName}</div>
                <div className="text-center">{getCount(emp.tasks, "null")}</div>
                <div className="text-center">{getCount(emp.tasks, "Working")}</div>
                <div className="text-center">{getCount(emp.tasks, "Completed")}</div>
                <div className="text-center">{getCount(emp.tasks, "Failed")}</div>
                <div className="text-center">
                  <button
                    onClick={() => toggleEmployeeTasks(emp.id)}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-xs"
                    type="button"
                  >
                    {isOpen ? "Hide Tasks" : "Show Tasks"}
                  </button>
                </div>
              </div>

              {isOpen && (
                <div className="bg-[var(--color-surface)] p-4 flex flex-col gap-3">
                  {emp.tasks.length > 0 ? (
                    emp.tasks.map((task) => {
                      const isDescOpen = expandedDescriptions[task.id];
                      return (
                        <div key={task.id} className="border rounded-md p-3 shadow-sm">
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>
                              {task.taskStatus === "null" ? "New Task" : task.taskStatus}
                            </span>
                            <span className="text-xs md:text-sm">{task.date}</span>
                          </div>
                          <h3 className="font-semibold mt-1 text-base md:text-lg break-words">
                            {task.title}
                          </h3>
                          <p className="mt-1 text-gray-700 text-sm md:text-base break-words">
                            {isDescOpen
                              ? task.description
                              : `${task.description.slice(0, 100)}...`}
                          </p>
                          {task.description.length > 100 && (
                            <button
                              onClick={() => toggleDescription(task.id)}
                              className="text-blue-500 text-xs mt-1"
                              type="button"
                            >
                              {isDescOpen ? "Show Less" : "More"}
                            </button>
                          )}
                          <div className="mt-2 text-right">
                            <button
                              onClick={() => deleteTask(emp.id, task.id)}
                              className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-xs"
                              type="button"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-gray-500 italic text-center">No tasks available</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmployeesList;
