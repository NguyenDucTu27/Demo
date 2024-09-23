import React from "react";
import { Link } from "react-router-dom";

const StudentCard = ({ student, role }) => {
  const { roll, username, grade, password } = student;
  return (
    <div className="student-card">
      <div className="student-details">
        <h3>{roll}</h3>
        <p>{username}</p>
        <p>{grade}</p>
      </div>
      {role === "admin" && (
        <div className="student-actions">
          <button>
            <Link to={`/student/${student._id}`} className="btn-link">
              edit
            </Link>
          </button>
          <button>
            <Link to={`/deletee/${student._id}`} className="btn-link">
              delete
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
