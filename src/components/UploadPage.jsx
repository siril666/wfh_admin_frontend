// import React, { useState } from "react";
// import * as XLSX from "xlsx";
// import axios from "axios";

// const UploadPage = () => {
//   const [file, setFile] = useState(null);
//   const [data, setData] = useState([]);
//   const [showPreview, setShowPreview] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (!selectedFile) return;

//     setFile(selectedFile);

//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       const arrayBuffer = evt.target.result;
//       const wb = XLSX.read(arrayBuffer, { type: "array" });
//       const ws = wb.Sheets[wb.SheetNames[0]];
//       const jsonData = XLSX.utils.sheet_to_json(ws);

//       const mappedData = jsonData.map((row) => ({
//         Expedia_fG_Name: row["Expedia FG Name"],
//         ibsEmpId: row["ibsEmpId"],
//         JL: row["JL"],
//         Role: row["Role"],
//         Rate: row["Rate"],
//         HM: row["HM"],
//         Country: row["Country"],
//         Location: row["Location"],
//         SOW: row["SOW"],
//         SVP_Org: row["SVP Org"],
//         VP_Org: row["VP Org"],
//         Director_Org: row["Director Org"],
//         Team: row["Team"],
//         TeamOwner: row["Team Owner"],
//         TeamOwnerID: row["Team Owner ID"],
//         DM: row["DM"],
//         DM_ID: row["DM ID"],
//         Billiability: row["Billability"],
//         Remarks: row["Remarks"],
//       }));

//       setData(mappedData);
//       setShowPreview(false);
//     };

//     reader.readAsArrayBuffer(selectedFile);
//   };

//   const handlePreview = () => {
//     if (!data.length) {
//       alert("Please upload a valid Excel file first.");
//       return;
//     }
//     setShowPreview(true);
//   };

//   const handleUpload = async () => {
//     if (!data.length) {
//       alert("No data to upload.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:8083/api/employees/upload", data, {
//         headers: { "Content-Type": "application/json" },
//       });
//       alert("Data uploaded successfully!");
//       setFile(null);
//       setData([]);
//       setShowPreview(false);
//     } catch (err) {
//       console.error("Upload error:", err.response?.data || err.message);
//       alert("Upload failed");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* <div style={styles.navbar}>
//         <div style={styles.logo}>Admin Dashboard - WFO Exception Tracker</div>
//         <div style={styles.navButtons}>
//           <button style={styles.navBtn}>Pending Requests</button>
//           <button style={styles.navBtn}>EG Employee Uploads</button>
//           <button style={styles.logoutBtn}>Log Out</button>
//         </div>
//       </div> */}

//       <div style={styles.card}>
//         <h2>Upload Employee Details</h2>
//         <div style={styles.controls}>
//           <input type="file" onChange={handleFileChange} />
//           {file && <span>{file.name}</span>}
//           <button style={styles.previewBtn} onClick={handlePreview}>
//             Preview
//           </button>
//           <button
//             style={styles.uploadBtn}
//             onClick={handleUpload}
//             disabled={!data.length}
//           >
//             Upload
//           </button>
//         </div>

//         {showPreview && (
//           <div style={styles.tableWrapper}>
//             <table style={styles.table}>
//               <thead>
//                 <tr>
//                   <th style={styles.th}>Expedia_fG_Name</th>
//                   <th style={styles.th}>ibsEmpId</th>
//                   <th style={styles.th}>JL</th>
//                   <th style={styles.th}>Role</th>
//                   <th style={styles.th}>Rate</th>
//                   <th style={styles.th}>HM</th>
//                   <th style={styles.th}>Country</th>
//                   <th style={styles.th}>Location</th>
//                   <th style={styles.th}>SOW</th>
//                   <th style={styles.th}>SVP_Org</th>
//                   <th style={styles.th}>VP_Org</th>
//                   <th style={styles.th}>Director_Org</th>
//                   <th style={styles.th}>Team</th>
//                   <th style={styles.th}>TeamOwner</th>
//                   <th style={styles.th}>TeamOwnerID</th>
//                   <th style={styles.th}>DM</th>
//                   <th style={styles.th}>DM_ID</th>
//                   <th style={styles.th}>Billiability</th>
//                   <th style={styles.th}>Remarks</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((row, index) => (
//                   <tr key={index}>
//                     <td style={styles.td}>{row.Expedia_fG_Name}</td>
//                     <td style={styles.td}>{row.ibsEmpId}</td>
//                     <td style={styles.td}>{row.JL}</td>
//                     <td style={styles.td}>{row.Role}</td>
//                     <td style={styles.td}>{row.Rate}</td>
//                     <td style={styles.td}>{row.HM}</td>
//                     <td style={styles.td}>{row.Country}</td>
//                     <td style={styles.td}>{row.Location}</td>
//                     <td style={styles.td}>{row.SOW}</td>
//                     <td style={styles.td}>{row.SVP_Org}</td>
//                     <td style={styles.td}>{row.VP_Org}</td>
//                     <td style={styles.td}>{row.Director_Org}</td>
//                     <td style={styles.td}>{row.Team}</td>
//                     <td style={styles.td}>{row.TeamOwner}</td>
//                     <td style={styles.td}>{row.TeamOwnerID}</td>
//                     <td style={styles.td}>{row.DM}</td>
//                     <td style={styles.td}>{row.DM_ID}</td>
//                     <td style={styles.td}>{row.Billiability}</td>
//                     <td style={styles.td}>{row.Remarks}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "#f5f5f5",
//     minHeight: "100vh",
//     padding: "20px",
//   },
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
//   card: {
//     backgroundColor: "#ddd",
//     borderRadius: "8px",
//     padding: "30px",
//     marginTop: "30px",
//   },
//   controls: {
//     display: "flex",
//     alignItems: "center",
//     gap: "15px",
//     marginBottom: "20px",
//     flexWrap: "wrap",
//   },
//   previewBtn: {
//     backgroundColor: "#fff",
//     fontWeight: "bold",
//     padding: "10px 20px",
//     cursor: "pointer",
//     border: "none",
//   },
//   uploadBtn: {
//     backgroundColor: "#fff",
//     fontWeight: "bold",
//     padding: "10px 20px",
//     cursor: "pointer",
//     border: "none",
//   },
//   tableWrapper: {
//     overflowX: "auto",
//     width: "100%",
//   },
//   table: {
//     width: "100%",
//     minWidth: "1200px", // Allows scrolling on small screens
//     backgroundColor: "#fff",
//     borderCollapse: "collapse",
//     marginTop: "20px",
//   },
//   th: {
//     textAlign: "left",
//     padding: "12px",
//     borderBottom: "2px solid #ccc",
//     backgroundColor: "#f0f0f0",
//     whiteSpace: "nowrap",
//   },
//   td: {
//     textAlign: "left",
//     padding: "12px",
//     borderBottom: "1px solid #ddd",
//     whiteSpace: "nowrap",
//   },
// };

// export default UploadPage;









import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (evt) => {
      const arrayBuffer = evt.target.result;
      const wb = XLSX.read(arrayBuffer, { type: "array" });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(ws);

      const mappedData = jsonData.map((row) => ({
        Expedia_fG_Name: row["Expedia FG Name"],
        ibsEmpId: row["ibsEmpId"],
        JL: row["JL"],
        Role: row["Role"],
        Rate: row["Rate"],
        HM: row["HM"],
        Country: row["Country"],
        Location: row["Location"],
        SOW: row["SOW"],
        SVP_Org: row["SVP Org"],
        VP_Org: row["VP Org"],
        Director_Org: row["Director Org"],
        Team: row["Team"],
        TeamOwner: row["Team Owner"],
        TeamOwnerID: row["Team Owner ID"],
        DM: row["DM"],
        DM_ID: row["DM ID"],
        Billiability: row["Billiability"],
        Remarks: row["Remarks"],
      }));

      setData(mappedData);
      setShowPreview(false);
    };

    reader.readAsArrayBuffer(selectedFile);
  };

  const handlePreview = () => {
    if (!data.length) {
      alert("Please upload a valid Excel file first.");
      return;
    }
    setShowPreview(true);
  };

  const handleUpload = async () => {
    if (!data.length) {
      alert("No data to upload.");
      return;
    }

    try {
      await axios.post("http://localhost:8083/api/employees/upload", data, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Data uploaded successfully!");
      setFile(null);
      setData([]);
      setShowPreview(false);
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      alert("Upload failed");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-light text-gray-800">Upload Employee Data</h1>
      </div>

      {/* Upload Card */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-light text-gray-800 mb-6">Upload Employee Details</h2>
        
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <label className="block">
            <span className="sr-only">Choose file</span>
            <input 
              type="file" 
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
              accept=".xlsx, .xls"
            />
          </label>
          
          {file && (
            <span className="text-sm text-gray-700">
              Selected: {file.name}
            </span>
          )}
          
          <button
            onClick={handlePreview}
            disabled={!data.length}
            className={`px-4 py-2 rounded-md text-sm ${
              data.length 
                ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Preview
          </button>
          
          <button
            onClick={handleUpload}
            disabled={!data.length}
            className={`px-4 py-2 rounded-md text-sm ${
              data.length 
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            Upload
          </button>
        </div>

        {showPreview && (
          <div className="mt-6 overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="shadow-sm overflow-hidden border-b border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expedia FG</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emp ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">JL</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HM</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SOW</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SVP_Org</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VP_Org</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Director_Org</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TeamOwner</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TeamOwnerID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DM</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DM_ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Billiability</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>

                      
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.slice(0, 10).map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Expedia_fG_Name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.ibsEmpId}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.JL}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Rate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.HM}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Country}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.SOW}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.SVP_Org}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.VP_Org}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Director_Org}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Team}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.TeamOwner}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.TeamOwnerID}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.DM}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.DM_ID}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Billiability}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Remarks}</td>

                      </tr>
                    ))}
                  </tbody>
                </table>
                {data.length > 10 && (
                  <div className="px-6 py-3 text-sm text-gray-500 bg-gray-50">
                    Showing first 10 of {data.length} rows
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;


























