import React, { useEffect, useState } from "react";
import axios from "axios";

const PendingRequestsPage = () => {
  const [pendingEmployees, setPendingEmployees] = useState([]);
  const [error, setError] = useState("");

  const fetchPendingRequests = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/pending-requests");
      setPendingEmployees(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load pending requests.");
    }
  };

  const handleVerify = async (empId) => {
    try {
      await axios.post(`http://localhost:8080/api/admin/verify/${empId}`);
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
    <div style={styles.container}>
      <h2 style={styles.heading}>Pending Employee Verifications</h2>
      {error && <p style={styles.error}>{error}</p>}
      {!error && pendingEmployees.length === 0 && <p>No pending requests.</p>}
      {pendingEmployees.length > 0 && (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Emp ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Role</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Location</th>
                <th style={styles.th}>Country</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingEmployees.map((emp) => (
                <tr key={emp.ibsEmpId} style={styles.tr}>
                  <td style={styles.td}>{emp.ibsEmpId}</td>
                  <td style={styles.td}>{emp.userName}</td>
                  <td style={styles.td}>{emp.role}</td>
                  <td style={styles.td}>{emp.emailId}</td>
                  <td style={styles.td}>{emp.phoneNumber}</td>
                  <td style={styles.td}>{emp.location}</td>
                  <td style={styles.td}>{emp.country}</td>
                  <td style={styles.td}>
                    <button style={styles.button} onClick={() => handleVerify(emp.ibsEmpId)}>
                      Verify
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  error: {
    color: "red",
  },
  tableWrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "1000px", // Ensures space for all columns
    backgroundColor: "#fff",
  },
  th: {
    padding: "12px 16px",
    backgroundColor: "#f0f0f0",
    borderBottom: "2px solid #ddd",
    textAlign: "left",
    whiteSpace: "nowrap",
  },
  td: {
    padding: "12px 16px",
    borderBottom: "1px solid #ddd",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  },
  tr: {
    transition: "background-color 0.2s",
  },
  button: {
    padding: "6px 12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default PendingRequestsPage;
