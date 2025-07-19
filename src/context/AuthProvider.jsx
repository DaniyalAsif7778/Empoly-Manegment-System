import { useState, useEffect } from "react";

import { AuthContext } from "./AuthContex";

export const AuthProvider = ({ children }) => {
  const [currentadmin, setCurrentAdmin] = useState(()=>{
    const  currentAdmin = localStorage.getItem("currentAdmin");
    return currentAdmin ? JSON.parse(currentAdmin) :  
    {loginStatus:false} ;
  });
  const [currentuser , setCurrentUser] =useState(()=>{
    const  currentUser = localStorage.getItem("currentUser");
    return currentUser ? JSON.parse(currentUser) :  
    {loginStatus:false} ;
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
  useEffect(()=>{
    localStorage.setItem("currentAdmin", JSON.stringify(currentadmin));
  },[currentadmin, setCurrentAdmin]);
  useEffect(()=>{
    localStorage.setItem("currentUser", JSON.stringify(currentuser));
  },[currentuser, setCurrentUser]);
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

    setCurrentAdmin( adminData);
  };
 

  const deleteAdmin = () => {};
  const updateAdmin = () => {};

  const addUser = (userData) => {
    setData((prevData) => ({
      ...prevData,
      App: prevData.App.map((item) => {
        if (item.Email == userData.Email) {
          return {
            ...item,
            Employees: [  ...item.Employees , userData],
          };
        }
        return item;
      }),
    }));
    setCurrentUser(userData)
  };
  const deleteUser = () => {};
  const updateUser = () => {};
  const addTask = () => {};
  const deleteTask = () => {};
  const updateTask = () => {};

  return (
    <AuthContext.Provider value={{ data,setData, addAdmin, addUser,currentadmin,setCurrentAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
