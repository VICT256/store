import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './Context/Authcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
       <UserContextProvider>
        <App />
       </UserContextProvider> 
    </BrowserRouter>
    
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// import React from 'react';
// import { Routes, Route, Link, Navigate  } from 'react-router-dom';

//  const App = () => {

//   const [user, setUser] = React.useState(null);

//   const handleLogin = () => setUser({ id: '1', name: 'robin' });
//   const handleLogout = () => setUser(null);


//   return (
//     <>
//       <h1>React Router</h1>

//       <Navigation />

//       {user ? (
//         <button onClick={handleLogout}>Clear  User</button>
//       ) : (
//         <button onClick={handleLogin}>Set User</button>
//       )}

//       <Routes>
//         <Route index element={<Landing />} />
//         <Route path="landing" element={<Landing />} />
//         <Route
//           path="home"
//           element={
//             <ProtectedRoute user={user}>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="dashboard"
//           element={
//             <ProtectedRoute user={user}>
//               <Dashboard  />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="analytics" element={<Analytics />} />
//         <Route path="admin" element={<Admin />} />
//         <Route path="*" element={<p>There's nothing here: 404!</p>} />
//       </Routes>
//     </>
//   );
// };

// const Navigation = () => (
//   <nav class="d-block justify-content-center">
//     <Link to="/landing">Landing</Link>
//     <Link to="/home">Home</Link>
//     <Link to="/dashboard">Dashboard</Link>
//     <Link to="/analytics">Analytics</Link>
//     <Link to="/admin">Admin</Link>
//   </nav>
// );

// export default App;

// const ProtectedRoute = ({ user, children }) => {
//   if (!user) {
//     return <Navigate to="/landing" replace />;
//   }

//   return children;
// };

// const Landing = () => {
//   return <h2>Landing (Public: anyone can access this page)</h2>;
// };

// const Home = () => {
//   return <h2>Home (Protected: authenticated user required)</h2>;
// };

// const Dashboard = () => {
//   return <h2>Dashboard (Protected: authenticated user required)</h2>;
// };

// const Analytics = () => {
//   return (
//     <h2>
//       Analytics (Protected: authenticated user with permission
//       'analyze' required)
//     </h2>
//   );
// };

// const Admin = () => {
//   return (
//     <h2>
//       Admin (Protected: authenticated user with role 'admin' required)
//     </h2>
//   );
// };

    
      


      

// // Name
// // Description
// // Price
// // KYC info
// // Add or remove admin

// // Card Payment Strategies


