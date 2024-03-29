import React from 'react';
import CounterText from 'components/general/CounterText';
import useTranslation from 'next-translate/useTranslation';
import style from 'styles/HighlightsSection.module.css';

export default function HighlightsSection() {
  const { t } = useTranslation();
  const title = t('homePage:homePageStatistics.title');
  const subtitle = t('homePage:homePageStatistics.subtitle');
  const statistics = t('homePage:homePageStatistics.statistics', { count: -1 }, { returnObjects: true });
  return (
    <section className={`-section ${style.section}`}>
      <div className={`-standardContainer ${style.highlightsContainer}`}>
        <div className={style.countUpContainer}>
          <CounterText className={style.countUp} value={statistics[0].number} suffix={statistics[0].description} plus/>
          <CounterText className={style.countUp} value={statistics[5].number} suffix={statistics[5].description} plus/>
          <CounterText className={style.countUp} value={statistics[1].number} suffix={statistics[1].description} plus />
          <CounterText className={style.countUp} value={statistics[2].number} suffix={statistics[2].description} />
          <CounterText className={style.countUp} value={statistics[3].number} suffix={statistics[3].description} />
          <CounterText className={style.countUp} value={statistics[4].number} suffix={statistics[4].description} />
        </div>
        <div className={style.textSection}>
          <h2 className="-homepage-section-title">
            {title}
          </h2>
          <h3 className="-homepage-section-subtitle">
            {subtitle}
          </h3>
        </div>
      </div>
    </section>
  );
}
