import React from "react";
const imageLinkStyle = {
  maxWidth: "150px", // Adjust the maximum width as needed
  marginLeft: "50px",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
};
const ProjectLink = ({ linkUrl }) => {
  return (
    <div style={imageLinkStyle}>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-project-crowdfunding-flaticons-lineal-color-flat-icons-2.png"
          alt="Project"
        />
      </a>
      <p style={{ marginTop: "0", fontFamily: "Poppins" }}>Project Name</p>
    </div>
  );
};

export default ProjectLink;
