const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "/docs/wiki/");

function buildTOC() {
  const toc = [];
  fs.readdirSync(directoryPath).forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile() && path.extname(file) === ".md") {
      const contents = fs.readFileSync(filePath, "utf8");
      const title = contents.match(/^#\s*(.+)$/m);
      if (title) {
        toc.push({
          text: title[1].trim().replace(/^#*\s*/, ""),
          link: `/wiki/${file.replace(/\.md$/, "")}`,
        });
      }
    }
  });
  return toc;
}

const toc = buildTOC();
console.log(toc);

let tocHTML = "# Begin your journey:\n<ul>";

toc.forEach((item) => {
  tocHTML += `<li><a href="${item.link}">${item.text}</a></li>`;
});

tocHTML += "</ul>";

fs.writeFileSync("docs/start.md", tocHTML, "utf-8");
fs.writeFileSync(
  "docs/sidebar.js",
  `module.exports = ${JSON.stringify(toc, null, 2)}`,
  "utf-8"
);
