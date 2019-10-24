import React from 'react';

import {
    Container,
    Row,
    Col
} from "reactstrap";
import CreateButton from './CreateButton';

class Guarantee extends React.Component {
    render() {
        return (
            <div>
                <Container className="pt-lg pb-100">
                    <Row className="text-center justify-content-center">
                        <Col lg="12">
                            <h2 className="display-3 text-white">Mais Benefícios</h2>
                            <p className="lead text-white">
                                Nós garantimos a sua satisfação com o nosso produto. Caso não fique satisfeito nós devolvemos o seu dinheiro.
                            </p>
                        </Col>
                    </Row>
                    <Row className="row-grid mt-5">
                        <Col lg="4">
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="ni ni-delivery-fast text-primary" />
                            </div>
                            <h5 className="text-white mt-3">Frete Grátis</h5>
                            <p className="text-white mt-3">
                                Frete grátis para todo o mundo.
                            </p>
                        </Col>
                        <Col lg="4">
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="fa fa-paypal" aria-hidden="true"></i>
                            </div>
                            <h5 className="text-white mt-3">Pagamento seguro</h5>
                            <p className="text-white mt-3">
                                O pagamento é processado com segurança pelo Paypal.
                            </p>
                        </Col>
                        <Col lg="4">
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="fa fa-info" aria-hidden="true"></i>
                            </div>
                            <h5 className="text-white mt-3">Suporte</h5>
                            <p className="text-white mt-3">
                                Tem dúvidas? Entre em contato conosco pelo formulário abaixo.
                            </p>
                        </Col>
                    </Row>
                    <Row className="text-center justify-content-center pt-100">
                        <Col lg="12">
                            <CreateButton color="white"/>
                        </Col>
                    </Row>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew zindex-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="fill-white"
                            points="2560 0 2560 100 0 100"
                        />
                    </svg>
                </div>
            </div>
        );
    }
}

export default Guarantee;