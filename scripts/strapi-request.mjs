import {writeFileSync} from "node:fs";

const url = "http://localhost:1337/api/posts" + "?populate=*";
const response = await fetch(url);
const body = await response.json();
const posts = JSON.stringify(body, null, 2);
// console.log(posts);
const file = 'scripts/strapi-response.json';
writeFileSync(file, posts, 'utf-8');