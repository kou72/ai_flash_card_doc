import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageBadges from "@site/src/components/HomepageBadges";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <HomepageTitle />
          <HomepageTopImage />
          <HomepageBadges />
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

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
