import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import PageNavigator from "../components/PageNavigator";
import Landing from "../components/Pages/Landing";
import { pages } from "../components/Pages";

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Head>
        <title>Bland</title>
        <meta name="description" content="Implementing bland design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="outer-wrapper">
        <div className="wrapper">
          <Landing />
          <Landing />
          <Landing />
        </div>
      </div>
      <PageNavigator
        pages={pages}
        currentPage={currentPage}
        onChangePage={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default Home;
