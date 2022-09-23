import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Bitmap from "../public/bitmap.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>axis aeternus</title>
        <meta name="description" content=""></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
