import React from "react";
import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";

class Create extends React.Component {
    state = {};
    componentDidMount() {
    }
    render() {
        return <Container className="py-lg-md d-flex">
            <div className="col px-0">
                <Row>
                    <Col lg="6">
                        <h1 className="display-3 text-white">
                            A beautiful Design System{" "}
                            <span>completed with examples</span>
                        </h1>
                        <p className="lead text-white">
                            The design system comes with four pre-built pages to
                            help you get started faster. You can change the text and
                            images and you're good to go.
              </p>
                        <div className="btn-wrapper">
                            <Button
                                className="btn-icon mb-3 mb-sm-0"
                                color="info"
                                href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                            >
                                <span className="btn-inner--icon mr-1">
                                    <i className="fa fa-code" />
                                </span>
                                <span className="btn-inner--text">Components</span>
                            </Button>
                            <Button
                                className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                                color="default"
                                href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                            >
                                <span className="btn-inner--icon mr-1">
                                    <i className="ni ni-cloud-download-95" />
                                </span>
                                <span className="btn-inner--text">
                                    Download React
                                </span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>;
    }
}

export default Create;