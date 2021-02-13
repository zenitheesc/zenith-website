import React from "react";
import NavBar from "../components/navbar-components/NavBar";
import Footer from "../components/footer";
import HeroSection from "../components/general/HeroSection";
import TextContent from "../public/locale/pt-br/homePage.json";
import TextCard from "../components/general/TextCard";

function Zenith() {
  return (
    <>
      <NavBar textContent={TextContent.navBar} />
      <HeroSection
        backgroundImage="url(../images/Zenith/Header.webp)"
        title="O que é o Zenith?"
        subtitle="Nós somos "
        array={['CIÊNCIA', 'TECNOLOGIA', 'INOVAÇÃO', 'CONEXÕES', 'ZENITH']}
      />

            <TextCard />

            <TextCard reverse />

            <TextCard
                bothText
                img={
                    <>
                        <h2>Outro Titulo</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A reiciendis ipsam illo earum rerum provident
                            beatae. Ad, tempora! Soluta doloremque repellat
                            numquam eveniet quo debitis nam quod molestiae quos
                            vitae.
                        </p>
                    </>
                }
            />
      <Footer />
    </>
  );
}

export default Zenith;
