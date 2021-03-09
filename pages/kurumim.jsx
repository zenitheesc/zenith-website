import React from "react";
import NavBar from "../components/navbar-components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "../components/general/HeroSection";
import TextContent from "../public/locale/pt-br/kurumim.json";
import CardContainer from "../components/general/CardContainer";
import Card from "../components/general/Card";

function mapStylish(content){
    // TODO: Put style in class
    return <p style={{textAlign:'center', fontWeight: 'lighter'}}>
        {content.line.map(part=>{
            if(typeof part === 'number'){
                return <span style={{fontSize:'2.5rem', fontWeight:'500'}}>{part}</span>
            }else {
                return <span> {part} </span>
            }
        })}
    </p>

}


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
                            <h1 className="-homepage-section-title">{TextContent.kurumimCard1.title}</h1>
                            {TextContent.kurumimCard1.text.map(a=><p>{a}</p>)}
                        </>
                    }
                    right={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.kurumimCard2.title}</h1>
                            {TextContent.kurumimCard2.text.map(a=><p>{a}</p>)}
                            {TextContent.kurumimCard2.stylish.map(mapStylish)}
                        </>
                    }
                />
                <img  src="https://placedog.net/1024/320"/>
                <Card
                    lean="none"
                    left={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.kurumimCard3.title}</h1>
                            {TextContent.kurumimCard3.text.map(a=><p>{a}</p>)}

                        </>
                    }
                    right={
                        <>
                            <h1 className="-homepage-section-title">{TextContent.kurumimCard4.title}</h1>
                            {TextContent.kurumimCard4.text.map(a=><p>{a}</p>)}

                        </>
                    }
                />
            </CardContainer>

            <Footer />
        </>
    );

}

export default Kurumim;
