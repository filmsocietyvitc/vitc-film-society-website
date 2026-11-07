import Intro from './components/Intro'
import BackgroundVideo from './components/BackgroundVideo'
import FilmRail from './components/FilmRail'
import FrameCounter from './components/FrameCounter'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Domains from './components/Domains'
import Portfolio from './components/Portfolio'
import Events from './components/Events'
import Blog from './components/Blog'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Intro />

      <BackgroundVideo />
      <FilmRail side="left" />
      <FilmRail side="right" />
      <FrameCounter />
      <Nav />
      <Hero />
      <About />
      <Domains />
      <Portfolio />
      <Events />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}