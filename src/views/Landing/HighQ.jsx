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
                        <div className="pr-md-5 text-justify">
                            <div>
                                <h4 className="display-3">Memórias</h4>
                                <p>
                                    Acreditamos que algumas memórias nunca devem ser esquecidas, assim como as memórias dos nossos filhos quando bebês, 
                                    quando descobrimos que o que realmente importa são as pequenas coisas.
                                    Por isso criamos esta experiência para que você possa decorar seu ambiente e vivenciar todos os dias estas emoções.
                                </p>
                                <p>
                                    Disponível em forma impressa e digital ou como cartão presente:
                                </p>
                            </div>
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
                                                <i className="ni ni-settings-gear-65" />
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
                                                <i className="ni ni-settings-gear-65" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Tamanhos A4, A3 e A2</h6>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center" md="12">
                        <CreateButton color="success mt-5" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HighQ;