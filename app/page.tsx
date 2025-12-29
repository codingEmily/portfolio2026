import Hero from "./pages/hero"
import About from "./pages/about"
import Nav from "@/assets/nav"

export default function Home() {
  return (
    <div>
      <main>
        <Nav />
        <Hero />
        <About />
      </main>
    </div>
  )
}
