import React from 'react';

import {
    Container,
    Row,
    Col
} from "reactstrap";

import CreateButton from './CreateButton';
import './Hero.scss';

class Hero extends React.Component {
    render() {
        return (
            <div>
                <div className="shape shape-style-1 shape-default">
                    {/* create empty span components here */}
                </div>
                <Container className="py-lg-md d-flex">
                    <div className="col px-0">
                        <Row>
                            <Col lg="6">
                                <h1 className="display-2 text-white">
                                    Os primeiros passos{" "}<span>registrados para sempre</span>
                                </h1>
                                <p className="lead text-white">
                                    As lembranças do nascimento e do primeiro ano de vida decorando seu espaço com exclusividade.
                                </p>
                                <CreateButton color="white"/>
                            </Col>
                        </Row>
                    </div>
                </Container>

                {this.props.displaySkew &&
                    <div className="separator separator-bottom separator-skew">
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
                }
            </div>
        );
    }
}

export default Hero;