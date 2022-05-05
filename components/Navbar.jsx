import Link from "next/link"


const Navbar = () => {
  return (
    <div>
        <Link href="/">
            Home
        </Link>
        <Link href="/About">
            About
        </Link>
        <Link href="/Contact">
            Contact
        </Link>
        <Link href="/Projects">
            Projects
        </Link>
    </div>
  )
}

export default Navbar