import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/Carousel'

const Home: NextPage = () => {
  return (
    <main className="">
      <Head>
        <title>GPV Group | Business Solutions</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Carousel/>
    </main>
  )
}

export default Home
