import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [stdData, setStdData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:1990/api/Student/${id}`)
      .then((response) => response.json())
      .then((data) => setStdData(data));
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStdData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1990/api/Student/${id}", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stdData),
      });
      if (!response) {
        throw new Error(`failed to update the data ${response.status}`);
      }
      navigate("/");
    } catch (error) {
      console.log("error occur du to" + error.message);
    }
  };

  return (
    <div>
      {" "}
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={stdData.name}
          />
        </label>

        <label>
          Father's Name:
          <input
            type="text"
            name="fatherName"
            onChange={handleChange}
            value={stdData.fatherName}
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={stdData.email}
          />
        </label>

        <label>
          Number:
          <input
            type="text"
            name="number"
            onChange={handleChange}
            value={stdData.number}
          />
        </label>

        <label>
          NIC:
          <input
            type="text"
            name="nic"
            onChange={handleChange}
            value={stdData.nic}
          />
        </label>

        <label>
          DOB:
          <input
            type="text"
            name="dob"
            onChange={handleChange}
            value={stdData.dob}
          />
        </label>

        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};
