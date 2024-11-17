import { FaBell } from "react-icons/fa";


function AdminNavbar({pageTitle,replaceNavForm, replaceNavFormItem, logoimgUrl}) {


    return (
   
<nav class="navbar navbar-expand-lg bg-light p-3 border border-1 border-dark">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                            {/* <li class="nav-item">
                             <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
                            </li> */}
                            <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                            </li>
                            {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li> */}
                            {/* <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        <span className="" >
                            <FaBell />
                        </span>
                        <span className="btn-group dropstart ">                       
                    <h6 type="button" className=" ms-2" data-bs-toggle="dropdown" aria-expanded="false">
                        Admin
                    </h6>
                    <ul className="dropdown-menu  rounded-4">
                        <li className=''><a className="dropdown-item nav-dropdown-item  " href="/">Home</a></li>
                        <li className=''><a className="dropdown-item nav-dropdown-item " href="/">Logout</a></li>

                    </ul>                      
                </span> 
                        </div>
                    </div>
                    </nav>

    );
 
 
}

export default AdminNavbar;
