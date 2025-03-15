// LeaveStatus.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LeaveStatus.css";

function LeaveStatus() {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const fetchLeaveStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/patient/leave-forms",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // Assume the response contains { leaveForms: [...] }
        setLeaveRequests(response.data.leaveForms || []);
      } catch (error) {
        console.error("Error fetching leave status:", error);
        setLeaveRequests([]);
      }
    };

    fetchLeaveStatus();
  }, []);

  return (
    <div className="leave-status-container">
      <h2>Your Leave Requests</h2>
      {Array.isArray(leaveRequests) && leaveRequests.length > 0 ? (
        <div className="leave-cards-container">
          {leaveRequests.map((req) => (
            <div key={req._id} className="leave-card">
              <p>
                <strong>Reason:</strong> {req.reason}
              </p>
              <p>
                <strong>Duration:</strong>{" "}
                {req.illnessStartDate
                  ? new Date(req.illnessStartDate).toLocaleDateString()
                  : "N/A"}{" "}
                to{" "}
                {req.illnessEndDate
                  ? new Date(req.illnessEndDate).toLocaleDateString()
                  : "N/A"}
              </p>
              <p>
                <strong>Status:</strong> {req.status}
              </p>
              {req.reportFile && (
                <p>
                  <strong>Report:</strong> Report Uploaded
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No leave requests found.</p>
      )}
    </div>
  );
}

export default LeaveStatus;
