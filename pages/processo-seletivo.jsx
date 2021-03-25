import React from "react";
import useTranslation from 'next-translate/useTranslation';
import NavBar from 'components/navbar-components/NavBar';
import HeroSection from 'components/general/HeroSection';
import Footer from 'components/Footer';
import CardContainer from "components/general/CardContainer";
import FormWrapper from "components/general/FormWrapper"
import Card from "components/general/Card";
import boldParser from "components/utils/boldParser";
import styles from 'styles/ProcessoSeletivo.module.css';

function mapTable(content,idx) {
    return <p className={styles.cronogram} key={idx}><b>{content[0]}</b>: <span key={idx}>{content[1]}</span></p>;
}

function ProcessoSeletivo() {
    const { t } = useTranslation();
    const title = t('processoSeletivo:processoSeletivoHero.title');
    const subtitle = t('processoSeletivo:processoSeletivoHero.subtitle');
    const TextContent = t('processoSeletivo:cards', { count: -1 }, { returnObjects: true });

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
                            {TextContent.processoSeletivoCard1.text.map((a, idx) => <p key={idx}>{boldParser(a)}</p>)}

                        </>
                    }
                    text={'right'}
                />

                <Card
                    left={
                        <>
                            <h1>{TextContent.processoSeletivoCard2.title}</h1>
                            <p>{boldParser(TextContent.processoSeletivoCard2.detail)}</p>
                            {TextContent.processoSeletivoCard2.text.map((a, idx) => mapTable(a,idx))}

                        </>
                    }
                    right={<img src="../images/ProcessoSeletivo/Card-2.webp" />}
                    text={'left'}
                />
                <Card
                    left={<img src="../images/ProcessoSeletivo/Card-3.webp" />}
                    right={
                        <>
                            <h1>{TextContent.processoSeletivoCard3.title}</h1>
                            {TextContent.processoSeletivoCard3.text.map((a, idx) => <p key={idx}>{boldParser(a)}</p>)}

                        </>
                    }
                    text={'right'}
                />
                <FormWrapper link={"https://docs.google.com/forms/d/e/1FAIpQLSdFoITXWmuJYgJPlvQFGBNkeOm84htc2GHxZpzSLIi1UEoB1g/viewform?embedded=true"} />
            </CardContainer>
            <Footer />
        </>
    );
}

export function getServerSideProps() { return { props: {} }; }

export default ProcessoSeletivo;
