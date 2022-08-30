import { Octokit } from "https://cdn.skypack.dev/octokit";
import { token } from "./src/token.js";

const article = document.createElement("article");
const body = document.getElementsByTagName("body")[0];

const converter = new showdown.Converter();

const octokit = new Octokit({
  auth: token,
});

async function test() {
  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: "wfercanas",
      repo: "markdown",
      path: "/articles/test.md",
    }
  );

  const data = atob(response.data.content);
  const html = converter.makeHtml(data);
  article.innerHTML = html;
  body.appendChild(article);
}

test();
