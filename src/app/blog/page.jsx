import Heading from "../../components/heading";
// import Pagination from "../../components/pagination";
import PostCard from "../../components/postCard";
import {getAllPost} from "../../lib/post";

export const revalidate = 30;

export const metadata = {
    title: "Blog",
    description: "List of blog posts",
};

export default async function BlogPage() {
    const posts = await getAllPost();
    // console.log(posts);
    return (
        <div className="max-w-screen-sm mx-auto pt-4">
            <Heading>Blog</Heading>
            <h2 className="text-2xl mb-3">List of posts</h2>
            {/*<Pagination href="/blog" page={page} pageCount={pageCount} />*/}
            {posts.map((post, index) => (
                <PostCard
                key={index} // Use index as key because the slug is not unique
                    title={post.title}
                    href={`/blog/${post.slug}`}
                    image={post.image}
                    description={post.description}  // Add description prop
                    date={post.date}
                    author={post.author}
                />
            ))}
        </div>
    );
}
//
// function parsePageParam(paramValue) {
//     if (paramValue) {
//         const page = parseInt(paramValue);
//         if (isFinite(page) && page > 0) {
//             return page;
//         }
//     }
//     return 1;
// }