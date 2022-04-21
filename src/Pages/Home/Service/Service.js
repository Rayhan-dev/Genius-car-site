import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  return (
    <div className="col-md-4">
      <Card className="m-2">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title>${price} </Card.Title>
          <Button variant="primary">Get Service</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
