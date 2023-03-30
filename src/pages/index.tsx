import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen w-screen overflow-x-hidden'>
      <Head>
        <title>Rwitesh Bera</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Head
      er  */}
      <Header />

      {/* Hero  */}
      <section id='hero'>
      <Hero />
      </section>

      {/* About  */}
      <section id='about'>
        <About />
      </section>

      {/* Volunteering Experience  */}

      {/* Projects  */}

      {/* Contact Me  */}
    </div>
  )
}
