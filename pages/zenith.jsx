import React from "react";
import useTranslation from 'next-translate/useTranslation';
import NavBar from "../components/navbar-components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "../components/general/HeroSection";
import TextContent from "../locales/pt/oZenith.json";
import Card from "../components/general/Card";
import CardContainer from "../components/general/CardContainer";
import TextWithIcons from "../components/zenith-components/TextWithIcons";


function Zenith() {
  const { t } = useTranslation();
  const title = t('oZenith:oZenithHero.title');
  const subtitle = t('oZenith:oZenithHero.subtitle');
  const array = t('oZenith:oZenithHero.array', { count: -1 }, { returnObjects: true });
  return (
    <>
      <NavBar />
      <HeroSection
        backgroundImage="url(../images/Zenith/Header.webp)"
        title={title}
        subtitle={subtitle}
        array={array}
      />

            <CardContainer>
                <Card
                    left={<img src="http://placedog.net/480/300" />}
                    right={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.oZenithCard1.title}</h1>
                            {TextContent.oZenithCard1.text.map(a=><p>{a}</p>)}
                        </>
                    }
                />

                <Card
                    lean="left"
                    left={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.oZenithCard2.title}</h1>
                            {TextContent.oZenithCard2.text.map(a=><p>{a}</p>)}
                        </>
                    }
                    right={<img src="http://placedog.net/500/300" />}
                />

                <Card
                    lean="left"
                    left={<img src="http://placedog.net/500/320" />}
                    right={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.oZenithCard3.title}</h1>
                            {TextContent.oZenithCard3.text.map((c, i)=> <TextWithIcons content={c} index={i}/>)}
                        </>
                    }
                />

                <Card
                    lean="left"
                    right={<img src="http://placedog.net/520/300" />}
                    left={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.oZenithCard4.title}</h1>
                            {TextContent.oZenithCard4.text.map(a=><p>{a}</p>)}
                        </>
                    }
                />
            </CardContainer>
            <Footer />
        </>
    );
}

export function getServerSideProps() { return { props: {} }; }

export default Zenith;
