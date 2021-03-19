import React from "react";
import useTranslation from 'next-translate/useTranslation';
import NavBar from 'components/navbar-components/NavBar';
import HeroSection from 'components/general/HeroSection';
import Footer from 'components/Footer';
import TextContent from "../locales/pt/processoSeletivo.json";
import CardContainer from "../components/general/CardContainer";
import Card from "../components/general/Card";

function mapTable(content) {
    return <p><b>{content[0]}</b>: <span>{content[1]}</span></p>;
}

function ProcessoSeletivo() {
    const { t } = useTranslation();
    const title = t('processoSeletivo:processoSeletivoHero.title');
    const subtitle = t('processoSeletivo:processoSeletivoHero.subtitle');
    return (
        <>
            <NavBar />
            <HeroSection
                backgroundImage="url(../images/ProcessoSeletivo/header.webp)"
                title={title}
                subtitle={subtitle}
            />
            <CardContainer>
                <Card
                    left={<img src="../images/ProcessoSeletivo/Card-1.webp" />}
                    right={
                        <>
                            <h1>{TextContent.processoSeletivoCard1.title}</h1>
                            {TextContent.processoSeletivoCard1.text.map(a => <p>{a}</p>)}

                        </>
                    }
                />

                <Card
                    left={
                        <>
                            <h1>{TextContent.processoSeletivoCard2.title}</h1>

                            {TextContent.processoSeletivoCard2.text.map(mapTable)}

                        </>
                    }
                    right={<img src="../images/ProcessoSeletivo/Card-2.webp" />}
                />
                <Card
                    left={<img src="../images/ProcessoSeletivo/Card-3.webp" />}
                    right={
                        <>
                            <h1>{TextContent.processoSeletivoCard3.title}</h1>
                            {TextContent.processoSeletivoCard3.text.map(a => <p>{a}</p>)}

                        </>
                    }
                />
            </CardContainer>

            <Footer />
        </>
    );
}

export function getServerSideProps() { return { props: {} }; }

export default ProcessoSeletivo;
