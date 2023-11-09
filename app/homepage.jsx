import React from "react";
import bg from "./back.jpeg";
import Image from "next/image";
export default function HomePage() {
  const navbarStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "20px 0",
    color: "white",
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const buttonStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    fontFamily: "Poiret One",
    font: "30px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "30px",
  };

  return (
    <div
      style={{
        backgroundImage: "url(" + bg.src + ")",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <nav style={navbarStyle}>
        <h1 style={{ fontFamily: "Poiret One", marginLeft: "30px" }}>
          COMMUNISYNC
        </h1>
        <div>
          <button style={buttonStyle}>Login/Register</button>
        </div>
      </nav>
      <h1
        style={{
          position: "relative",
          top: "35vh",
          left: "3%",
          fontFamily: "Poiret One",
          fontSize: "80px",
          color: "white",
        }}
      >
        COMMUNISYNC
      </h1>
      <div
        style={{
          position: "relative",
          top: "35vh",
          left: "4%",
          fontFamily: "Poppins",
          fontSize: "15px",
          color: "white",
          width: "40%",
          lineHeight: "20px",
        }}
      >
        CommuniSync is a student interaction website designed for collaboration
        and project applications, fostering a sense of community among students.
        It offers dedicated spaces for project submissions, event calendars, and
        resource sharing. The platform supports student clubs and organizations,
        enhancing extracurricular involvement. Students can connect, stay
        informed, and apply for projects through this innovative platform,
        bridging the gap between traditional and digital learning experiences
      </div>
    </div>
  );
}
