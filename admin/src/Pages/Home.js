import { Formik } from "formik";
import { UserContext } from "../Context/Authcontext";
import { useContext } from "react";
import HomePageComponent from "../Components/common/HomePageComponent";
import AdminLoginForm from "../Components/LoginForm";

function HomePage() {
  const user = useContext(UserContext)

    return ( 
    <>
       { user ?  <HomePageComponent/> : <AdminLoginForm/> }
    </>
     );
}

export default HomePage;