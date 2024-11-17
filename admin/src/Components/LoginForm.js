import { Formik } from "formik";
import ApiServices from "../Services/ApiServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "./Utils/FormSchemas";
import constants from "./Utils/Constants";

function AdminLoginForm() {


    const initialValues = {
        email: "",
        password: "",
      };

      const navigate = useNavigate();

  const [alertmessage, setAlertmessage] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);


 const onSubmit = async (values, actions) => {
        
        try {
          if (!values) return;
          console.log("submitted",`${constants.clientURL}`, values);
          const { success, message, userinfo } = await ApiServices.postRequestNoAuth(
            "/api/auth/admin/login",
            values
          );
          setAlertmessage(true);
          if (success) {
            setMessage(message);
            setIsError(false);
            var str = ApiServices.setCookie("user", userinfo, 7);
            // var str = JSON.stringify(res.data.user).replace(/\"([\w_-]+?)\"\:/g, '$1:')
            setTimeout(() => setAlertmessage(false), 2000);
            window.location.replace(`${constants.clientURL}`);
          } else {
            setMessage(message);
            setIsError(true);
            setTimeout(() => setAlertmessage(false), 3000);
            actions.resetForm();
          }
        } catch (error) {
          console.log(error);
        }
      };
    
    return ( 
    <>
    {/*  */}

    <div className="row  ">
            <div className="col-sm-12 col-md-12 col-lg-4"></div>
            <div className="col-sm-12 col-md-12 col-lg-4">
  {/* //  start */}
         <div className="p-2 bg-light shadow mt-5">
              
            <div className="m-3">
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={onSubmit}
            >
              {({
                errors,
                touched,
                isSubmitting,
                values,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit} class="row g-3 text-center  mt-5">
                   <div className="text-center">
                     <img src ='../../trusyte.logo.jpg' height={50} width={50}/>
                   </div>
                  <div class="col-md-12">
                    <label for="inputCity" class="form-label float-start">
                     
                    </label>
                    <br></br>
                    <input
                      type="text"
                      name="email"
                      placeholder="Username"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="form-control-lg w-100 "
                      id="inputCity"
                    />
                    <br />
                    {/* {errors.email && touched.email && (
                      <small
                        style={{ fontSize: 10 }}
                        className=" text-danger float-start"
                      >
                        {errors.email}
                      </small>
                    )} */}
                  </div>

                  <div class="col-md-12">
                    <label for="inputCity" class="form-label  float-start">
                    
                    </label>
                    <br></br>
                    <input
                      type="password"
                      name="password"
                      placeholder="*********************"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="form-control-lg w-100 "
                      id="inputCity"
                    />
                    <br />
                    {/* {errors.password && touched.password && (
                      <small
                        style={{ fontSize: 10 }}
                        className="text-danger float-start"
                      >
                        {errors.password}
                      </small>
                    )} */}
                    <a
                      href="/forgot-password"
                      class="text-dark  fw-bold text-decoration-none float-end"
                    >
                      {/* <label
                      for="inputCity"
                      class="form-label float-start fw-bold"
                    > */}
                      forgot password
                      {/* </label> */}
                    </a>
                  </div>

                  <div class="col-12">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      class="btn btn-light font-monospace loginbtn"
                    >
                     {isSubmitting ? (
                        <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      ) : "login"}
                    </button>
                  </div>

                  <p class="text-center">
                    Not yet a trusytean, Create an free account{" "}
                    <a href="/signup"> here</a>
                  </p>
                </form>
              )}
            </Formik>
            </div>
            
            
           </div>
    {/* //  end  */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4"></div>
         </div>


  
    </>
     );
}

export default AdminLoginForm;