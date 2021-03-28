import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from 'styles/ProjectTab.module.css';

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

  const SondasAeroespaciais = dynamic(() => import('./projects/SondasAeroespaciais/SondasAeroespaciais'));
  const CubeSats            = dynamic(() => import('./projects/CubeSats/CubeSats'));
  const Software            = dynamic(() => import('./projects/Software/Software'));
  const Hardware            = dynamic(() => import('./projects/Hardware/Hardware'));
  const Educacional         = dynamic(() => import('./projects/Educacional/Educacional'));

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
