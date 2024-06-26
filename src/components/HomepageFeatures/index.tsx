import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  href: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Minecraft Server',
    href: '/docs/miners_online_server/intro',
    Svg: require('@site/static/img/favicon.svg').default,
    description: (
      <>
        Play games with your friends and join our Minecraft server!
        <Link
          className="button button--secondary button--lg"
          to="/docs/miners_online_server/intro">
          Play now.
        </Link>
      </>
    ),
  },
];

function Feature({title, href, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"><Link to={href}>{title}</Link></Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="container">
      <Heading as="h2">Projects and services</Heading>
      <section className={styles.features}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>
    </div>
  );
}
