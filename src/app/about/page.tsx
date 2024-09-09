import Heading from "@/components/heading";

export const metadata = {
    title: "About",
    description: "Bloggr adalah blog yang berisi artikel tentang pemrograman dan teknologi.",
}

export default function Page() {
    return (
        <div className="max-w-screen-sm mx-auto pt-4">
            <Heading>About</Heading>
            <p>Bloggr adalah blog yang berisi artikel tentang pemrograman dan teknologi.</p>
        </div>
    )
}