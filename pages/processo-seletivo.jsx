import React from "react";
import NavBar from "../components/navbar-components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "../components/general/HeroSection";
import TextContent from "../public/locale/pt-br/processoSeletivo.json";
import CardContainer from "../components/general/CardContainer";
import Card from "../components/general/Card";

function ProcessoSeletivo() {
    return (
        <>
            <NavBar textContent={TextContent.navBar} />
            <HeroSection
                backgroundImage="url(../images/ProcessoSeletivo/header.webp)"
                title="Processo Seletivo"
                subtitle="Você deseja ser parte do Zenith Aerospace?"
            />
            <CardContainer>
                <Card
                    left={<img src="https://placedog.net/540/320" />}
                    right={
                        <>
                            <h1>{TextContent.processoSeletivoCard1.title}</h1>
                            <p>{TextContent.processoSeletivoCard1.text}</p>
                        </>
                    }
                />

                <Card
                    left={
                        <>
                            <h1>{TextContent.processoSeletivoCard2.title}</h1>
                            <p>
                                {
                                    TextContent.processoSeletivoCard2
                                        .text /* TODO: mudar no .json*/
                                }
                            </p>
                        </>
                    }
                    right={<img src="https://placedog.net/440/420" />}
                />
                <Card
                    left={<img src="https://placedog.net/520/320" />}
                    right={
                        <>
                            <h1>{TextContent.processoSeletivoCard3.title}</h1>
                            <p>{TextContent.processoSeletivoCard3.text}</p>
                        </>
                    }
                />
            </CardContainer>

            <Footer />
        </>
    );
}

export default ProcessoSeletivo;
