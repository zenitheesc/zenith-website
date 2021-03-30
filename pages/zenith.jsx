import React from "react";
import useTranslation from 'next-translate/useTranslation';
import NavBar from 'components/navbar-components/NavBar';
import Footer from 'components/Footer';
import HeroSection from 'components/general/HeroSection';
import ImageComponent from 'components/zenith-page-components/ImageComponent';
import UnderlinedButton from 'components/general/UnderlinedButton';
import Card from "components/general/Card";
import CardContainer from "components/general/CardContainer";
import TextWithIcons from "components/zenith-components/TextWithIcons";
import boldParser from "components/utils/boldParser";
import { NextSeo } from 'next-seo';

const icons = ['sat.svg', 'sci.svg', 'ppl.svg', 'pro.svg'];

function Zenith() {
    const { t } = useTranslation();
    const title = t('oZenith:oZenithHero.title');
    const subtitle = t('oZenith:oZenithHero.subtitle');
    const array = t('oZenith:oZenithHero.array', { count: -1 }, { returnObjects: true });
    const card1 = t('oZenith:oZenithCard1', { count: -1 }, { returnObjects: true });
    const card2 = t('oZenith:oZenithCard2', { count: -1 }, { returnObjects: true });
    const card3 = t('oZenith:oZenithCard3', { count: -1 }, { returnObjects: true });
    const card4 = t('oZenith:oZenithCard4', { count: -1 }, { returnObjects: true });

    return (
        <>
            <NextSeo
                title="Zenith | Sobre Nós"
                description="Descrição da página inicial"
            />
            <NavBar />
            <HeroSection
                backgroundImage="url(../images/Zenith/Header.webp)"
                title={title}
                subtitle={subtitle}
                array={array}
            />
            <CardContainer>
                <Card
                    left={<img src="../images/Zenith/Card-1.webp" alt="Students working" />}
                    right={
                        <>
                            <h1 className="-homepage-section-title">{card1.title}</h1>
                            <TextWithIcons content={{ title: "", text: card1.text[0] }} index={0} icons={icons} />
                            <br />
                            <p>{card1.text[1]}</p>
                        </>
                    }
                    text={'right'}
                />
            </CardContainer>

            <ImageComponent
                images={["/images/Zenith/photo1.webp", "/images/Zenith/photo2.webp"]}
                alt={["Mulher com camisa com o logo da EESC-USP", "Homem programando em seu notebook"]}
            />
            <CardContainer>
                <Card
                    lean="left"
                    left={
                        <>
                            <h1 className="-homepage-section-title">{card2.title}</h1>
                            {card2.text.map((a, idx) => <p key={idx}>{boldParser(a)}</p>)}
                        </>
                    }
                    right={<img src="../images/Zenith/Card-2.webp" alt="Image from space" />}
                    text={'left'}
                />

                <Card
                    lean="left"
                    left={<img src="../images/Zenith/Card-3.webp" alt="Board stack" />}
                    right={
                        <>
                            <h1 className="-homepage-section-title">{card3.title}</h1>
                            {card3.text.map((c, i) => <TextWithIcons content={c} key={i} index={i + 1} icons={icons} />)}
                            <br />
                        </>
                    }
                />

                <Card
                    lean="left"
                    right={<img src="../images/Zenith/Card-4.webp" alt="Joãozinho" />}
                    left={
                        <>
                            <h1 className="-homepage-section-title">{card4.title}</h1>
                            {card4.text.map((a, idx) => <p key={idx}>{boldParser(a)}</p>)}
                            {card4.links.map((l, idx) => <UnderlinedButton key={idx} link={l.url} label={l.text} dark />)}
                        </>
                    }
                    text={'left'}
                />
            </CardContainer>
            <Footer />
        </>
    );
}

export function getServerSideProps() { return { props: {} }; }

export default Zenith;
