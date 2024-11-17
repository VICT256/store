import React,{ createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./Authcontext";
import ApiServices from "../Services/ApiServices";
import { useParams } from "react-router-dom";


export const ProfileContext = createContext();


function ProfileContextProvider({children}) {
    
    const theUsername = useParams()
    const username = theUsername.username
    const user = useContext(UserContext)
    
    const [myFollowingUsernames, setMyFollowingUsernames]= useState([])
    const [ownProfile, setOwnProfile] = useState(false)

    const fetchFollowers = async () => {
  
        try {
          const { usernames } =  await  ApiServices.getRequest("/api/auth/follow/userfollowers/all")
          setMyFollowingUsernames(usernames)
          
        } catch (error) {
           alert(error)
        }
      }

      const setOwnerProfile= ()=> {

          if (user.username === username) {
            setOwnProfile(true)
          }

      }
      
    useEffect(() => {
      fetchFollowers();
      setOwnerProfile()
    
    },[])   
    
    const data = {
        username: username, 
        myFollowingUsername:myFollowingUsernames,
        ownProfile:ownProfile
    }

    return ( 

       <ProfileContext.Provider value={data}>
            {children}
       </ProfileContext.Provider>
     );
}

export default ProfileContextProvider;







