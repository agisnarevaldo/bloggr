import {marked} from "marked";
import qs from "qs";

const BACKEND_URL = "https://appealing-actor-22426632b3.strapiapp.com";

export async function getPost(slug) {
    const { data } = await fetchPosts({
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

    const { attributes } = data[0];
    return {
        ...toPost({ attributes }),
        body: marked(attributes.body, { headerIds: false, mangle: false }),
    }
}

export async function getAllPost() {
    const { data } = await fetchPosts({
        fields: ["slug", "title", "description", "publishedAt", "author", "body"],
        populate: {image: {fields: ["url"]}},
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 3},
    });
    return data.map(toPost);
}

export async function getSlugs() {
    const { data } = await fetchPosts({
        fields: ["slug"],
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 100 },
    });
    return data.map(({ attributes }) => attributes.slug);
}

async function fetchPosts(parameters) {
    const url = `${BACKEND_URL}/api/posts?` + qs.stringify(parameters, {encodeValuesOnly: true});
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} | ${response.statusText}`);
    }
    return response.json();
}

function toPost({ attributes }) {
    return {
        slug: attributes.slug,
        title: attributes.title,
        description: attributes.description,
        author: attributes.author,
        date: attributes.publishedAt.slice(0, "YYYY-MM-DD".length),
        image: attributes.image.data.attributes.url,
    };
}