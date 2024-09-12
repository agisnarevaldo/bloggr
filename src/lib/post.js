import {readdir} from "node:fs/promises";
import {marked} from "marked";
import qs from "qs";

const BACKEND_URL = "http://localhost:1337";

export async function getPost(slug) {
    // const text = await readFile(`src/content/blog/${slug}.md`, "utf-8");
    // const {
    //     content,
    //     data: { title, description, date, author, image },
    // } = matter(text);
    //
    // const body = marked(content);
    // return { slug, title, description, date, author, image, body };

    const url = "http://localhost:1337/api/posts/" + "?" + qs.stringify({
        filters: {
            slug: {
                $eq: slug
            }
        },
        fields: ["slug", "title", "description", "publishedAt", "author", "body"],
        populate: {image: {fields: ["url"]}},
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 1, withCount: false },
    }, {
        encodeValuesOnly: true
    });

    const response = await fetch(url);
    const {data} = await response.json();
    const { attributes } = data[0];
    return {
        slug: attributes.slug,
        title: attributes.title,
        description: attributes.description,
        body: marked(attributes.body, {headerIds: false, mangle: false}),
        author: attributes.author,
        date: attributes.publishedAt.slice(0, "YYYY-MM-DD".length),
        image: BACKEND_URL + attributes.image.data.attributes.url,
    }
}

export async function getAllPost() {
    const url = `${BACKEND_URL}/api/posts?` +
        qs.stringify({
        fields: ["slug", "title", "description", "publishedAt", "author", "body"],
        populate: {image: {fields: ["url"]}},
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 6},
    }, {
        encodeValuesOnly: true
    });
    const response = await fetch(url);
    const {data} = await response.json();
    console.log(data);

    return data.map(({ attributes }) => ({
        slug: attributes.slug,
        title: attributes.title,
        description: attributes.description,
        author: attributes.author,
        date: attributes.publishedAt.slice(0, "YYYY-MM-DD".length),
        image: BACKEND_URL + attributes.image.data.attributes.url,
    }));
}

export async function getSlugs() {
    const files = await readdir("src/content/blog");
    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.slice(0, -".md".length));
}