import React from 'react'
import AdminNavbar from '../Navbar'
import { FaBars, FaBed, FaBell } from 'react-icons/fa'
import DashboardLeftSide from './DashboardLeftSide'

export default function HomePageComponent() {
  return (
    <>
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
                     Dashboard
                    <span className='float-end'>
                        {/* <button className='p-1'>
                            Add User
                        </button> */}

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Add User
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input className='p-2' type='text' placeholder='Firstname'/>
        <br/>
        <input className='p-2' type='text'  placeholder='Email'/>
        <br/>
        <input className='p-2' type='text'  placeholder='Lastname'/>
        <br/>
        <select className='p-2'>
           <option>User role</option>
           <option>Customer Service</option>
           <option>Admin</option>
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">create user</button>
      </div>
    </div>
  </div>
</div>
                    </span>
                </div>
                

                <br/> 

                <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100 shadow">
                            <div class="card-body">
                                <h5 class="card-title "> Users</h5>
                                <p class="card-text">34.3k</p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 shadow">
                            <div class="card-body">
                                <h5 class="card-title">Posts</h5>
                                <p class="card-text">232.3k</p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 shadow">
                            <div class="card-body">
                                <h5 class="card-title">Groups</h5>
                                <p class="card-text">12323k</p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 shadow">
                              <div class="card-body">
                                <h5 class="card-title">Revenue</h5>
                                 <p class="card-text">
                                  3 Billion
                                 </p>
                              </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 shadow">
                              <div class="card-body">
                                <h5 class="card-title">Today's Tickets</h5>
                                 <p class="card-text">
                                  13
                                 </p>
                              </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 shadow">
                              <div class="card-body">
                                <h5 class="card-title">Today's Feedback</h5>
                                 <p class="card-text">
                                   34
                                 </p>
                              </div>
                            </div>
                        </div>
                    </div>
                      {/* table section starts */}
                        <div className='p-3'>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                      {/* table section ends */}

                 </div>

                
              </div>
            
           {/*  */}
       </div>
   



    {/* <AdminNavbar/> */}
    
    </>
  )
}
