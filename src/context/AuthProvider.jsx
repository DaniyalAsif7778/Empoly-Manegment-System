import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthContex";

export const AuthProvider = ({ children }) => {
  const [currentadmin, setCurrentAdmin] = useState(() => {
    const currentAdmin = localStorage.getItem("currentAdmin");
    return currentAdmin ? JSON.parse(currentAdmin) :
      { loginStatus: false };
  });
  const [currentuser, setCurrentUser] = useState(() => {
    const currentUser = localStorage.getItem("currentUser");
    return currentUser ? JSON.parse(currentUser) :
      { loginStatus: false };
  })
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData
      ? JSON.parse(storedData)
      : {
        App: [
          {
            id: "",
            Admin: " Daniyal Asif",
            Email: "Daniyal86@gmail.com",
            password: "safasfaf",
            loginStatus: false,
            Employees: [

            ]
          }
        ]
      };
  });
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  useEffect(() => {
    localStorage.setItem("currentAdmin", JSON.stringify(currentadmin));
  }, [currentadmin, setCurrentAdmin]);
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentuser));
  }, [currentuser, setCurrentUser]);
  const addAdmin = (adminData) => {
    setData((prevData) => ({
      App: [
        ...prevData.App,
        {
          ...adminData,
          Employees: [],
        },
      ],
    }));

    setCurrentAdmin(adminData);
  };


  const updateAdmin = (name, email, password) => {
    if (name && email) {

      setData((prevData) => ({
        App: prevData.App.map((admins) => {
          if (currentadmin.id == admins.id) {
            return {
              ...admins,

              Admin: name,
              Email: email,
              Employees: admins.Employees.map((employees) => {
                return {
                  ...employees,
                  Email: email,
                }
              })
            }
          }
          return admins;
        })
      }))


      setCurrentAdmin((admin) => {

        return {
          ...admin,
          Admin: name,
          Email: email,
          Employees: admin.Employees.map((employee) => {
            return {
              ...employee,
              Email: email,
            }
          })
        }

      })


    } else {
      alert("please fill all fields")
    }



    if (password) {
      setData((prevData) => ({
        App: prevData.App.map((admins) => {
          if (currentadmin.id == admins.id) {
            return {
              ...admins,

              password: password,
            }
          }
          return admins;
        })
      }))
      setCurrentAdmin((admin) => {

        return {
          ...admin,
          password: password,

        }

      })
    }

  };

  const deleteAdmin = () => {

    setData((prevData) => ({
      App: prevData.App.filter((admins) => !(admins.id === currentadmin.id && admins.Admin === currentadmin.Admin))
    }))



    setCurrentAdmin((admin) => {
      let adminidCheck = data.App.find((admins) => admins.id == admin.id)

      if (adminidCheck) {
        return {loginStatus:false,}
      }
      return admin;
    })
    
  };

  const addUser = (userData) => {
    setData((prevData) => ({
      ...prevData,
      App: prevData.App.map((item) => {
        if (item.Email == userData.Email) {
          return {
            ...item,
            Employees: [...item.Employees, userData],
          };
        }
        return item;

      }),
    }));
    setCurrentUser(userData)
  };
  // const deleteUser = () => { };
  const updateUser = (name, password) => {
    if (name) {

      setData((prevData) => ({
        App: prevData.App.map((admins) => {
          return {
            ...admins,
            Employees: admins.Employees.map((employee) => {
              if (employee.id === currentuser.id) {
                return {
                  ...employee,
                  userName: name,
                }
              }
              return employee;
            })
          }
        })
      }))

      setCurrentUser((employee) => {
        let useridChecker = data.App.map((admins) => {
          admins.Employees.find((employees) => employee.id == employees.id)
        })
        if (useridChecker) {
          return {
            ...employee,
            userName: name,
          }
        }
        return employee;
      })
    }

    if (password) {

      setData((prevData) => ({
        App: prevData.App.map((admins) => {
          return {
            ...admins,
            Employees: admins.Employees.map((employee) => {
              if (employee.id === currentuser.id) {
                return {
                  ...employee,
                  password: password,
                }
              }
              return employee;
            })
          }
        })
      }))

      setCurrentUser((employee) => {
        let useridChecker = data.App.map((admins) => {
          admins.Employees.find((employees) => employee.id == employees.id)
        })
        if (useridChecker) {
          return {
            ...employee,
            password: password,
          }
        }
        return employee;
      })
    }
  };



  const addTask = (taskData) => {
    let userFound = false;
  
    // 🔍 Check if assignedTo exists in any employee
    data.App.forEach((admin) => {
      admin.Employees.forEach((employee) => {
        if (employee.userName === taskData.assignedTo) {
          userFound = true;
        }
      });
    });
  
    if (!userFound) {
      toast.error("User not found");
      return;
    }
  
    // ✅ Show loading toast before adding
    const toastId = toast.loading("Creating task...");
  
    setTimeout(() => {
      // Set data in App
      setData((prevData) => ({
        App: prevData.App.map((admins) => {
          if (admins.id === currentadmin.id) {
            return {
              ...admins,
              Employees: admins.Employees.map((employee) => {
                if (employee.userName === taskData.assignedTo) {
                  return {
                    ...employee,
                    tasks: [...employee.tasks, taskData],
                  };
                }
                return employee;
              }),
            };
          }
          return admins;
        }),
      }));
  
      // Set data in currentAdmin
      setCurrentAdmin((admin) => {
        return {
          ...admin,
          Employees: admin.Employees.map((employee) => {
            if (employee.userName === taskData.assignedTo) {
              return {
                ...employee,
                tasks: [...employee.tasks, taskData],
              };
            }
            return employee;
          }),
        };
      });
  
      toast.dismiss(toastId);
      toast.success("Task created successfully!");
    }, 2000);
  };
  


  console.log(Array.isArray(currentadmin));




  const deleteTask = () => { };
 
  // status updater;
  const statusUpdater = (status, index) => {

    setData((prevData) => {
      return {
        App: prevData.App.map((admins) => {
          return {
            ...admins,
            Employees: admins.Employees.map((employee) => {
              if (employee.id == currentuser.id) {
                return {
                  ...employee,
                  tasks: employee.tasks.map((tasks, idx) => {
                    if (index === idx) {
                      return {
                        ...tasks,
                        taskStatus: status,
                      }
                    }
                    return tasks;
                  })
                }
              }
            })
          }

        })
      }
    })

  }

  return (
    <AuthContext.Provider value={{ data, setData, addAdmin, addUser, currentadmin, setCurrentAdmin, currentuser, setCurrentUser, addTask, statusUpdater, updateAdmin, deleteAdmin,updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
