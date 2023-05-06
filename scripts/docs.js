const fs = require("fs");
const path = require("path");

const input = fs.readFileSync("README.md", "utf8");
const sections = input.split(/\n(?=(?<!\#\#)\#\#[^#])/);
let toc = [];

sections.forEach((section, index) => {
  const match = section.match(/^## (.*)/m);
  const title = match ? match[1] : "start";

  const file = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const output = path.join("docs/wiki/", file + ".md");

  fs.writeFileSync(output, section, "utf-8");

  if (title !== "start") {
    toc.push({
      text: title,
      link: `/wiki/${file}`,
    });
  }
});

// Write a starting page
let tocHTML = "# Begin your journey:\n<ul>";

toc.forEach((item) => {
  tocHTML += `<li><a href="${item.link}">${item.text}</a></li>`;
});

tocHTML += "</ul>";

fs.writeFileSync("docs/wiki/start.md", tocHTML, "utf-8");
fs.writeFileSync(
  "docs/sidebar.js",
  `module.exports = ${JSON.stringify(toc, null, 2)}`,
  "utf-8"
);
