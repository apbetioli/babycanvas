import React from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import CreateButton from '../Components/CreateButton';

class Guarantee extends React.Component {
    render() {
        return (
            <div>
                <Container className="pt-lg">
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
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-success">
                                <i className="ni ni-delivery-fast" aria-hidden="true"></i>
                            </div>
                            <h5 className="text-white mt-3">Frete Grátis</h5>
                            <p className="text-white mt-3">
                                Frete grátis para todo o mundo.
                            </p>
                        </Col>
                        <Col lg="4">
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-success">
                                <i className="fa fa-paypal" aria-hidden="true"></i>
                            </div>
                            <h5 className="text-white mt-3">Pagamento seguro</h5>
                            <p className="text-white mt-3">
                                O pagamento é processado com segurança pelo Paypal.
                            </p>
                        </Col>
                        <Col lg="4">
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-success">
                                <i className="fa fa-info" aria-hidden="true"></i>
                            </div>
                            <h5 className="text-white mt-3">Suporte</h5>
                            <p className="text-white mt-3">
                                Tem dúvidas? <Link to="/contact">Entre em contato conosco.</Link>
                            </p>
                        </Col>
                    </Row>
                    <Row className="text-center justify-content-center">
                        <Col lg="12">
                            <CreateButton color="white mt-5"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Guarantee;