import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Home() {
    return (
        <Layout title="Co-Driver" description="Comprehensive guides, API references, and SDK documentation">
            <header className={styles.heroBanner}>
                <div className="container">
                    <h1 className="hero__title">Welcome to API Management Docs</h1>
                    <p className="hero__subtitle">
                        Your go-to platform for managing APIs, subscriptions, and analytics.
                    </p>
                    <div className={styles.buttons}>
                        <a className="button button--primary button--lg" href="/docs-platform/docs/guides/api-management">
                            Get Started
                        </a>
                        <a className="button button--secondary button--lg" href="/docs-platform/docs/api-reference/authentication">
                            API Reference
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row">
                            <div className="col col--4">
                                <h2>📖 Guides & Tutorials</h2>
                                <p>Step-by-step tutorials to help you integrate APIs seamlessly.</p>
                                <a href="/docs-platform/docs/guides/api-management" className="button button--outline button--primary">
                                    Read Guides
                                </a>
                            </div>
                            <div className="col col--4">
                                <h2>⚡ Quickstarts</h2>
                                <p>Get up and running quickly with our API quickstart guides.</p>
                                <a href="/docs-platform/docs/quickstarts/getting-started" className="button button--outline button--primary">
                                    Start Now
                                </a>
                            </div>
                            <div className="col col--4">
                                <h2>🔍 API Reference</h2>
                                <p>Explore our API endpoints, authentication, and request examples.</p>
                                <a href="/docs-platform/docs/api-reference/authentication" className="button button--outline button--primary">
                                    View API Docs
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}


/*
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from 'src/components/HomepageFeatures_backup';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/!*<HomepageFeatures />*!/}
      </main>
    </Layout>
  );
}
*/
