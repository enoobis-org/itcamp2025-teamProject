import React from "react";
import servicesData from "./servicesData";
import ServiceCard from "./ServiceCard";

const ServicesList = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {servicesData.map((service) => (
          <div className="col-md-3 mb-4" key={service.id}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
