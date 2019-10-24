import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
    <div>
        <Head>
            <title>Ireri Victor</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <div className="hero">
            <h1 className="title">
                Welcome to My little corner of the Internet!
            </h1>
            <p className="description">
                This is the place where I be posting all the dope shit I'm up
                do. Its gonna be fun!!
            </p>
        </div>

        <style jsx>{`
            .hero {
                width: 100%;
                color: #333;
            }
            .title {
                margin: 0;
                width: 100%;
                padding-top: 80px;
                line-height: 1.15;
                font-size: 48px;
            }
            .title,
            .description {
                text-align: center;
            }
        `}</style>
    </div>
);

export default Home;
