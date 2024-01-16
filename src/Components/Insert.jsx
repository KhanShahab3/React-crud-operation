import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Insert = () => {
  const navigate = useNavigate();
  // State to store the fetched data
  const [StudentData, setStudentData] = useState([]);
  // State to manage loading state
  const [loading, setLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:1990/Student/", {
          headers: {
            "content-type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        setStudentData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Student Record</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>NIC</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {StudentData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.number}</td>
              <td>{row.nic}</td>
              <td>{row.dob}</td>

              <td>
                <Link to={`/update/${row.id}`}>
                  <button>Edit</button>
                </Link>
                <button
                  onClick={() => {
                    navigate(`/delete/${row.id}`);
                  }}
                >
                  Delete
                </button>
                <Link to="/insert">
                  <button>Insert</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <StudentRegsitration /> */}
    </div>
  );
};

export default Insert;
