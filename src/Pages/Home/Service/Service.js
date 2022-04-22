import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();
  const navigateToServiceDetails =(id)=> {
    navigate(`/service/${id}`)
  }
  return (
    <div className="col-md-4">
      <Card className="m-2">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title>${price} </Card.Title>
          <Button onClick={()=>navigateToServiceDetails(id)} variant="primary">Book : {name}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
