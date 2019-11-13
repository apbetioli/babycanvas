import React from "react";
import Header from "views/Header";
import Hero from "views/Landing/Hero";
import Cards from "views/Landing/Cards";
import Memories from "views/Landing/Memories";
import Guarantee from "views/Landing/Guarantee";
import Footer from "views/Footer";
import Quote from "views/Landing/Quote";

class LandingA extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <Header navbarClass="navbar-transparent" />
                <main ref="main">
                    <section className="section section-lg section-shaped pb-300">
                        <Hero />
                    </section>

                    <section className="section section-lg">
                        <Cards showButton="true" />
                    </section>

                    <section className="section section-lg bg-gradient-primary text-white">
                        <Quote />
                    </section>

                    <section className="section section-lg">
                        <Memories />
                    </section>

                    <section className="section section-lg pt-lg-0 bg-gradient-success">
                        <Guarantee />
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}

export default LandingA;