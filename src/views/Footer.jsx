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
          <Container>
            <Row>
              <Col md="12">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                    Quadro de giz
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
