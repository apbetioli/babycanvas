import React from "react";

import Hero from "./Hero";
import Cards from "./Cards";
import HighQ from "./HighQ";
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
                <section className="section section-lg section-shaped pb-300">
                    <Hero />
                </section>

                <section className="section section-lg">
                    <HighQ />
                </section>

                <section className="section section-lg bg-gradient-success text-white pb-150">
                    <Quote />
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
                </section>

                <section className="section section-lg mt--200">
                    <Cards showButton="true" />
                </section>

                <section className="section section-lg bg-gradient-primary">
                    <Guarantee />
                </section>

                <section className="section section-lg pt-lg-0 section-contact-us">
                    <Contact />
                </section>
            </main>
        );
    }
}

export default LandingB;