import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          The API-First Social Network <br />
          <span className="brand-highlight">Built for Developers.</span>
        </Heading>
        <p className="hero__subtitle">
          because you'll be unhappy with the UI eventually
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Read The Docs
          </Link>
          <a
            className="button button--outline button--lg margin-left--md"
            href="https://caturra.social"
            target="_blank"
            rel="noopener noreferrer">
            Launch Demo
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="The API-First Social Network for Developers"
      description="Developer documentation for Caturra Social. Clean, simple, and resource-oriented API.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
