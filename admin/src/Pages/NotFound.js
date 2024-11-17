import { useLocation } from "react-router-dom";

import '../CSS/styles.css'
import AdminNavbar from "../Components/Navbar";

function NotFoundComponent() {
   const location = useLocation();
   console.log("location = ", location);


    return ( 
        <>
          <AdminNavbar logoimgUrl={'../'} />
            <div class="container-fluid vh-100" style={{backgroundColor:"#FEA500"}}>

             <div class="row" >
               
                  <div className='col-sm-12 col-md-4 col-lg-2 '>
                  </div>

                  <div className='col-sm-12 col-md-4 col-lg-8'>
                     {/* <h1 className='fw-bold text-center' style={{marginTop: 200}}> 404-Forbidden</h1> */}
                     <img src="https://cdn.glitch.com/0e4d1ff3-5897-47c5-9711-d026c01539b8%2Fbddfd6e4434f42662b009295c9bab86e.gif?v=1573157191712" className="text-center" style={{marginTop: 200}} width="250" alt="404 image"/>
                     <img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=bitcoin:3AFaCnqriLNxj15kqtp5Pxn8puHfuqbX7W&choe=UTF-8" />
                     <h2 className='fw-bold text-center' style={{marginTop: 20}}> Page Not Found</h2>
                  </div>

                  <div className='col-sm-12 col-md-4 col-lg-2'>
                     
                  </div>
                 
               </div>

              
             </div>
        </>
     );
}

export default NotFoundComponent;