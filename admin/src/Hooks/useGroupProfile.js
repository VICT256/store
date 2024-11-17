import {  useEffect, useState } from "react";
import ApiServices from "../Services/ApiServices";

export function useGroupProfilePageHook(groupId) {
   
   const [groupInfo, setGroupInfo] = useState({})
   const [isSubscribedMember, setIsSubscribedMember] = useState(false)
   const [alertmessage, setAlertmessage] = useState(false)
   const [message, setMessage] = useState(" ")
   const [isError, setIsError] = useState(false)
   const [newMember, setNewMember] = useState(null)
   const [numberOfMembers, setNumberOfMembers] = useState(0)
   const [groupusernames, setGroupUsernames] = useState([])
  const  [addedToWatchList, setaddedToWatchList] = useState(false)
   const  [isSuperAdmin, setisSuperAdmin] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {      
      //  if(!content) return 
       
      const res = await  ApiServices.postRequest('/api/auth/group/join-group', groupId );

      console.log('Message sent:', res);

      if (res === "Network Error"){
        setAlertmessage(true)
          setIsError(true)            
          setMessage("Internal Server Error")
          setTimeout(()=>setAlertmessage(false), 3000)
        }
         if(res?.status === 200){
               setIsError(false)
               setNewMember("NewMember")
          }  else{
            setAlertmessage(true)
            setMessage(res?.message)
            setIsError(true)
            setTimeout(()=>setAlertmessage(false), 3000)

          }
       
    } catch (error) {
      console.error('Message sending error:', error.response.data);
      // Display error message to user
    }
  };
 

    const fetchGroupInfo = async () => {


        try {
          
          const res= await ApiServices.getRequest(`/api/auth/group/groupinfo/${groupId.groupId}`);
          
          if (!res ){
            setAlertmessage(true)
              setIsError(true)            
              setMessage("Internal Server Error")
              setTimeout(()=>setAlertmessage(false), 3000)
            }
             if(res?.success){
              // console.log('÷res.groupInfo, ',res.groupInfo);
              setGroupInfo(res?.groupInfo)
              setNumberOfMembers(res?.numberOfMembers)
              setGroupUsernames(res.groupusernames)
              console.log("groupusernames = ",res.groupusernames);
              } else{
                  setAlertmessage(true)
                  setMessage(res?.message)
                  setIsError(true)
              }
    
          
        } catch (error) {
          console.error('Message retrieval error:', error.response.data);
          // Display error message to user
        }
      };
    
     
    
    
      useEffect(() => {
        fetchGroupInfo();
        
      }, []);
    
      useEffect (()=> {
        const Members = async () => {
    
          try {
            const {status, isMember} = await ApiServices.getRequest(`/api/auth/group/${groupId.groupId}/verify-group-membership`);
               if(status === 200){
                //  console.log(isMember);
                 setIsSubscribedMember(isMember)
                }else{
                  setIsSubscribedMember(false)
                }   
          } catch (error) {
            console.error('Message retrieval error:', error.response.data);
            // Display error message to user
          }
          
        }
        Members()
      },[newMember])


      useEffect (()=> {
        const Member = async () => {
          try {
            const {status, isMember} = await ApiServices.getRequest(`/api/auth/group/${groupId.groupId}/verify-group-membership`);
               if(status === 200){
                //  console.log(isMember);
                 setIsSubscribedMember(isMember)
                }else{
                  setIsSubscribedMember(false)
                }   
          } catch (error) {
            console.error('Message retrieval error:', error.response.data);
            // Display error message to user
          }
          
        }
        Member()
      },[])

      useEffect (()=> {
        const verifyIsSuperAdmin = async () => {
          try {
            const {success, isSuperAdmin} = await ApiServices.getRequest(`/api/auth/group/${groupId.groupId}/verify-group-superadmin`);
               if(success){
                 console.log( "isSuperAdmin=",  isSuperAdmin);
                 setisSuperAdmin(isSuperAdmin)
                }   
          } catch (error) {
            console.error('Message retrieval error:', error.response.data);
            // Display error message to user
          }
          
        }
        verifyIsSuperAdmin()
      },[])

     

      useEffect(()=> {

        const findWatchlist =async ()=> {
            try {
                  const {success} = await ApiServices.getRequest(`/api/auth/group/watchlist/status?groupId=${groupId.groupId}`);
                    console.log("response435 = ", success);
                    setaddedToWatchList(success)
                 
                } catch (error) {
                  console.error('Watchlist Removeal Error:', error);
                }
                
        }
      
        findWatchlist();
      
      },[addedToWatchList])
      
      
    return { groupInfo,isSuperAdmin ,numberOfMembers,groupusernames, isSubscribedMember, alertmessage, isError,message,addedToWatchList, setaddedToWatchList, handleSubmit};
}
