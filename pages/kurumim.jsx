import React from "react";
import NavBar from "../components/navbar-components/NavBar";
import Footer from "../components/footer";
import HeroSection from "../components/general/HeroSection";
import TextContent from "../public/locale/pt-br/kurumim.json";
import CardContainer from "../components/general/CardContainer";
import Card from "../components/general/Card";

function Kurumim() {
    return (
        <>
            <NavBar textContent={TextContent.navBar} />
            <HeroSection
                backgroundImage="url(../images/Kurumim/header.webp)"
                title="Kurumim"
                subtitle="A nova geração do Garatéa-E"
            />

            <CardContainer>
                <Card
                    lean="none"
                    left={
                        <>
                            <h1>{TextContent.kurumimCard1.title}</h1>
                            <p>{TextContent.kurumimCard1.text}</p>
                        </>
                    }
                    right={
                        <>
                            <h1>{TextContent.kurumimCard2.title}</h1>
                            <p>{TextContent.kurumimCard2.text}</p>
                        </>
                    }
                />
                <Card
                    lean="none"
                    left={
                        <>
                            <h1>{TextContent.kurumimCard3.title}</h1>
                            <p>{TextContent.kurumimCard3.text}</p>
                        </>
                    }
                    right={
                        <>
                            <h1>{TextContent.kurumimCard4.title}</h1>
                            <p>{TextContent.kurumimCard4.text}</p>
                        </>
                    }
                />
            </CardContainer>

            <Footer />
        </>
    );

}

export default Kurumim;
