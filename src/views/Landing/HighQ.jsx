import React from 'react';

import {
    Badge,
    Container,
    Row,
    Col
} from "reactstrap";
import CreateButton from './CreateButton';

class HighQ extends React.Component {
    render() {
        return (
            <Container>
                <Row className="row-grid align-items-center">
                    <Col className="order-md-2" md="6">
                        <img
                            alt="..."
                            className="img-fluid "
                            src={require("assets/img/high-quality.jpg")}
                        />
                    </Col>
                    <Col className="order-md-1" md="6">
                        <div className="pr-md-5">
                            {this.props.showTitle &&
                                <div>
                                    <h3>Alta qualidade</h3>
                                    <p>
                                        Criado com o melhor em tecnologia de impressão em papel fotográfico com acabamento fosco.
                                    </p>
                                </div>
                            }                                    
                            <ul className="list-unstyled mt-5">
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle mr-3"
                                                color="success"
                                            >
                                                <i className="ni ni-settings-gear-65" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Impressão de alta qualidade</h6>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle mr-3"
                                                color="success"
                                            >
                                                <i className="ni ni-html5" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Acabamento fosco</h6>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle mr-3"
                                                color="success"
                                            >
                                                <i className="ni ni-satisfied" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Tamanho 70x50cm</h6>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle mr-3"
                                                color="success"
                                            >
                                                <i className="ni ni-satisfied" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Retrato ou paisagem</h6>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <CreateButton color="success mt-5"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HighQ;