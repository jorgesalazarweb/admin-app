import React from "react";

import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Input } from "../../Layout";
import Layout from "../../Layout/Layout";

const Signup = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "3rem" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                placeholder="Email"
                value=""
                type="email"
                onChange={() => {}}
              />

              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
