import React, { useState } from "react";
import "./Rsvp.scss";
import { Button, Col, Form, Row } from "react-bootstrap";

function Rsvp() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="rsvp d-flex flex-column justify-content-center align-items-center ">
      <section className="hero d-flex justify-content-center align-items-center col-12">
        <div className="title-container col-12 ">
          {/* <h2 className="title"> August 1st, 2023</h2> */}

          <svg width="100%" height="100%">
            <text x="50%" y="60%" text-anchor="middle" className="title">
              RSVP
            </text>
          </svg>
        </div>
      </section>
      <section className="form col-8 text-start">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Row>
            <Form.Label>Name </Form.Label>
            <Col>
              <Form.Control
                required
                name="First Name"
                type="text"
                placeholder="First name"
                className="mb-3"
              />
            </Col>
            <Col>
              <Form.Control
                required
                name="Last Name"
                type="text"
                placeholder="Last name"
                className="mb-3"
              />
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Are you attending? </Form.Label>
            <Form.Control required as="textarea" rows={3} />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Who else is coming with you? </Form.Label>
            <Form.Control required as="textarea" rows={3} />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Message </Form.Label>
            <Form.Control required as="textarea" rows={3} />{" "}
          </Form.Group>

          <Button type="submit" className="col-12 main-btn mt-5">
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default Rsvp;
