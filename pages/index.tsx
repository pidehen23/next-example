import Head from "next/head";
import { AppProps } from "next/app";
import React from "react";
import Layout, { siteTitle } from "../components/layout";
import { Inspector } from "react-dev-inspector";

import utilStyles from "../styles/utils.module.scss";

// https://github.com/zthxxx/react-dev-inspector#inspector-component-props
const InspectorWrapper =
  process.env.NODE_ENV === "development" ? Inspector : React.Fragment;

export default function Home({}: AppProps) {
  return (
    <InspectorWrapper keys={["control", "shift", "command", "c"]}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
    </InspectorWrapper>
  );
}
