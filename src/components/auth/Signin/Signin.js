import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Input } from "../../Layout";
import Layout from "../../Layout/Layout";


const Signin = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "3rem" }}>
          <Col md={{ span: 6, offset: 3 }} >
            <Form>
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
              <Button variant="primary" style={{ display:'flex'}} type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
