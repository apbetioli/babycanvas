import React from 'react';

import {
    Container,
    Row,
    Col
} from "reactstrap";

class Feed extends React.Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-center text-center mb-lg">
                    <Col lg="8">
                        <h2 className="display-3">Nossos clientes</h2>
                        <div>
                            Em breve
                        </div>
                    </Col>
                </Row>
            </Container>
        );

    }
}


export default Feed;