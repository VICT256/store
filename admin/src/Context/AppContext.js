import { useContext, createContext, useEffect, useState} from "react";
import { io } from "socket.io-client";
import { UserContext } from "./Authcontext";
import ApiServices from "../Services/ApiServices";


export const AppContext = createContext()


export function AppContextProvider({children}) {
  
    const user = useContext(UserContext)

    const [socket, setSocket ]= useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [notifications, setNotifications] = useState([])
    const [allusers, setAllusers] = useState([])
  


useEffect(()=>{
      const newSocket = io("http://localhost:7000/")
       
      setSocket(newSocket)
  
       return ()=> {
          newSocket.disconnect();
       }
  },[user] )
  
  //add online users
  
useEffect(()=> { 
    if (!user) return
    if (socket === null) return
    //emit event to add new user
    socket.emit("addNewUser", user.userUUID);
  
    //liste to an event to get new users
    socket.on("getOnlineUsers", (res)=> {
      setOnlineUsers(res)
    //   console.log('onlineusers=', onlineUsers);
    })
  
    return () => {
      socket.off("getOnlineUsers");
    }
  
  },[socket] )
  
  useEffect(()=> {
   if(!user) return
      const getAllusers = async() => {
      const {allUsers} = await ApiServices.getRequest(`/api/auth/user/allusers`)
      setAllusers(allUsers)
      // console.log("alliusre = ",allUsers);
    }
    getAllusers()

   },[])
 

    return (
        <AppContext.Provider value = {{
            onlineUsers, allusers, socket, notifications, setNotifications
        }}>
            {children}
        </AppContext.Provider>

      );
}

export default AppContextProvider;