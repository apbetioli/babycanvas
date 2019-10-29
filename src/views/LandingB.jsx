import React from "react";
import Hero from "views/Landing/Hero";
import Cards from "views/Landing/Cards";
import Memories from "views/Landing/Memories";
import Guarantee from "views/Landing/Guarantee";
import Quote from "views/Landing/Quote";
import Header from "./Header";
import Footer from "./Footer";
import Separator from "./Components/Separator";

class LandingB extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <Header />
                <main ref="main">
                    <section className="section section-lg section-shaped pb-300">
                        <Hero />
                        <Separator/>
                    </section>

                    <section className="section section-lg">
                        <Memories />
                    </section>
                    
                    <section className="section section-lg bg-gradient-primary text-white pb-150">
                        <Quote />
                        <Separator/>
                    </section>

                    <section className="section section-lg mt--200">
                        <Cards showButton="true" />
                    </section>

                    <section className="section section-lg pt-lg-0 bg-gradient-success">
                        <Guarantee />
                        <Separator />
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}

export default LandingB;