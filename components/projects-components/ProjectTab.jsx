import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SondasAeroespaciais from './projects/SondasAeroespaciais/SondasAeroespaciais';
import useTranslation from 'next-translate/useTranslation';
import CubeSats from './projects/CubeSats/CubeSats';
import Software from './projects/Software/Software';
import Hardware from './projects/Hardware/Hardware';
import Educacional from './projects/Educacional/Educacional';
import styles from '../../styles/ProjectTab.module.css';

function Tab(props) {
  const {
    label,
    isActive,
    onClick,
    tabIndex,
    onLeftChevronClick,
    onRightChevronClick,
  } = props;

  return (
    <li className={`${styles.tabsTab} ${isActive ? styles.tabsTabActive : ''}`}>
      <a className={styles.chevron} onClick={onLeftChevronClick}>
        <FaChevronLeft />
      </a>
      <a
        className={`${styles.tabsTabLink} ${
          isActive ? styles.tabsTabLinkActive : ''
        }`}
        onClick={onClick}>
        {label}
      </a>
      <a className={styles.chevron} onClick={onRightChevronClick}>
        <FaChevronRight />
      </a>
    </li>
  );
}

function Tabs(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleTabClick(tabIndex) {
    if (tabIndex !== activeIndex) {
      setActiveIndex(tabIndex);
    }

    if (props.onClick) {
      props.onClick(tabIndex);
    }
  }

  function cloneTabElement(tab, index) {
    return (
      <Tab
        label={tab.props.label}
        onClick={() => handleTabClick(index)}
        isActive={index === activeIndex}
        tabIndex={index}
        key = {index}
        onLeftChevronClick={() => handleTabClick(index === 0 ? 4 : index - 1)}
        onRightChevronClick={() => handleTabClick(index === 4 ? 0 : index + 1)}
      />
    );
  }

  function renderChildrenTabs() {
    const { children } = props;

    if (!Array.isArray(children)) return cloneTabElement(children,0);

    return children.map((value,index)=>cloneTabElement(value,index));
  }

  function renderActiveTabContent() {
    const { children } = props;

    if (children[activeIndex]) {
      return children[activeIndex].props.children;
    }

    return children.props.children;
  }

  return (
    <section className={styles.tabs}>
      <ul className={styles.tabsList}>{renderChildrenTabs()}</ul>
      <div className={styles.tabsContent}>{renderActiveTabContent()}</div>
    </section>
  );
}

function ProjectTab() {
  const { t } = useTranslation();

  const sondasAeroespaciais = t("projetos:sondasAeroespaciais", { count: -1 }, { returnObjects: true });
  const cubeSats            = t("projetos:cubeSats", { count: -1 }, { returnObjects: true });
  const software            = t("projetos:software", { count: -1 }, { returnObjects: true });
  const hardware            = t("projetos:hardware", { count: -1 }, { returnObjects: true });
  const educacional         = t("projetos:educacional", { count: -1 }, { returnObjects: true });

  return (
    <Tabs>
      <Tab label="Sondas Aeroespaciais">
        <SondasAeroespaciais textContent={ sondasAeroespaciais }/>
      </Tab>
      <Tab label="CubeSats">
        <CubeSats textContent={ cubeSats }/>
      </Tab>
      <Tab label="Software">
        <Software textContent={ software }/>
      </Tab>
      <Tab label="Hardware">
        <Hardware textContent={ hardware }/>
      </Tab>
      <Tab label="Educacional">
        <Educacional textContent={ educacional }/>
      </Tab>
    </Tabs>
  );
}

export default ProjectTab;
