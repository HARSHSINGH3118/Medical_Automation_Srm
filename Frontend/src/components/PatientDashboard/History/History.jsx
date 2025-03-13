import React from "react";
import "./History.css";

function History({ appointments, onRevisit }) {
  // Calculate the date 4 months ago from today (for filtering)
  const fourMonthsAgo = new Date();
  fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 4);

  // Filter appointments within the last 4 months
  const recentAppointments = appointments.filter((apt) => {
    const aptDate = new Date(apt.date);
    return aptDate >= fourMonthsAgo;
  });

  // Handler for the "Revisit" button:
  const handleRevisit = (id) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const todayStr = `${yyyy}-${mm}-${dd}`;
    if (onRevisit) {
      onRevisit(id, todayStr);
    }
  };

  return (
    <div className="history-section-new">
      <h2>Medical History (Last 4 Months)</h2>
      {recentAppointments.length > 0 ? (
        <div className="history-grid">
          {recentAppointments.map((apt) => {
            // Convert the ISO date to a human-readable format
            const dateObj = new Date(apt.date);
            const readableDate = dateObj.toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            });

            return (
              <div key={apt.id} className="history-card">
                <p>
                  <strong>Date:</strong> {readableDate}
                </p>
                <p>
                  <strong>Doctor:</strong> {apt.doctor || "Not assigned"}
                </p>
                <p>
                  <strong>Symptoms:</strong> {apt.details}
                </p>
                <p>
                  <strong>Prescription:</strong>{" "}
                  {apt.prescription || "Not provided yet"}
                </p>
                {apt.status === "Accepted" && (
                  <button
                    className="revisit-btn"
                    onClick={() => handleRevisit(apt.id)}
                  >
                    Revisit
                  </button>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p>No recent appointments in the last 4 months.</p>
      )}
    </div>
  );
}

export default History;
