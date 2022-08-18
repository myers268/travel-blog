/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from"$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/global.css" />
        <title>Traveling With</title>
        <meta
          name="description"
          content="Traveling the world with your's truly."
        />
      </Head>
      <Component />
    </>
  )
}