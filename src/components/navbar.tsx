import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center max-w-screen-sm mx-auto">
            <Link href="/" className="text-2xl font-bold">Bloggr</Link>
            <ul className="flex space-x-4">
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
            </ul>
        </nav>
    )
}