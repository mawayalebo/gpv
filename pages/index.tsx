import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/Carousel'
import Combo from '../components/Combo'
import Contact from '../components/Contact'


const Home: NextPage = () => {
  
  return (
    <main className="">
      <Head>
        <title>GPV Group | Business Solutions</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <div className='grid grid-cols-2 p-5'>
        <div>
          <Combo />
        </div>
        <Contact/>
      </div>
      
    </main>
  )
}


export default Home
