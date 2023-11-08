import { useState } from "react";
export default function EditProfile() {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("Option 1");

  const handleTextChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., send it to a server or perform some action
  };
  return (
    <div
      style={{
        position: "absolute",
        border: "1px solid black",
        borderRadius: "10px",
        width: "60%",
        left: "20%",
        top: "20vh",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h3
          style={{ marginLeft: "5px", marginTop: "2px", fontFamily: "Dosis" }}
        >
          Edit Profile
        </h3>
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios-glyphs/30/delete-sign.png"
          alt="delete-sign--v1"
          style={{ marginLeft: "85%", marginTop: "3px" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ marginTop: "0", marginLeft: "40px", fontFamily: "Dosis" }}>
          Bio:
        </p>
        <textarea
          style={{
            marginLeft: "20px",
            width: "80%",
            borderRadius: "20px",
            height: "15vh",
          }}
        ></textarea>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
        }}
      >
        <p style={{ marginTop: "0", marginLeft: "40px", fontFamily: "Dosis" }}>
          Coding Platforms:
        </p>
        <select
          value={dropdownValue}
          onChange={handleDropdownChange}
          style={{ marginLeft: "10px", height: "30px" }}
        >
          <option value="Codeforces">Codeforces</option>
          <option value="Codechef">Codechef</option>
          <option value="Leetcode">Leetcode</option>
        </select>
        <input
          style={{ marginLeft: "10px", height: "24px", width: "40%" }}
          placeholder="Enter Profile Link"
        ></input>
        <button
          style={{
            marginLeft: "10px",
            height: "30px",
            width: "10%",
            borderRadius: "5px",
            border: "1px solid black",
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}
