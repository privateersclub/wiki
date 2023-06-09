import fs from "fs";
import path from "path"
import matter from "gray-matter";

const dir = path.join(__dirname, "/wiki/")

export function buildTOC() {
  const toc = [];
  let tocHTML = "\n<ul>\n";
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile() && path.extname(file) === ".md") {
      const contents = fs.readFileSync(filePath, "utf8");
      const frontmatter = matter(contents);
      const data = { text: frontmatter.data.title, link: `/wiki/${file.replace(/\.md$/, "")}` }
      // @ts-ignore
      toc.push(data)
    }
  });
  toc.forEach((item: any) => {
    tocHTML += `<li><a href="${item.link}">${item.text}</a></li>\n`;
  });

  tocHTML += "</ul>";

  fs.writeFileSync(path.join(__dirname, "/toc.md"), tocHTML, "utf-8");
}
