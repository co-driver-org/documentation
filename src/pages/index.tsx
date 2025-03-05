import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Home() {
    return (
        <Layout title="Co-Driver" description="Comprehensive guides, API references, and SDK documentation">
            <header className={styles.heroBanner}>
                <div className="container">
                    <h1 className="hero__title">Welcome to Co-Driver Documentation</h1>
                    <p className="hero__subtitle">
                        API Management & Subscription Platform
                    </p>
                    <div className={styles.buttons}>
                        <a className="button button--primary button--lg" href={useBaseUrl('/guides/api-management')}>
                            Get Started
                        </a>
                        <a className="button button--secondary button--lg" href={useBaseUrl('/api-reference/authentication')}>
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
                                <a href={useBaseUrl('/guides/api-management')} className="button button--outline button--primary">
                                    Read Guides
                                </a>
                            </div>
                            <div className="col col--4">
                                <h2>⚡ Quickstarts</h2>
                                <p>Get up and running quickly with our API quickstart guides.</p>
                                <a href={useBaseUrl('/quickstarts/getting-started')} className="button button--outline button--primary">
                                    Start Now
                                </a>
                            </div>
                            <div className="col col--4">
                                <h2>🔍 API Reference</h2>
                                <p>Explore our API endpoints, authentication, and request examples.</p>
                                <a href={useBaseUrl('/api-reference/authentication')} className="button button--outline button--primary">
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
