import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import "/src/css/Book.css";

const Students = ({ role }) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/student/students")
      .then((res) => {
        setStudents(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="student-list">
      {students.map((student) => {
        return (
          <StudentCard
            key={student.id}
            student={student}
            role={role}
          ></StudentCard>
        );
      })}
    </div>
  );
};

export default Students;
