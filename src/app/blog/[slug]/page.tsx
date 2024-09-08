    import Heading from "@/components/heading";
    import Image from "next/image";
    import {getPost} from "@/lib/post";

    interface PostPageProps {
        params: {
            slug: string;
        };
    }

    export default async function PostPage({params: {slug}}: PostPageProps) {
        const post = await getPost(slug);

    return (
            <div>
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