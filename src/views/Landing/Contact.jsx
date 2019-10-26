import React from 'react';

import classnames from "classnames";

import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

class Contact extends React.Component {
    state = {};
    render() {
        return (
            <Container>
                <Row className="justify-content-center mt--100">
                    <Col lg="8">
                        <Card className="bg-gradient-secondary shadow">
                            <CardBody className="p-lg-5">
                                <h4 className="mb-1">Entre em contato</h4>
                                <p className="mt-0">
                                    Responderemos o mais rápido possível.
                                </p>
                                <FormGroup
                                    className={classnames("mt-5", {
                                        focused: this.state.nameFocused
                                    })}
                                >
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-single-02" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Nome"
                                            type="text"
                                            onFocus={e => this.setState({ nameFocused: true })}
                                            onBlur={e => this.setState({ nameFocused: false })}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup
                                    className={classnames({
                                        focused: this.state.emailFocused
                                    })}
                                >
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Email"
                                            type="email"
                                            onFocus={e => this.setState({ emailFocused: true })}
                                            onBlur={e => this.setState({ emailFocused: false })}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className="mb-4">
                                    <Input
                                        className="form-control-alternative"
                                        cols="80"
                                        name="name"
                                        placeholder="Digite sua mensagem..."
                                        rows="4"
                                        type="textarea"
                                    />
                                </FormGroup>
                                <div>
                                    <Button
                                        block
                                        color="warning"
                                        size="lg"
                                        type="button"
                                    >
                                        Enviar
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;