import Heading from "@/components/heading";
import Image from "next/image";
import {getPost} from "@/lib/post";
import {Metadata} from "next";

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
            <p className="italic text-sm pb-2">
                {post.date} by {post.author}
            </p>
            <Image
                src={post.image}
                alt="Blog Thumbnail"
                width={640}
                height={360}
                className="mb-2 rounded-lg"
            />
            <article
                dangerouslySetInnerHTML={{__html: post.body}}
                className="max-w-screen-sm prose dark:prose-dark"
            />
        </div>
    )
}