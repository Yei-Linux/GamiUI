import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import { Hero } from "../components/Hero";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Building Gamified sites`}
      description="Building Gamified sites with beautiful components"
    >
      <Hero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
