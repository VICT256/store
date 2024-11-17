import React,{ createContext, useEffect, useState} from "react";
import ApiServices from "../Services/ApiServices";


export const UserContext = createContext();

export const  UserUpdateContext = createContext()


function UserContextProvider({children}) {

    //     const[user, setUser] = useState(null)
    // //  const renRef = useState(false)

    const user =ApiServices.getUserCookie("user")
  // useEffect(()=> {
  //   const checkAuth = async() => {
  //     // if(renRef.current)return;
  //        const res = await ApiServices.checkLoginStatus()
  //        setUser(res)
  //        console.log("userContext = ", user);
  //       //  renRef.current = true
  //   }
  //    checkAuth()
  // }, [])

  // const user = ApiServices.getCookie("user")

     return ( 

       <UserContext.Provider value={user}>
         {/* <UserUpdateContext.Provider > */}
            {children}
         {/* </UserUpdateContext.Provider> */}
       </UserContext.Provider>
     );
}

export default UserContextProvider;







