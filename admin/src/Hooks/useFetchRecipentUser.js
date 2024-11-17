import { useEffect, useState } from "react";
import ApiServices from "../Services/ApiServices";

export function useFetchRecipientUser(chat, user) {
    
     const [recipientUser, setRecipientUser] = useState({})

    const recipientId = chat.firstId !== user.userUUID ? chat.firstId : chat.secondId;
    //  console.log(recipientId)

    const getRecipient =async ()=> {
           const {profileInfo} = await ApiServices.postRequest(`/api/auth/user/getprofileinfobyid/${recipientId}`, )
           if  (profileInfo){
            // console.log(profileInfo);
            setRecipientUser(profileInfo)
           }else{
            setRecipientUser({})
           }
        }

    useEffect(()=>{
        getRecipient();
    },[])
    return { recipientUser};
}

 