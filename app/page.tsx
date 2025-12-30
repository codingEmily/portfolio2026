import Hero from "./pages/hero"
import About from "./pages/about"
import Nav from "@/app/nav"
import NavBar from "./components/NavBar"

export default function Home() {
  return (
    <div>
      <main>
        <NavBar></NavBar>
        <Nav />
        <Hero />
        <About />
      </main>
    </div>
  )
}
