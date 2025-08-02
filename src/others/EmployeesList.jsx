 import { useAuthContext } from '../context/AuthContex';

function EmployeesList() {
  const { currentadmin } = useAuthContext();

     const getCountTaskWithStatus= (Task,Status)=>{
        let count = 0;

         Task?.filter((tasks)=>{
             if(tasks.taskStatus ===  Status ) {
                 count++
             }
          })
          return count;
     }
     
  return (
    <div className="w-full bg-[var(--color-surface)]  mt-4 px-4 py-6 rounded-xl shadow-md text-[var(--color-text-primary)]">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Employee Summary</h2>

      
    {/* Header */}    
      <div className="hidden md:grid grid-cols-5 gap-4 py-3 px-4 bg-[var(--color-navbar)] text-[var(--color-text-secondary)] rounded-md border border-[var(--color-border)] mb-2">
        <span className="font-medium">Employee</span>
        <span className="font-medium text-center">New Tasks</span>
        <span className="font-medium text-center">Active Tasks</span>
        <span className="font-medium text-center">Completed</span>
        <span className="font-medium text-center">Failed</span>
      </div>

      {/* Employee Rows */}
      <div className="flex flex-col gap-2">

        { currentadmin.Employees.map((employee) =>{
             
             let newTask= getCountTaskWithStatus(employee.tasks ,  "null")
             let Completed = getCountTaskWithStatus(employee.tasks , "Completed")
             let Failed= getCountTaskWithStatus(employee.tasks , "Failed")
             let Working= getCountTaskWithStatus(employee.tasks ,"Working")
              
                 
             return (

          <div
          key={employee.id}
          className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border border-[var(--color-border)] bg-[var(--color-navbar)] rounded-md text-sm md:text-base"
        >
          <div className="font-semibold">{employee.userName}</div>
          <div className="text-center">{ newTask}</div>
          <div className="text-center">{Working}</div>
          <div className="text-center">{Completed}</div>
          <div className="text-center">{Failed}</div>
        </div>
            )
        })}
      </div>
    </div>
  );
}

export default EmployeesList;
