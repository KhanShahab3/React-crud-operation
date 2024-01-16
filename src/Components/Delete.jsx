import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Delete = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [studentData, setStudentData] = useState({});
  const getData = async () => {
    let response = await fetch(`http://localhost:1990/api/Student/${id}`);
    let result = await response.json();
    setStudentData(result);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleClick = async () => {
    try {
      const data = await fetch(`http://localhost:1990/api/Student/${id}`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });
      navigate("/");
    } catch (error) {
      console.log("error" + error.message);
    }
  };
  return (
    <div>
      <p>{studentData.name}</p>
      <p>{studentData.fatherName}</p>
      <p>{studentData.email}</p>
      <p>{studentData.number}</p>
      <p>{studentData.nic}</p>
      <p>{studentData.dob}</p>
      <h3>Are you sure to delete this record</h3>
      <button onClick={handleClick}>delete</button>
    </div>
  );
};
