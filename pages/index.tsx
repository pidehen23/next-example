import Head from "next/head";
import React from "react";
import Link from 'next/link'
import { GetStaticPropsContext,InferGetStaticPropsType } from 'next';
import Layout, { siteTitle } from "../components/layout";

import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date'

export const getStaticProps= async (context:GetStaticPropsContext<{}>) => {
  const allPostsData = getSortedPostsData();
  // console.log(allPostsData,'====',context);

  return {
    props: {
      allPostsData
    }
  }
}

type IProps =InferGetStaticPropsType<typeof getStaticProps>&{};

export default function Home(props: IProps) {
 const {allPostsData}=props;

  return (
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
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}></Date>
              </small>
            </li>
          ))}
        </ul>
      </section>
      </Layout>
  );
}
