// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const PendingRequestsPage = () => {
//   const [pendingEmployees, setPendingEmployees] = useState([]);
//   const [error, setError] = useState("");

//   const fetchPendingRequests = async () => {
//     try {
//       const response = await axios.get("http://localhost:8083/api/admin/pending-requests");
//       setPendingEmployees(response.data);
//       setError("");
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setError("Failed to load pending requests.");
//     }
//   };

//   const handleVerify = async (empId) => {
//     try {
//       await axios.post(`http://localhost:8083/api/admin/verify/${empId}`);
//       setPendingEmployees((prev) => prev.filter((emp) => emp.ibsEmpId !== empId));
//     } catch (err) {
//       console.error(`Error verifying employee ${empId}:`, err);
//       alert(`Failed to verify ${empId}`);
//     }
//   };

//   useEffect(() => {
//     fetchPendingRequests();
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Pending Employee Verifications</h2>
//       {error && <p style={styles.error}>{error}</p>}
//       {!error && pendingEmployees.length === 0 && <p>No pending requests.</p>}
//       {pendingEmployees.length > 0 && (
//         <div style={styles.tableWrapper}>
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th style={styles.th}>Emp ID</th>
//                 <th style={styles.th}>Name</th>
//                 <th style={styles.th}>Role</th>
//                 <th style={styles.th}>Email</th>
//                 <th style={styles.th}>Phone</th>
//                 <th style={styles.th}>Location</th>
//                 <th style={styles.th}>Country</th>
//                 <th style={styles.th}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pendingEmployees.map((emp) => (
//                 <tr key={emp.ibsEmpId} style={styles.tr}>
//                   <td style={styles.td}>{emp.ibsEmpId}</td>
//                   <td style={styles.td}>{emp.userName}</td>
//                   <td style={styles.td}>{emp.role}</td>
//                   <td style={styles.td}>{emp.emailId}</td>
//                   <td style={styles.td}>{emp.phoneNumber}</td>
//                   <td style={styles.td}>{emp.location}</td>
//                   <td style={styles.td}>{emp.country}</td>
//                   <td style={styles.td}>
//                     <button style={styles.button} onClick={() => handleVerify(emp.ibsEmpId)}>
//                       Verify
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: "30px",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "#f9f9f9",
//     minHeight: "100vh",
//   },
//   heading: {
//     fontSize: "24px",
//     marginBottom: "20px",
//   },
//   error: {
//     color: "red",
//   },
//   tableWrapper: {
//     overflowX: "auto",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     minWidth: "1000px", // Ensures space for all columns
//     backgroundColor: "#fff",
//   },
//   th: {
//     padding: "12px 16px",
//     backgroundColor: "#f0f0f0",
//     borderBottom: "2px solid #ddd",
//     textAlign: "left",
//     whiteSpace: "nowrap",
//   },
//   td: {
//     padding: "12px 16px",
//     borderBottom: "1px solid #ddd",
//     verticalAlign: "middle",
//     whiteSpace: "nowrap",
//   },
//   tr: {
//     transition: "background-color 0.2s",
//   },
//   button: {
//     padding: "6px 12px",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };

// export default PendingRequestsPage;











// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const PendingRequestsPage = () => {
//   const [pendingEmployees, setPendingEmployees] = useState([]);
//   const [error, setError] = useState("");

//   const fetchPendingRequests = async () => {
//     try {
//       const response = await axios.get("http://localhost:8083/api/admin/pending-requests");
//       setPendingEmployees(response.data);
//       setError("");
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setError("Failed to load pending requests.");
//     }
//   };

//   const handleVerify = async (empId) => {
//     try {
//       await axios.post(`http://localhost:8083/api/admin/verify/${empId}`);
//       setPendingEmployees((prev) => prev.filter((emp) => emp.ibsEmpId !== empId));
//     } catch (err) {
//       console.error(`Error verifying employee ${empId}:`, err);
//       alert(`Failed to verify ${empId}`);
//     }
//   };

//   useEffect(() => {
//     fetchPendingRequests();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-light text-gray-800">Pending Employee Verifications</h1>
//       </div>

//       {/* Error message */}
//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
//           {error}
//         </div>
//       )}

//       {/* Content */}
//       {!error && pendingEmployees.length === 0 ? (
//         <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500">
//           No pending requests found.
//         </div>
//       ) : (
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-light text-gray-800">
//                 Pending Verification Requests
//               </h2>
//               <div className="text-sm text-gray-500">
//                 Showing: {pendingEmployees.length} requests
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emp ID</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {pendingEmployees.map((emp) => (
//                     <tr key={emp.ibsEmpId}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.ibsEmpId}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.userName}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.role}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.emailId}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.phoneNumber}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.location}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.country}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                         <button
//                           onClick={() => handleVerify(emp.ibsEmpId)}
//                           className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm"
//                         >
//                           Verify
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PendingRequestsPage;








// src/components/PendingRequestsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const PendingRequestsPage = () => {
  const [pendingEmployees, setPendingEmployees] = useState([]);
  const [error, setError] = useState("");

  // ... (keep your existing state and logic)



  const fetchPendingRequests = async () => {
    try {
      const response = await axios.get("http://localhost:8083/api/admin/pending-requests");
      setPendingEmployees(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load pending requests.");
    }
  };

  const handleVerify = async (empId) => {
    try {
      await axios.post(`http://localhost:8083/api/admin/verify/${empId}`);
      setPendingEmployees((prev) => prev.filter((emp) => emp.ibsEmpId !== empId));
    } catch (err) {
      console.error(`Error verifying employee ${empId}:`, err);
      alert(`Failed to verify ${empId}`);
    }
  };

  useEffect(() => {
    fetchPendingRequests();
  }, []);




  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-light text-gray-800 mb-2">Pending Employee Verifications</h1>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {!error && pendingEmployees.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500">
          No pending requests found.
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-light text-gray-800">
              Pending Verification Requests
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Showing {pendingEmployees.length} requests
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emp ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingEmployees.map((emp) => (
                  <tr key={emp.ibsEmpId}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.ibsEmpId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.userName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.emailId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.phoneNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{emp.country}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button
                        onClick={() => handleVerify(emp.ibsEmpId)}
                        className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-xs"
                      >
                        Verify
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingRequestsPage;