import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Home",
}

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-4 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
                <Image
                    className=""
                    src="/logo.png"
                    alt="Next.js logo"
                    width={120}
                    height={60}
                    priority
                />
                <h1 className="text-4xl font-bold">Bloggr</h1>
            </main>
            <footer className="row-start-4 flex flex-wrap items-center justify-center">
                <Link href="https://github.com/agisnarevaldo">&copy;2024 Agisna Revaldo</Link>
            </footer>
        </div>
    );
}
