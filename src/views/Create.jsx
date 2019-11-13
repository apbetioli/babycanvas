import React, { useState } from 'react';
import {
    Alert,
    Button,
    FormGroup,
    Input,
    Label,
    Container,
    Row,
    Col
} from "reactstrap";
import Footer from './Footer';
import Header from './Header';
import api from 'services/api';

export default function Create() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [birthTime, setBirthTime] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [promoCheck, setPromoCheck] = useState(true);

    const [alert, setAlert] = useState({
        color: "success",
        isSent: false,
        message: "Mensagem enviada!"
    });

    const onSubmit = async e => {
        e.preventDefault();
        setAlert({
            isSent: false
        });

        const form = { email, name, birthDate, birthTime, weight, height, message1, message2, promoCheck };

        try {
            await api.post('/quadro', form);
            setAlert({
                color: "success",
                isSent: true,
                message: "Enviado com sucesso!"
            });

        } catch (error) {
            console.log(error);

            setAlert({
                color: "warning",
                isSent: true,
                message: 'Não foi possível enviar! Tente novamente em alguns minutos!'
            });
        }

    };

    const onDismiss = () => setAlert({
        isSent: false
    });

    return (
        <>
            <section className="bg-gradient-success">
                <Header />
            </section>

            <Container className="pt-50">
                <Row>
                    <Col lg="6">
                        <h4 className="mb-1">Personalize</h4>
                        <p className="mt-0">
                            Preencha os campos abaixo para personalizar o quadro com os dados escolhidos.
                        </p>
                        <form onSubmit={onSubmit}>
                            <FormGroup className="pb-3">
                                <Label for="name">Nome</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Gabriel"
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <Row form>
                                <Col lg="6">
                                    <FormGroup className="pb-3">
                                        <Label>Data de nascimento</Label>
                                        <Input
                                            id="birthDate"
                                            name="birthDate"
                                            type="date"
                                            value={birthDate}
                                            onChange={e => setBirthDate(e.target.value)}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6">
                                    <FormGroup className="pb-3">
                                        <Label>Hora de nascimento</Label>
                                        <Input
                                            name="birthTime"
                                            type="time"
                                            value={birthTime}
                                            onChange={e => setBirthTime(e.target.value)}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col lg="6">
                                    <FormGroup className="pb-3">
                                        <Label>Peso (Kg)</Label>
                                        <Input
                                            name="weight"
                                            type="number"
                                            value={weight}
                                            onChange={e => setWeight(e.target.value)}
                                            step="0.001"
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6">
                                    <FormGroup className="pb-3">
                                        <Label>Altura (cm)</Label>
                                        <Input
                                            name="height"
                                            type="number"
                                            value={height}
                                            onChange={e => setHeight(e.target.value)}
                                            step="1"
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup className="pb-3">
                                <Label>
                                    Mensagem
                                    <br /><small>Deixe sua marca escolhendo uma frase especial (opcional)</small>
                                </Label>
                                <Input
                                    name="message1"
                                    type="text"
                                    placeholder="Linha 1"
                                    value={message1}
                                    onChange={e => setMessage1(e.target.value)}
                                />
                                <Input
                                    name="message2"
                                    type="text"
                                    placeholder="Linha 2"
                                    value={message2}
                                    onChange={e => setMessage2(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup className="pb-3">
                                <Label>
                                    Email
                                    <br /><small>Você receberá por email uma prévia digital e poderá editar ou finalizar a compra.</small>
                                </Label>
                                <Input
                                    name="email"
                                    placeholder="meu@email.com"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                <Label>
                                    <input
                                        name="promoCheck"
                                        type="checkbox"
                                        checked={promoCheck}
                                        onChange={e => setPromoCheck(e.target.checked)}
                                    />{' '}
                                    <small>Desejo receber novidades neste email</small>
                                </Label>
                            </FormGroup>
                            <div>
                                <Button
                                    block
                                    color="primary"
                                    size="lg"
                                    type="submit"
                                >
                                    Continuar
                                </Button>
                            </div>
                            <Alert color={alert.color} isOpen={alert.isSent} toggle={onDismiss}>
                                {alert.message}
                            </Alert>
                        </form>
                    </Col>
                    <Col lg="6">
                        <img
                            alt="..."
                            className="img-fluid border-preview"
                            src={require("assets/img/preview.jpg")}
                        />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
};