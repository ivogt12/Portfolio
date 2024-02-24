import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const DownloadLink = ({ href, fileName }) => {
    const handleDownload = () => {
      fetch(href)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => console.error("Error downloading file:", error));
    };

    return (
      <Link onClick={handleDownload}>
        Download Resume
      </Link>
    );
  };

  return (
    <nav className="nav">
      <Link className="nav_childs" to="/">Home</Link>
      <Link className="nav_childs" to="/about">About</Link>
      <DownloadLink className="nav_childs" href="../data/ProfessionalResume.pdf" fileName="ProfessionalResume.pdf" />
      <Link className="nav_childs" to="/contact">Contact</Link>
    </nav>
  );
};

export default NavBar;