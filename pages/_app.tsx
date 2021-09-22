import "../styles/global.scss";
import { AppProps } from "next/app";
import React from "react";
import { Inspector } from "react-dev-inspector";

// https://github.com/zthxxx/react-dev-inspector#inspector-component-props
const InspectorWrapper =
  process.env.NODE_ENV === "development" ? Inspector : React.Fragment;

export default function App({ Component, pageProps }: AppProps) {
  return(
    <InspectorWrapper keys={["control", "shift", "command", "c"]}>
    <Component {...pageProps} />
    </InspectorWrapper>);
}
