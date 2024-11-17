

export  const displayAlert = ({alertmessage,isError,message}) =>{
    return(
      <>
        {alertmessage && ( <div id = "alert" className={isError ?" bg-danger":" bg-success"}><span className="text-white">{ message}</span></div>)}
      </>
    );
  }

  export  const displayCommonAlert = ({commonAlertMessage,commonMessage}) =>{
      // alert("je")
    return(
      <>
        {commonAlertMessage && ( <div  id="commonalert" ><span className="text-black">
         <span className="ms-2 me-2 ">👍</span>  
        { commonMessage}
          </span></div>)}
      </>
    );
  }


export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));