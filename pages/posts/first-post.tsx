import Link from "next/link";
import { AppProps } from "next/app";

export default function FirstPost({}: AppProps) {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
