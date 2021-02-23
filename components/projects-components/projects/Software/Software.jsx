import React from 'react';

export default function Software() {
  const itens = [
    "Loren ipsum dolor sit amet",
    "Loren ipsum dolor sit amet",
    "Loren ipsum dolor sit amet",
    "Loren ipsum dolor sit amet",
    "Loren ipsum dolor sit amet"
  ];

  const technologies = [
    "Atmel",
    "Electron",
    "Firebase",
    "Flutter",
    "JS",
    "LaTeX",
    "linux",
    "LoRa",
    "NodeJS",
    "NXP",
    "PCI Express",
    "Python",
    "Qt",
    "STmicroelectronics",
    "TexasInstruments"
  ];
  
    return (
    <div
      style={{ backgroundColor: '#E1E1E5', width: '100%', height: '100%' }}
    >

      <ProjectData dark>
        <ProjectTitle title="Lorem ipsum" gitLink="" />
        <ProjectTable>
          <ProjectDataRow label="LOREM IPSUM" value="br" />
          <ProjectDataRow label="LOREM IPSUM" value="br" />
          <ProjectDataRow label="LOREM IPSUM" value="br" />
          <ProjectDataRow label="LOREM IPSUM" value="br" />
          <ProjectDataRow label="LOREM IPSUM" value="br" />
          <TechnologiesRow title="TECNOLOGIAS" technologies={technologies} />
          <CheckList title="ESPECIFICACOES TECNICAS" itens={itens} dark />
        </ProjectTable>
      </ProjectData>

      <ProjectData >
        <ProjectTitle title="Lorem ipsum" gitLink="" />
        <ProjectToggle firstTitle = "OVERVIEW" secondTitle = "TECNOLOGIAS">
          <ProjectTable>
            <ProjectDataRow label="LOREM IPSUM" value="br" />
            <ProjectDataRow label="LOREM IPSUM" value="br" />
            <ProjectDataRow label="LOREM IPSUM" value="br" />
            <ProjectDataRow label="LOREM IPSUM" value="br" />
            <ProjectDataRow label="LOREM IPSUM" value="br" />
            <CheckList title="ESPECIFICACOES TECNICAS" itens={itens.slice(1, 4)} dark />
          </ProjectTable>
          <ProjectTable>
            <TechnologiesRow title="TECNOLOGIAS" technologies={technologies} />
            <CheckList title="ESPECIFICACOES TECNICAS" itens={itens.slice(1, 4)} dark />
          </ProjectTable>
        </ProjectToggle>
      </ProjectData>

    </div>
  );
}
