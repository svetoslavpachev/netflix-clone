import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner/banner'
import NaVbar from '../components/nav/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NaVbar username="eseto"/>
      <Banner
        title="batman"
        subTitle="Very nice movie"
        imgUrl="https://media.istockphoto.com/photos/the-dark-knight-picture-id458603411?k=20&m=458603411&s=612x612&w=0&h=FPUeTxLiNyUeQzxCphesL2QaL6yngA3v43d-YQ-3Brg="
      />
      {/* <Card /> */}
    </div>
  )
}
