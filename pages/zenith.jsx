import React from "react";
import NavBar from "../components/navbar-components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "../components/general/HeroSection";
import TextContent from "../public/locale/pt-br/oZenith.json";
import Card from "../components/general/Card";
import CardContainer from "../components/general/CardContainer";

function Zenith() {
    return (
        <>
            <NavBar textContent={TextContent.navBar} />
            <HeroSection
                backgroundImage="url(../images/Zenith/Header.webp)"
                title="O que é o Zenith?"
                subtitle="Nós somos "
                array={[
                    "CIÊNCIA",
                    "TECNOLOGIA",
                    "INOVAÇÃO",
                    "CONEXÕES",
                    "ZENITH",
                ]}
            />

            <CardContainer>
                <Card
                    left={<img src="http://placedog.net/480/300" />}
                    right={
                        <>
                            <h1>{TextContent.oZenithCard1.title}</h1>
                            <p>{TextContent.oZenithCard1.text}</p>
                        </>
                    }
                />

                <Card
                    lean="left"
                    left={
                        <>
                            <h1>{TextContent.oZenithCard2.title}</h1>
                            <p>{TextContent.oZenithCard2.text}</p>
                        </>
                    }
                    right={<img src="http://placedog.net/500/300" />}
                />

                <Card
                    lean="left"
                    left={<img src="http://placedog.net/500/320" />}
                    right={
                        <>
                            <h1>{TextContent.oZenithCard3.title}</h1>
                            {TextContent.oZenithCard3.text.map(
                                ({ title, text }) => (
                                    <>
                                        <h2>{title}</h2>
                                        <p>{text}</p>
                                    </>
                                )
                            )}
                        </>
                    }
                />

                <Card
                    lean="left"
                    right={<img src="http://placedog.net/520/300" />}
                    left={
                        <>
                            <h1>{TextContent.oZenithCard4.title}</h1>
                            <p>{TextContent.oZenithCard4.text}</p>
                        </>
                    }
                />
            </CardContainer>
            <Footer />
        </>
    );
}

export default Zenith;
