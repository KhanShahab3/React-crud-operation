import { useState } from "react";
import { useImmer } from "use-immer";

export default function StudentRegsitration() {
  const [student, setStudent] = useImmer({
    firstName: "",
    lastName: "",
    cnic: "",
    city: "",
  });
  function handleFirstNameChange(e) {
    setStudent((draft) => {
      draft.firstName = e.target.value;
    });
  }
  function handleLastNameChange(e) {
    setStudent((draft) => {
      draft.lastName = e.target.value;
    });
  }
  function handleCNICChange(e) {
    setStudent((draft) => {
      draft.cnic = e.target.value;
    });
  }
  function handleCityChange(e) {
    setStudent((draft) => {
      draft.city = e.target.value;
    });
  }

  const [students, setStudents] = useState([]);
  function handleAddRecord() {
    // console.log(student);
    setStudents([...students, student]);
    setStudent({
      firstName: "",
      lastName: "",
      cnic: "",
      city: "",
    });
  }
  return (
    <>
      <h1>Student Registration</h1>
      <label>First Name</label>&nbsp;&nbsp;
      <input
        type="text"
        value={student.firstName}
        onChange={handleFirstNameChange}
      ></input>
      <br></br>
      <label>Last Name</label>&nbsp;&nbsp;
      <input
        type="text"
        value={student.lastName}
        onChange={handleLastNameChange}
      ></input>
      <br></br>
      <label>CNIC</label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        value={student.cnic}
        onChange={handleCNICChange}
      ></input>
      <br></br>
      <label>City</label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        value={student.city}
        onChange={handleCityChange}
      ></input>
      <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleAddRecord}>Save</button>
      <br></br>
      <ul>
        {/* {students.map((a) => (
          <li>{a.firstName}</li>
        ))} yours map function */}

        {students.map((item, index) => {
          return (
            <>
              <li key={index}>{item.firstName}</li>
              <li>{item.lastName}</li>
              <li>{item.cnic}</li>
              <li>{item.city}</li>
            </>
          );
        })}
        {/* edit map function */}
      </ul>
    </>
  );
}
