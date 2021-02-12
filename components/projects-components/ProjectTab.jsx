import React, { useState } from 'react';
import SondasAeroespaciais from './projects/sondasAeroespaciais';
import CubeSats from './projects/cubeSats';
import Software from './projects/software';
import Hardware from './projects/hardware';
import Educacional from './projects/educacional';
import styles from '../../styles/ProjectTab.module.css';

function Tab(props) {
  const {
    className, label, isActive, onClick,
  } = props;

  return (
    <li className={styles.tabsTab}>
      <a className={`${styles.tabsTabLink} ${isActive ? styles.tabsTabActive : ''}`} onClick={onClick}>
        {label}
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

  function cloneTabElement(tab, index = 0) {
    return (
      <Tab
        label={tab.props.label}
        onClick={() => handleTabClick(index)}
        isActive={index === activeIndex}
        tabIndex={index}
      />
    );
  }

  function renderChildrenTabs() {
    const { children } = props;

    if (!Array.isArray(children)) return cloneTabElement(children);

    return children.map(cloneTabElement);
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
      <ul className={styles.tabsList}>
        {renderChildrenTabs()}
      </ul>
      <div className={styles.tabsContent}>
        {renderActiveTabContent()}
      </div>
    </section>
  );
}

function ProjectTab() {
  return (
    <Tabs>
      <Tab label="Sondas Aeroespaciais">
        <SondasAeroespaciais />
      </Tab>
      <Tab label="CubeSats">
        <CubeSats />
      </Tab>
      <Tab label="Software">
        <Software />
      </Tab>
      <Tab label="Hardware">
        <Hardware />
      </Tab>
      <Tab label="Educacional">
        <Educacional />
      </Tab>
    </Tabs>
  );
}

export default ProjectTab;
