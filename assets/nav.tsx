import Link from "next/link"

export default function Nav() {
  return (
    <>
      <nav style={{ backgroundColor: "red" }}>
        <Link href={"/"}>Home</Link>

        <Link href={"../pages/about"}>About</Link>
      </nav>
    </>
  )
}
