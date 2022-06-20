import { Text, Avatar, Card, Container, Spacer } from "@nextui-org/react";
import React from "react";
import './Review.css';

export default function Review(props) {
  const { img, name, role, desc } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <Container fluid >
      <Card css={{ mw: "100%" }} style={{padding:"0 30px"}}>
        <Card.Body>
          <p align="center">
          <Avatar
            text="Secondary"
            color="secondary"
            textColor="white"
            css={{ size: "$40" }}
          />
          </p>
          <Text h2 style={{ textAlign: "center" }}>
            {name}
          </Text>
          <Text b  style={{ textAlign: "center" }} weight="normal">
            <span className="c-pill">
            {role}

            </span>
          </Text>
          <Spacer y={1} />
          
          <Text b style={{ textAlign: "center" }} weight="normal" className="grey">
            {desc}
          </Text>
          <Spacer y={1} />
        </Card.Body>
      </Card>
      </Container>
    </div>
  );
}
