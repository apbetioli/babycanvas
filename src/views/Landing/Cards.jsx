import React from 'react';

import {
    Badge,
    Card,
    CardBody,
    CardImg,
    Container,
    Row,
    Col
} from "reactstrap";

import CreateButton from './CreateButton';

import './Cards.scss';

class Cards extends React.Component {

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col lg="12">
                        <Row className="row-grid">
                            <Col lg="4">
                                <Card className="shadow border-0">
                                    <CardImg top width="100%" src={require('assets/img/card2.jpg')} alt="..." />
                                    <CardBody className="py-5">
                                        <h6 className="text-success text-uppercase">
                                            Único
                                        </h6>
                                        <p className="description mt-3">
                                            Não há outro quadro igual o seu. Cada quadro é único e feito exclusivamente para você. Afinal, você também é.
                                        </p>
                                        {this.props.showBadges &&
                                            <div>
                                                <Badge color="success" pill className="mr-1">
                                                    único
                                                        </Badge>
                                                <Badge color="success" pill className="mr-1">
                                                    exclusivo
                                                        </Badge>
                                                <Badge color="success" pill className="mr-1">
                                                    seu
                                                </Badge>
                                            </div>
                                        }
                                        {this.props.showButton &&
                                            <CreateButton className="mt-4" color="success" />
                                        }
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="shadow border-0">
                                    <CardImg top width="100%" src={require('assets/img/card1.jpg')} alt="..." />
                                    <CardBody className="py-5">
                                        <h6 className="text-warning text-uppercase">
                                            Personalize
                                        </h6>
                                        <p className="description mt-3">
                                            Escreva uma mensagem demonstrando todo o seu amor e carinho a quem está só começando a vida.
                                        </p>
                                        {this.props.showBadges &&
                                            <div>
                                                <Badge color="warning" pill className="mr-1">
                                                    personalize
                                                    </Badge>
                                                <Badge color="warning" pill className="mr-1">
                                                    mensagem
                                                    </Badge>
                                                <Badge color="warning" pill className="mr-1">
                                                    amor
                                                </Badge>
                                            </div>
                                        }
                                        {this.props.showButton &&
                                            <CreateButton className="mt-4" color="warning" />
                                        }
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="shadow border-0">
                                    <CardImg top width="100%" src={require('assets/img/card3.jpg')} alt="..." />
                                    <CardBody className="py-5">
                                        <h6 className="text-primary text-uppercase">Surpreenda</h6>
                                        <p className="description mt-3">
                                            Presenteie ou envie um cartão presente e permita que a pessoa possa personalizar como quiser.
                                        </p>
                                        {this.props.showBadges &&
                                            <div>
                                                <Badge color="primary" pill className="mr-1">
                                                    surpreenda
                                                    </Badge>
                                                <Badge color="primary" pill className="mr-1">
                                                    presente
                                                    </Badge>
                                                <Badge color="primary" pill className="mr-1">
                                                    felicidade
                                                </Badge>
                                            </div>
                                        }
                                        {this.props.showButton &&
                                            <CreateButton className="mt-4" color="primary" />
                                        }
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Cards;