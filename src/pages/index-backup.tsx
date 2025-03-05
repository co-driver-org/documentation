import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Home() {
    return (
        <Layout title="Co-Driver API Management" description="API governance, subscription & SDK automation.">

            {/* 🚀 HERO SECTION */}
            <header className={styles.heroBanner}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Easiest Way to Manage Your APIs</h1>
                    <p className={styles.heroSubtitle}>
                        End-to-end API subscription, governance, and automation.
                    </p>
                    <div className={styles.buttonGroup}>
                        <a className="button button--primary button--lg" href={useBaseUrl('/docs/guides/api-management')}>
                            Try Now
                        </a>
                        <a className="button button--secondary button--lg" href={useBaseUrl('/docs/api-reference/authentication')}>
                            Read Docs
                        </a>
                    </div>
                </div>
            </header>

            {/* 🌟 WHY CHOOSE US? */}
            <section className={styles.featuresSection}>
                <div className="container">
                    <h2 className="text--center">Why Choose Co-Driver?</h2>
                    <div className="row">
                        <div className="col col--6">
                            <h3>📡 API Discovery & Ownership</h3>
                            <p>Find and manage APIs across teams effortlessly.</p>
                        </div>
                        <div className="col col--6">
                            <h3>⚙️ SDK Automation</h3>
                            <p>Generate SDKs in Java, Python, and Node.js instantly.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col--6">
                            <h3>📊 API Observability</h3>
                            <p>Monitor usage, errors, and performance in real time.</p>
                        </div>
                        <div className="col col--6">
                            <h3>🔑 Subscription Control</h3>
                            <p>Manage API access with approval workflows and security.</p>
                        </div>
                    </div>
                    <div className="text--center">
                        <a href={useBaseUrl('/features')} className="button button--primary">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* 🎯 WHO WE SERVE */}
            <section className={styles.audienceSection}>
                <div className="container">
                    <h2 className="text--center">Who We Serve</h2>
                    <div className="row">
                        <div className="col col--4">
                            <h3>🔧 API Providers</h3>
                            <p>Register, manage, and version APIs effortlessly.</p>
                        </div>
                        <div className="col col--4">
                            <h3>👨‍💻 Developers</h3>
                            <p>Get ready-to-use SDKs and API documentation.</p>
                        </div>
                        <div className="col col--4">
                            <h3>🏢 Engineering Teams</h3>
                            <p>Gain insights into API usage, failures, and security.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
