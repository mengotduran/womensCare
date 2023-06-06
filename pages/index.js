import Head from 'next/head';
import ReactDOM from "react-dom";
import styles from '../styles/Home.module.css';
import HoverMenuButton from './hoverMenuButton';
import "@reach/menu-button/styles.css";
import "@reach/combobox/styles.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Women's Care</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <h2>Hello there  vincent</h2>
       <HoverMenuButton title="Dropdown 1" />
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
