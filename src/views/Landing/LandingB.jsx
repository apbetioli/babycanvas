import React from "react";

import Hero from "./Hero";
import Cards from "./Cards";
import HighQ from "./HighQ";
import Reviews from "./Reviews";
import Team from "./Team";
import Guarantee from "./Guarantee";
import Contact from "./Contact";
import Quote from "./Quote";

class LandingB extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <main ref="main">
                <section className="section section-lg section-shaped">
                    <Hero displaySkew="true" />
                </section>

                <section className="section section-sm mt--100">
                    <HighQ/>
                </section>

                <section className="section">
                    <Quote/>
                </section>

                <section className="section section-lg pt-lg-0">
                    <Cards showBadges="true" showButton="true" />
                </section>

                <section className="section pb-0 bg-gradient-success">
                    <Reviews/>
                </section>

                <section className="section section-lg">
                    <Team/>                    
                </section>

                <section className="section section-lg bg-gradient-default">
                    <Guarantee/>
                </section>

                <section className="section section-lg pt-lg-0 section-contact-us">
                    <Contact/>
                </section>
            </main>
        );
    }
}

export default LandingB;