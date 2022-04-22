import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services">
      <h1 className="text-center py-3 text-primary">Services We Provide</h1>
      <div className="row">
        <CardGroup>
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
        </CardGroup>
      </div>
    </div>
  );
};

export default Services;
