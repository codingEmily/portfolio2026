import Link from "next/link"

export default function Nav() {
  return (
    <>
      <nav style={{ backgroundColor: "red" }}>
        <Link href={"/"}>Home</Link>
        <span> </span>
        <Link href={"../pages/about"}>About</Link>
      </nav>
    </>
  )
}
