import React from 'react'

function DashboardLeftSide() {
  return (
    
    <>
      <div className='p-2'>
               <a  className="text-decoration-none " href="/">
                   <img src=   "https://res.cloudinary.com/dz5xuypgl/image/upload/v1722734480/trusyte.logo_my8arh.jpg" width={50} height={50} /> 
                </a>    
              </div>


           <div className='d-block text-white m-2'>
             
              <div className='p-3 fs-5'>
                <a href='/' className='text-decoration-none text-white'>
                 Dashboard
                </a> 
               </div>

              <div className='p-3 fs-5'>
                <a href='/users/all' className='text-decoration-none text-white'>
                 Users
                </a>
              </div>

              <div className='p-3 fs-5'>
                 <a href='/posts/all' className='text-decoration-none text-white'>
                  Posts
                  </a>
                </div>

              <div className='p-3 fs-5'>
                <a href='/groups/all' className='text-decoration-none text-white'>
                  Groups
                </a>
            </div>
            <div className='p-3 fs-5'>
                <a href='/groups/all' className='text-decoration-none text-white'>
                 Withdrawal Requests
                </a>
            </div>

            <div className='p-3 fs-5'>
                <a href='/tickets' className='text-decoration-none text-white'>
                 Tickets
                </a>
            </div>

            <div className='p-3 fs-5'>
                <a href='/feedbacks' className='text-decoration-none text-white'>
                 Feedbacks
                </a>
            </div>

             <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> 
           </div>
    </>
  )
}

export default DashboardLeftSide
