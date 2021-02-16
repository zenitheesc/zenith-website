import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SondasAeroespaciais from './projects/sondasAeroespaciais';
import CubeSats from './projects/cubeSats';
import Software from './projects/software';
import Hardware from './projects/hardware';
import Educacional from './projects/educacional';
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

  function cloneTabElement(tab, index = 0) {
    return (
      <Tab
        label={tab.props.label}
        onClick={() => handleTabClick(index)}
        isActive={index === activeIndex}
        tabIndex={index}
        onLeftChevronClick={() => handleTabClick(index === 0 ? 4 : index - 1)}
        onRightChevronClick={() => handleTabClick(index === 4 ? 0 : index + 1)}
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
      <ul className={styles.tabsList}>{renderChildrenTabs()}</ul>
      <div className={styles.tabsContent}>{renderActiveTabContent()}</div>
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
