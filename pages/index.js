import Head from 'next/head';
import ReactDOM from "react-dom";
import styles from '../styles/Home.module.css';
import {HomePage} from '../src/components/home/home-page.jsx';

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Women's Care</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data}/>
    </div>
  )
}


export async function getStaticProps() {
  const {therapy} = await import('/data/data.json')
  console.log(therapy)

  return {
    props: {
      data: therapy,
    }
  }
}
