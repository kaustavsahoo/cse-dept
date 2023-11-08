import React from "react";
const imageLinkStyle = {
  maxWidth: "150px", // Adjust the maximum width as needed
  marginLeft: "50px",
};
const ImageLink = ({ imageUrl, linkUrl, altText }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={altText} style={imageLinkStyle} />
    </a>
  );
};

export default ImageLink;
