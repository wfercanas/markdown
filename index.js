import { token } from "./src/token.js";

const article = document.createElement("article");
const body = document.getElementsByTagName("body")[0];

const converter = new showdown.Converter();

const API =
  "https://api.github.com/repos/wfercanas/markdown/contents/articles/test.md";
async function testFetch() {
  const response = await fetch(API, {
    method: "GET",
    headers: {
      authorization: `token ${token}`,
      "Content-Type": "text/html",
    },
  });

  const data = await response.json();
  const content = atob(data.content);
  const html = converter.makeHtml(content);
  article.innerHTML = html;
  body.appendChild(article);
}

testFetch();
