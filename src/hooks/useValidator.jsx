import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function useValidator( email,password   ){
    const [emailValid , setEmailValid] = useState()
    const [passwordValid ,setPasswordValid]= useState();
    const users = useSelector((state)=> state.users)
console.log(email,password);

    useEffect(()=>{
           
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (EmailRegex.test(email)) {
            setEmailValid(true)
         }else{
            setEmailValid(false)
         }
         if (passwordRegex.test(password)) {
            setPasswordValid(true)
         }else{
            setPasswordValid(false)
         }
    },[email,password  ])
     
    // const adminValidator = users.Admins.some((admin)=> admin.id !== id && admin.Email !== email && admin.password !== password)
     
  return {emailValid,passwordValid};
}