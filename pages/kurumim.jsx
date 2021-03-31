import React from "react";
import useTranslation from 'next-translate/useTranslation';
import NavBar from 'components/navbar-components/NavBar';
import HeroSection from 'components/general/HeroSection';
import Footer from 'components/Footer';
import FormWrapper from "components/general/FormWrapper"
import CardContainer from "components/general/CardContainer";
import Card from "components/general/Card";
import boldParser from "components/utils/boldParser";
import Config from "configs/configs.json";
import HeadTags from 'components/general/HeadTags';
import UnderlinedButton from 'components/general/UnderlinedButton';

function mapStylish(content, idx) {
    // TODO: Put style in class
    return <p key={idx} style={{ textAlign: 'center', fontWeight: 'lighter' }}>
        {content.line.map((part, idx) => {
            if (typeof part === 'number') {
                return <span key={idx} style={{ fontSize: '2.5rem', fontWeight: '500' }}>{part}</span>
            } else {
                return <span key={idx}> {part} </span>
            }
        })}
    </p>
}

function Kurumim() {
    const { t } = useTranslation();
    const title = t('kurumim:kurumimHero.title');
    const subtitle = t('kurumim:kurumimHero.subtitle');
    const TextContent = t('kurumim:cards', { count: -1 }, { returnObjects: true });
    const metaTags = t('kurumim:metaTags', { count: -1 }, { returnObjects: true });
    return (
        <>
            <HeadTags pageName={metaTags.pageName} title={metaTags.title} description={metaTags.description} />
            <NavBar />
            <HeroSection
                backgroundImage="url(../images/Kurumim/header.webp)"
                title={title}
                subtitle={subtitle}
            />
            <CardContainer>
                <Card
                    lean="none"
                    left={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.kurumimCard1.title}</h1>
                            {TextContent.kurumimCard1.text.map((a, idx) => <p key={idx}>{boldParser(a)}</p>)}
                        </>
                    }
                    right={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.kurumimCard2.title}</h1>
                            {TextContent.kurumimCard2.text.map((a, idx) => <p key={idx}>{boldParser(a)}</p>)}
                        </>
                    }
                    text={'right'}
                />
                <picture>
                    <source media="(max-width: 768px)" srcSet="images/Kurumim/mobilePoster.webp" type="image/webp" />
                    <img style={{ borderRadius: '0.75rem', width: '100%', margin: '0rem' }} src="../images/Kurumim/poster.webp" alt="Kurumim 2021 - Home Edition poster" />
                </picture>
                <Card
                    lean="none"
                    left={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.kurumimCard3.title}</h1>
                            {TextContent.kurumimCard3.text.map((a, idx) => <p key={idx}>{boldParser(a)}</p>)}

                        </>
                    }
                    right={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.kurumimCard4.title}</h1>
                            {TextContent.kurumimCard4.text.map((a, idx) => <p key={idx}>{boldParser(a)}</p>)}
                            <UnderlinedButton link={'https://www.facebook.com/zenitheesc'} label={'Facebook'} dark/>
                            <UnderlinedButton link={'https://www.instagram.com/zenith_eesc/?fbclid=IwAR1izFqO3DijeIsUgwUW1gzXXpSs1aJrYoz3dtDcbfcoYOEzmvXBmdXaVqA'} label={'Instagram'} dark/>
                        </>
                    }
                    text={'right'}
                />
                {(Config.kurumimOpen)
                    ? <FormWrapper className={'-section'} link={Config.kurumimForms} />
                    : <> </>
                }
            </CardContainer>
            <Footer />
        </>
    );
}
export function getServerSideProps() { return { props: {} }; }

export default Kurumim;
