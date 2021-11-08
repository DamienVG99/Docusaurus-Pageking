import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'All things WordPress',
    Svg: require('../../static/img/Wordpress-Logo.svg').default,
    description: (
      <>
        Op deze website zul je alles vinden over de werking van een echte Pageking website.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/web-development.svg').default,
    description: (
      <>
        Wij bouwen je website, jij vult deze met relevante content, wij bieden je de handvaten om dit te doen.
      </>
    ),
  },
  {
    title: 'Powered by Pageking',
    Svg: require('../../static/img/Logo_Pageking_Zonder_Tekst.svg').default,
    description: (
      <>
        De volledige Wiki is geschreven door onze collega's. Mis je iets? Laat het weten via support@pageking.nl!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
