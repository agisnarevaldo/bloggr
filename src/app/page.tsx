  import Image from "next/image";
  import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
          <h1 className="text-4xl font-bold">Hello World</h1>
          <p className="text-lg text-center sm:text-left">Bloggr</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="https://github.com/agisnarevaldo    ">Agisna Revaldo</Link>
      </footer>
    </div>
  );
}
