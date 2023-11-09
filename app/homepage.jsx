import React from "react";
import { useSpring, animated } from "react-spring";
import bg from "./back.jpeg";
import logo from "./logo.png";
import Image from "next/image";

export default function HomePage() {
  // Define a spring animation for the entire content
  const contentAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500, // Add a delay for the animation
  });

  // Define a spring animation for the "COMMUNISYNC" h1 element to come in from the left
  const headingAnimation = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0)" },
    delay: 1000, // Delay the heading animation after the content animation
  });

  // Define animations for text content
  const textAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1500, // Delay the text animation after the content animation
  });

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
    // justifyContent: "space-between",
    alignItems: "center",
  };

  const buttonStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    fontFamily: "Poiret One",
    fontSize: "30px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "420%",
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
      <animated.nav style={{ ...navbarStyle, ...contentAnimation }}>
        <img style={{ width: "5%", marginLeft: "1%" }} src={logo.src}></img>
        <h1 style={{ fontFamily: "Poiret One", marginLeft: "1%" }}>
          COMMUNISYNC
        </h1>
        <div>
          <button style={buttonStyle}>Login/Register</button>
        </div>
      </animated.nav>
      <animated.div style={contentAnimation}>
        <animated.h1
          style={{
            position: "relative",
            top: "35vh",
            left: "3%",
            fontFamily: "Poiret One",
            fontSize: "80px",
            color: "white",
            ...headingAnimation, // Apply the heading animation
          }}
        >
          COMMUNISYNC
        </animated.h1>
        <animated.div
          style={{
            position: "relative",
            top: "35vh",
            left: "4%",
            fontFamily: "Poppins",
            fontSize: "15px",
            color: "white",
            width: "40%",
            lineHeight: "20px",
            ...textAnimation, // Apply the text animation
          }}
        >
          CommuniSync is a student interaction website designed for
          collaboration and project applications, fostering a sense of community
          among students. It offers dedicated spaces for project submissions,
          event calendars, and resource sharing. The platform supports student
          clubs and organizations, enhancing extracurricular involvement.
          Students can connect, stay informed, and apply for projects through
          this innovative platform, bridging the gap between traditional and
          digital learning experiences
        </animated.div>
      </animated.div>
    </div>
  );
}
