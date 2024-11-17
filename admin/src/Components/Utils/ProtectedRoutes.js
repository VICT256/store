import { Navigate,Outlet, useLocation } from "react-router-dom"; 
 
  const ProtectedRoute = ({ isAllowed, children }) => {
    const location = useLocation();

    // console.log("isAllowed = ", isAllowed);
    
    if (!isAllowed) {
      
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
      return children ? children : <Outlet />;
    
  };


  export default ProtectedRoute;


 export const Protected404 = ({ children }) => {
  
 
      return <Navigate to="/404" replace />;
 
    
  };


