import React from "react";
import useTranslation from 'next-translate/useTranslation';
import NavBar from 'components/navbar-components/NavBar';
import Footer from 'components/Footer';
import HeroSection from 'components/general/HeroSection';
import ImageComponent from 'components/zenith-page-components/ImageComponent';
import TextContent from "../locales/pt/oZenith.json";
import Card from "../components/general/Card";
import CardContainer from "../components/general/CardContainer";
import TextWithIcons from "../components/zenith-components/TextWithIcons";

const icons = ['sat.png','sci.png', 'ppl.png', 'pro.png'];

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
                    left={<img src="../images/Zenith/Card-1.webp"/>}
                    right={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.oZenithCard1.title}</h1>
                            <TextWithIcons content={{title:"", text:TextContent.oZenithCard1.text[0]}} index={0} icons={icons} />
                            <br/>
                            <p>{TextContent.oZenithCard1.text[1]}</p>
                        </>
                    }
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
                            <h1 className="-homepage-section-title">{TextContent.oZenithCard2.title}</h1>
                            {TextContent.oZenithCard2.text.map(a=><p>{a}</p>)}
                        </>
                    }
                    right={<img src="../images/Zenith/Card-2.webp" />}
                />

                <Card
                    lean="left"
                    left={<img src="../images/Zenith/Card-3.webp" />}
                    right={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.oZenithCard3.title}</h1>
                            {TextContent.oZenithCard3.text.map((c, i)=> <TextWithIcons content={c} index={i+1} icons={icons}/>)}
                            <br/>
                        </>
                    }
                />

                <Card
                    lean="left"
                    right={<img src="../images/Zenith/Card-4.webp" />}
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
