import { Component } from "react";
import "../styles/globals.scss";
import MainLayout from "./layout/main-layout";

export default function App({Component, pageProps}) {
    return (
        <>
        <MainLayout>
            <Component {...pageProps}/>
        </MainLayout>
        </>
    )
}