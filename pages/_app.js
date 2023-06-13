import { Component } from "react";
import "../styles/globals.scss";
import MainLayout from "./layout/main-layout";
import { useEffect } from 'react';

export default function App({Component, pageProps}) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

    return (
        <>
        <MainLayout>
            <Component {...pageProps}/>
        </MainLayout>
        </>
    )
}