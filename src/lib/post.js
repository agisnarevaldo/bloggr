import {readFile, readdir} from "node:fs/promises";
import matter from "gray-matter";
import {marked} from "marked";

export async function getPost(slug) {
    const text = await readFile(`src/content/blog/${slug}.md`, "utf-8");
    const {
        content,
        data: { title, description, date, author, image },
    } = matter(text);

    const body = marked(content);
    return { slug, title, description, date, author, image, body };
}

export async function getAllPost() {
    const slugs = await getSlugs()

    const posts = [];

    for (const slug of slugs) {
        const post = await getPost(slug);
        posts.push({ slug, ...post });
    }

    return posts;
}

export async function getSlugs() {
    const files = await readdir("src/content/blog");
    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.slice(0, -".md".length));
}