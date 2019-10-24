import React from "react";

import Hero from "./Hero";
import Cards from "./Cards";
import HighQ from "./HighQ";
import Guarantee from "./Guarantee";
import Contact from "./Contact";

import Footer from "views/Footer";
import Nave from "views/Nave";
import Quote from "./Quote";

class LandingA extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <Nave />
                <main ref="main">
                    <section className="section section-lg section-shaped pb-300">
                        <Hero />
                    </section>

                    <section className="section section-sm">
                        <Cards />
                    </section>

                    <section className="section bg-gradient-success">
                        <Quote />
                    </section>

                    <section className="section section-lg mt--100">
                        <HighQ showTitle="true" />
                    </section>

                    <section className="section section-lg pt-lg-0 bg-gradient-default">
                        <Guarantee />
                    </section>

                    <section className="section section-lg pt-lg-0 section-contact-us">
                        <Contact />
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}

export default LandingA;