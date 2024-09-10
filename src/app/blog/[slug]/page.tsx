import Heading from "@/components/heading";
import Image from "next/image";
import {getPost, getSlugs} from "@/lib/post";
import {Metadata} from "next";
import ShareLinkButton from "@/components/shareLinkButton";

export async function generateStaticParams() {
    const slugs = await getSlugs();
    return slugs.map((slug) => ({slug}));
}

type MetaDataParams = {
    params: {
        slug: string,
    }
}

type Post = {
    title: string;
    description: string;
    date: string;
    author: string;
    image: string;
    body: string | Promise<string>
}

export async function generateMetadata( { params: { slug } }: MetaDataParams) : Promise<Metadata> {
    const post = await getPost(slug);

    return {
        title: post.title,
        description: post.description,
    };
}

interface PostPageProps {
    params: {
        slug: string;
    };
}

export default async function PostPage({params: {slug}}: PostPageProps) {
    const post: Post = await getPost(slug);

    return (
        <div className="max-w-screen-sm mx-auto pt-4">
            <Heading>{post.title}</Heading>
            <div className="flex gap-3 pb-2 items-baseline">
                <p className="italic text-sm pb-2">
                    {post.date} by {post.author}
                </p>
                <ShareLinkButton />
            </div>
            <Image
                src={post.image}
                alt="Blog Thumbnail"
                width={540}
                height={260}
                className="mb-2 rounded-lg mx-auto"
            />
            <article
                dangerouslySetInnerHTML={{__html: post.body}}
                className="max-w-screen-sm prose dark:prose-dark"
            />
        </div>
    )
}