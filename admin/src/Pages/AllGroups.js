import React from 'react'
import DashboardLeftSide from '../Components/common/DashboardLeftSide'
import AdminNavbar from '../Components/Navbar'

function AllGroups() {
  return (
    <div className='container-fluid'>
    <div className='row'>

       <div className='col-2' style={{backgroundColor:"#301935"}}>
            <DashboardLeftSide/>
       </div>
       {/*  */}
       <div className='col-10'>
           <AdminNavbar />
           <br/>
             {/* This is the admin page */}
             <div className='m-2'>
                <span className='fs-3'>  Groups  </span> 

                 <span className='float-end'>
                     <button className='p-1'>
                         Create Group
                     </button>
                 </span>
             </div>
             
             <br/> 

             <div class="row row-cols-1 row-cols-md-3 g-4">
                     <div class="col">
                         <div class="card h-100 shadow">
                         <div class="card-body">
                             <h5 class="card-title ">Total </h5>
                             <p class="card-text">232.3k </p>
                         </div>
                         </div>
                     </div>
                     <div class="col">
                         <div class="card h-100 shadow">
                         <div class="card-body">
                             <h5 class="card-title">Total Subsribers</h5>
                             <p class="card-text">34.3k</p>
                         </div>
                         </div>
                     </div>

                     <div class="col">
                         <div class="card h-100 shadow">
                         <div class="card-body">
                             <h5 class="card-title">Groups created Today</h5>
                             <p class="card-text">34.3k</p>
                         </div>
                         </div>
                     </div>

                 </div>
                   {/* table section starts */}
                     <div className='p-3 mt-2 shadow'>
                     <table class="table">
                         <thead>
                             <tr>
                                <th scope="col">Group ID</th>
                                <th scope="col">Super Admin</th>
                                {/* <th scope="col"></th> */}
                                <th scope="col">Today Subscribers</th>
                                <th scope="col"> Date Created</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                             <th scope="row">
                                 <input type='checkbox'/>
                                </th>
                              <th scope="row">
                              <a href='/users/user-detail/:email' className='text-decoration-none text-dark'>
                                    1
                                    </a>
                                </th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                             </tr>
                           
                           
                            <tr>
                             <th scope="row">2</th>
                             <td>Jacob</td>
                             <td>Thornton</td>
                             <td>@fat</td>
                             <td>@mdo</td>

                             </tr>
                         

                              <tr>

                             <th scope="row">3</th>
                             <td colspan="2">Larry the Bird</td>
                             <td>@twitter</td>
                             <td>@mdo</td>

                             </tr>
                           

                            
                         </tbody>
                         </table>
                     </div>
                   {/* table section ends */}

              </div>

             
           </div>
         
        {/*  */}
    </div>
  )
}

export default AllGroups