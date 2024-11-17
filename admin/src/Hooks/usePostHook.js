import {  useCallback, useEffect, useState } from "react";
import ApiServices from "../Services/ApiServices";

export function usePostHook(postId) {

   const [isLikedByUser, setIsLikedByUser] = useState(false)
   const [isHatedByUser, setIsHatedByUser] = useState(false)
   const [NumberofLikes, setNumberOfLikes] = useState(0)
   const [NumberOfHates, setNumberOfHates] = useState(0)


    const addLikes = useCallback(async(postId)=> {
       try {
        console.log("I dey work add like= ", isLikedByUser);
        const {success} = await ApiServices.postRequest(`/api/auth/post/likes/remove?postId=${postId}`)
        console.log("response = ",success );
          if(success) {
          setIsLikedByUser(false)
          } else{
            setIsLikedByUser(true)
          }
        
      } catch (error) {
        console.error('Watchlist Removeal Error:', error);
      }
    }, [])

    const removeLikes = useCallback(async (postId)=> {
      try {
        console.log("I dey work remove like= ");
        const {success} = await ApiServices.postRequest(`/api/auth/post/likes/add?postId=${postId}`)
        console.log("response = ",success );
          if(success) {
          setIsLikedByUser(true)
          } else{
            setIsLikedByUser(false)
          }
        
      } catch (error) {
        console.error('Watchlist Removeal Error:', error);
      }
    }, []) 

    const addHates = useCallback(async(postId)=> {
      try {
        console.log("I dey work add like= ", isLikedByUser);
        const {success} = await ApiServices.postRequest(`/api/auth/post/hates/remove?postId=${postId}`)
        console.log("response = ",success );
          if(success) {
          setIsHatedByUser(false)
          } else{
            setIsHatedByUser(true)
          }
        
      } catch (error) {
        console.error('Watchlist Removeal Error:', error);
      }
    }, [])

    const removeHates = useCallback(async(postId)=> {
      try {
        console.log("I dey work remove like= ");
        const {success} = await ApiServices.postRequest(`/api/auth/post/hates/add?postId=${postId}`)
        console.log("response = ",success );
          if(success) {
            setIsHatedByUser(true)
          } else{
            setIsHatedByUser(false)
          }
        
      } catch (error) {
        console.error('Watchlist Removeal Error:', error);
      }
    }, []) 


    useEffect(() => {
      const numberOflikes = async()=>{
        try {
          console.log("liked by user= ", postId);
          const {success, numberOfLikes} = await ApiServices.postRequest(`/api/auth/post/likes/count?postId=${postId}`)
          console.log("numberOfLikes", success , numberOfLikes);
            if(success) {
              setNumberOfLikes(numberOfLikes)
            } else{
              setNumberOfLikes(null)
            }
          
        } catch (error) {
          console.error('Watchlist Removeal Error:', error);
        }
      }
      numberOflikes()
  }, [isLikedByUser]);
    

  useEffect(() => {
    const numberOfHates = async()=>{
      try {
        console.log("liked by user= ", postId);
        const {success, numberOfHates} = await ApiServices.postRequest(`/api/auth/post/hates/count?postId=${postId}`)
        console.log("numberOfHates", success , numberOfHates );
          if(success) {
            setNumberOfHates(numberOfHates)
          } else{
            setNumberOfHates(null)
          }
        
      } catch (error) {
        console.error('Watchlist Removeal Error:', error);
      }
    }
    numberOfHates()
}, [isHatedByUser]);
  

  
    
  
    useEffect(() => {
        const postIsLikedByuser = async()=>{
          try {
            console.log("liked by user= ", postId);
            const {success} = await ApiServices.postRequest(`/api/auth/post/likes/find?postId=${postId}`)
            console.log("liked by user2=", success );
              if(success) {
                setIsLikedByUser(true)
              } else{
                setIsLikedByUser(false)
              }
            
          } catch (error) {
            console.error('Watchlist Removeal Error:', error);
          }
        }
        postIsLikedByuser();
    }, [isLikedByUser]);
    
    useEffect(() => {
      const postIsHatedByuser = async()=>{
        try {
          console.log("liked by user= ", postId);
          const {success} = await ApiServices.postRequest(`/api/auth/post/likes/find?postId=${postId}`)
          console.log("liked by user2=", success );
            if(success) {
              setIsLikedByUser(true)
            } else{
              setIsLikedByUser(false)
            }
          
        } catch (error) {
          console.error('Watchlist Removeal Error:', error);
        }
      }
      postIsHatedByuser();
  }, [isHatedByUser]);
  
  
      
    return {isHatedByUser, isLikedByUser,NumberofLikes, NumberOfHates, 
        addHates,removeHates, addLikes, removeLikes,

     };
}
