import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setCurrentUser } from "../features/currentUser";
import CryptoService from "../utils/encyription";

function useUserFinder(id) {
  const users = useSelector((state) => state.users.Admins);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("adminId"));

    if (!storedData) return;

    const crypto = new CryptoService(import.meta.env.VITE_SECRET_KEY);

    const result = crypto.decrypt(
      storedData.encrypted,
      storedData.nonce
    );

    const findUser = users. filter(
      (user) =>{
        if(id !== "" && result == {}){
          user.id == id
        }else{
          user.id == result
        }
      }
    );

    setUser(findUser);
  }, [users,id]);
  dispatch(setCurrentUser(user[0]))
   
}

export default useUserFinder;