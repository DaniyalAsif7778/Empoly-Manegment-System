import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
  console.log("email is : " , email);
 console.log("password is :" , password);
 
 setEmail("")
 setPassword("")
 
 
 
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-full  bg-black">
        <div className="  w-96 h-96 flex items-center justify-center flex-col border-2 border-emerald-400 py-4 px-10 rounded-xl ">
          <form
            onSubmit={(e) => {
              SubmitHandler(e);
            }}
          >
            <input
        
              value={email}
              onChange={(e) =>{
                   SubmitHandler(e);  
                setEmail(e.target.value)}}
              className="bg-transparent border-2 rounded-full border-emerald-400 px-3 py-2"
              type="email"
              placeholder="Enter your email"
              required
            />
            <input
            required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                SubmitHandler(e);  
              }}
              className="bg-transparent border-2 rounded-full border-emerald-400 px-3 py-2 mt-7"
              type="password"
              placeholder="Enter your password"
            />
            <button className="bg-emerald-600 text-white w-56 rounded-lg py-1.5 px-2 mt-10 ml-7">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
