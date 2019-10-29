import React from "react";

import {
  Container,
  Row,
  Col
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <hr />
          <Container>
            <Row className=" align-items-center justify-content-md-between">
              <Col md="12">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                    Baby Canvas
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
