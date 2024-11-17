import React from 'react'
import DashboardLeftSide from '../Components/common/DashboardLeftSide'
import AdminNavbar from '../Components/Navbar'

function AllFeedbacks() {
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
             <span className='fs-3'>FeedBacks</span> 

                 <span className='float-end'>
                     {/* <button className='p-1'>
                         Reply
                     </button> */}
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
                             <h5 class="card-title">Today's Complaints</h5>
                             <p class="card-text">3.3k</p>
                         </div>
                         </div>
                     </div>
                   

                    
                   
                 </div>
                   {/* table section starts */}
                     <div className='p-3 mt-4 shadow'>
                     <table class="table">
                         <thead>
                             <tr>
                                <th scope="col"> ID</th>
                                <th scope="col">Sent_By</th>
                                <th scope="col">Poster_Fullname</th>
                                <th scope="col">Poster_Email</th>
                                <th scope="col">Message</th>
                                <th scope="col">Date Created</th>

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

export default AllFeedbacks