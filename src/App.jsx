import React from "react";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import UploadPage from "./components/UploadPage";
import PendingRequestsPage from "./components/PendingRequestsPage";
import { Form } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={styles.navbar}>
        <div style={styles.logo}>Admin Dashboard - WFO Exception Tracker</div>
        <div style={styles.navButtons}>
          <Link to="/pending" style={styles.navBtn}>Pending Requests</Link>
          <Link to="/upload" style={styles.navBtn}>EG Employee Uploads</Link>
          <button style={styles.logoutBtn}>Log Out</button>
        </div>
      </div>

      <Routes>
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/pending" element={<PendingRequestsPage />} />
        <Route path="*" element={<UploadPage />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#000",
    color: "#fff",
    padding: "15px 20px",
    alignItems: "center",
    fontWeight: "bold",
  },
  logo: {
    fontSize: "16px",
  },
  navButtons: {
    display: "flex",
    gap: "10px",
  },
  navBtn: {
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    fontWeight: "bold",
    padding: "8px 12px",
    textDecoration: "none",
    cursor: "pointer",
  },
  logoutBtn: {
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    fontWeight: "bold",
    padding: "8px 12px",
    cursor: "pointer",
  },
};

export default App;

 



















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
