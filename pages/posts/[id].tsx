import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from "next/head";

import Layout from '../../components/layout';
import { getAllPostIds,getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'

type IProps =InferGetStaticPropsType<typeof getStaticProps>&{};

export default function Post({postData}:IProps) {
  return ( <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>)
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds() // list
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(content:GetStaticPropsContext<{id:string}>) {
  // Fetch necessary data for the blog post using params.id
  // console.log(content,'<-----');
  const postData =await getPostData(content.params.id)

  return {
    props: {
      postData
    }
  }
}