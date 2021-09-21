import Link from "next/link";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost({}: AppProps) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
