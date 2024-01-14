import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageTitle() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Heading as="h1" className="hero__title">
        {siteConfig.title}
      </Heading>
      <p className="hero__subtitle">{siteConfig.tagline}</p>
    </>
  );
}

function HomepageTopImage() {
  return (
    <img
      src={require("@site/static/img/screenshot_test_play.png").default}
      alt="screenshot_test_play.png"
      width="200px"
    />
  );
}

function HomepageBadges() {
  return (
    <div className={styles.buttons}>
      <a
        // href="https://apps.apple.com/jp/app/ai%E6%9A%97%E8%A8%98%E3%82%AB%E3%83%BC%E3%83%89/id1580596147"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("@site/static/img/app-store-badge.png").default}
          alt="app-store-badge.png"
        />
      </a>
      <a
        // href="https://play.google.com/store/apps/details?id=dev.skapp.ai_flash_card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("@site/static/img/google-play-badge.png").default}
          alt="google-play-badge.png"
        />
      </a>
      <a href="https://ankiapp.site/" target="_blank" rel="noopener noreferrer">
        <img src={require("@site/static/img/web-app-badge.png").default} alt="web-app-badge.png" />
      </a>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <HomepageTitle />
        <HomepageTopImage />
        <HomepageBadges />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
