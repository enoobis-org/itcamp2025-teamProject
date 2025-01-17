import React from "react";

const ServiceCard = ({ icon, title, subtitle }) => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <i className={`${icon} display-4 mb-3`} style={{ color: "#007bff" }}></i>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
