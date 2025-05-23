// import React from "react";
// import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
// import UploadPage from "./components/UploadPage";
// import PendingRequestsPage from "./components/PendingRequestsPage";
// import { Form } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <div style={styles.navbar}>
//         <div style={styles.logo}>Admin Dashboard - WFO Exception Tracker</div>
//         <div style={styles.navButtons}>
//           <Link to="/pending" style={styles.navBtn}>Pending Requests</Link>
//           <Link to="/upload" style={styles.navBtn}>EG Employee Uploads</Link>
//           <button style={styles.logoutBtn}>Log Out</button>
//         </div>
//       </div>

//       <Routes>
//         <Route path="/upload" element={<UploadPage />} />
//         <Route path="/pending" element={<PendingRequestsPage />} />
//         <Route path="*" element={<UploadPage />} /> {/* Default route */}
//       </Routes>
//     </Router>
//   );
// }

// const styles = {
//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "15px 20px",
//     alignItems: "center",
//     fontWeight: "bold",
//   },
//   logo: {
//     fontSize: "16px",
//   },
//   navButtons: {
//     display: "flex",
//     gap: "10px",
//   },
//   navBtn: {
//     backgroundColor: "#fff",
//     color: "#000",
//     border: "none",
//     fontWeight: "bold",
//     padding: "8px 12px",
//     textDecoration: "none",
//     cursor: "pointer",
//   },
//   logoutBtn: {
//     backgroundColor: "#fff",
//     color: "#000",
//     border: "none",
//     fontWeight: "bold",
//     padding: "8px 12px",
//     cursor: "pointer",
//   },
// };





const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    color: "#1f2937", // gray-800
    padding: "1rem 1.25rem", // px-5 py-4
    alignItems: "center",
    fontWeight: "600", // semi-bold
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)", // shadow-sm
    borderBottom: "1px solid #e5e7eb", // border-b border-gray-200
  },
  logo: {
    fontSize: "1.25rem", // text-xl
    color: "#111827", // gray-900
    fontWeight: "300", // font-light
  },
  navButtons: {
    display: "flex",
    gap: "0.75rem", // gap-3
    alignItems: "center",
  },
  navBtn: {
    backgroundColor: "transparent",
    color: "#4b5563", // gray-600
    border: "none",
    fontWeight: "500", // medium
    padding: "0.5rem 1rem", // px-4 py-2
    borderRadius: "0.375rem", // rounded-md
    cursor: "pointer",
    fontSize: "0.875rem", // text-sm
    transition: "all 0.2s ease",
    textDecoration: "none",
    ":hover": {
      backgroundColor: "#f3f4f6", // gray-100
      color: "#111827", // gray-900
    },
  },
  logoutBtn: {
    backgroundColor: "#f3f4f6", // gray-100
    color: "#111827", // gray-900
    border: "none",
    fontWeight: "500", // medium
    padding: "0.5rem 1rem", // px-4 py-2
    borderRadius: "0.375rem", // rounded-md
    cursor: "pointer",
    fontSize: "0.875rem", // text-sm
    transition: "all 0.2s ease",
    ":hover": {
      backgroundColor: "#e5e7eb", // gray-200
    },
  },
  activeNavBtn: {
    backgroundColor: "#e5e7eb", // gray-200
    color: "#111827", // gray-900
  },
};







// export default App;

 



















// import React from 'react';
// import './App.css';
// import WfoExceptionRequestForm from './components/WfoExceptionRequestForm';

// const App = () => {
//   return (
//     <div className="App">
//       <h1>WFO Exception Request</h1>
//       <WfoExceptionRequestForm />
//     </div>
//   );
// };

// export default App;








// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PendingRequestsPage from './components/PendingRequestsPage';
import UploadPage from './components/UploadPage';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 bg-gray-50">
          <Routes>
            <Route path="/pending-requests" element={<PendingRequestsPage />} />
            <Route path="/employee-uploads" element={<UploadPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;