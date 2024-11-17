import React, {useContext} from "react"
import {Routes, Route} from "react-router-dom";
import  { UserContext } from "./Context/Authcontext";
import ProtectedRoute, {Protected404} from "./Components/Utils/ProtectedRoutes";
import HomePage from "./Pages/Home";
import AppContextProvider from "./Context/AppContext";
import NotFoundComponent from "./Pages/NotFound";
import AllUsers from "./Pages/AllUsers";
import AllGroups from "./Pages/AllGroups";
import AllPosts from "./Pages/AllPosts";
import AllTicket from "./Pages/AllTickets";
import AllFeedbacks from "./Pages/AllFeedbacks";

function App() {
  
  const user = useContext(UserContext)
    
  return (

    <div>
   <AppContextProvider >
        <Routes> 
            <Route path="/" element= {<HomePage/> } />
            <Route element={<ProtectedRoute isAllowed= {user} />}>
              {/* <Route path="/:username" element={<ProfilePageComponent />} /> */} 
              <Route path="/users/all" element={<AllUsers/>} /> 
              <Route path="/users/user-detail/:email" element={<></>} /> 
              <Route path="groups/all" element={<AllGroups/>} /> 
              <Route path="groups/:groupId" element={<></>} /> 
              <Route path="posts/all" element={<AllPosts/>} /> 
              <Route path="posts/:postId" element={<></>} /> 
              <Route path="tickets" element={<AllTicket/>} /> 
              <Route path="feedbacks" element={<AllFeedbacks/>} /> 

            </Route>
               <Route path="/404" element={<NotFoundComponent/>}/>
               <Route path= "/*" element={<Protected404> </Protected404>} />       
        </Routes>
      </AppContextProvider>
        
    </div>
  )
}

export default App;

           