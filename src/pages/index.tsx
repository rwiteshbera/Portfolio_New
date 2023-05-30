import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs/Blogs";


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen w-screen overflow-x-hidden">
      <Head>
        <title>Rwitesh Bera</title>
        <meta name="description" content="Rwitesh Bera | Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Head
      er  */}
      <Header />

      {/* Hero  */}
      <section id="hero">
        <Hero />
      </section>

      {/* About  */}
      <section id="about">
        <About />
      </section>

      {/* Projects  */}
      <section id="projects">
        <Projects />
      </section>

      {/* Blogs  */}
      <section id="blogs">
        <Blogs />
      </section>

      {/* Footer  */}
      <section>
        <Footer />
      </section>
    </div>
  );
}
