import React, { useState } from 'react';

import {
    Alert,
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

import api from 'services/api';

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState({
        color: "success",
        isSent: false,
        message: "Mensagem enviada!"
    });

    const onSubmit = async e => {
        e.preventDefault();
        onDismiss();

        const form = { name, email, message };

        try {
            await api.post('/contact', form);
            setAlert({
                color: "success",
                isSent: true,
                message: "Mensagem enviada!"
            });
            setMessage("");

        } catch (error) {
            console.log(error);

            setAlert({
                color: "warning",
                isSent: true,
                message: 'Não foi possível enviar a mensagem! Tente novamente em alguns minutos!'
            });
        }

    };

    const onDismiss = () => setAlert({
        isSent: false
    });

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
                            <Alert color={alert.color} isOpen={alert.isSent} toggle={onDismiss}>
                                {alert.message}
                            </Alert>
                            <form onSubmit={onSubmit}>
                                <FormGroup className="mt-5">
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-single-02" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            name="name"
                                            placeholder="Nome"
                                            type="text"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            required
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup className="mb-4">
                                    <Input
                                        className="form-control-alternative"
                                        cols="80"
                                        name="message"
                                        placeholder="Digite sua mensagem..."
                                        rows="4"
                                        type="textarea"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        required
                                    />
                                </FormGroup>
                                <div>
                                    <Button
                                        block
                                        color="warning"
                                        size="lg"
                                        type="submit"
                                    >
                                        Enviar
                                    </Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
