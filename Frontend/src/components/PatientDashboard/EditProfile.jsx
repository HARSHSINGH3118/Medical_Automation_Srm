import React from "react";
import "./EditProfile.css";

function EditProfile({ editData, setEditData, onSubmit }) {
  return (
    <div className="edit-profile-card">
      <h2>Edit Profile</h2>
      <form onSubmit={onSubmit} className="edit-profile-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Hostel Name</label>
          <input
            type="text"
            value={editData.hostelName}
            onChange={(e) =>
              setEditData({ ...editData, hostelName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Room No</label>
          <input
            type="text"
            value={editData.roomNo}
            onChange={(e) =>
              setEditData({ ...editData, roomNo: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Section</label>
          <input
            type="text"
            value={editData.section}
            onChange={(e) =>
              setEditData({ ...editData, section: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            value={editData.weight}
            onChange={(e) =>
              setEditData({ ...editData, weight: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Height (cm)</label>
          <input
            type="number"
            value={editData.height}
            onChange={(e) =>
              setEditData({ ...editData, height: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Disease (if any)</label>
          <input
            type="text"
            value={editData.disease}
            onChange={(e) =>
              setEditData({ ...editData, disease: e.target.value })
            }
          />
        </div>
        <button type="submit" className="submit-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
