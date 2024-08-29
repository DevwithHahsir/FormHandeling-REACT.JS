/*Deslint-disableDno-unused-varsD*/
import { useState } from "react";
import "./index.css";
function App() {
  const [ChangeInput, SetChangeInput] = useState([]);

  const HandelChange = (e) => {
    SetChangeInput({ ...ChangeInput, [e.target.name]: e.target.value });
    console.log(ChangeInput);
  };

  const HandleSubmitt = () => {
    const dataToSave = JSON.stringify(ChangeInput); // Convert object to JSON string
    localStorage.setItem("formData", dataToSave); // Store data with a key "formData"
    console.log(dataToSave); // Optional: Log the saved data for verification
  };

  return (
    <>

    <h1>Enter your details</h1>
      <form action="">
        <div className="name-container">
          <div className="fname">
            <input type="text" name="fname" id="" onChange={HandelChange} />
          </div>

          <div className="lname">
            <input type="text" name="lname" id="" onChange={HandelChange} />
          </div>

          <div className="email">
            <input type="email" name="email" id="" onChange={HandelChange} />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              id=""
              onChange={HandelChange}
            />
          </div>
          <button onClick={HandleSubmitt}> Submitt</button>
        </div>
      </form>
    </>
  );
}

export default App;
