import fs from "fs";
import path from "path"
import matter from "gray-matter";

const dir = path.join(__dirname, "/wiki/")

export function getSidebar(dir: string) {
  const sidebar = []
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile() && path.extname(file) === ".md") {
      const contents = fs.readFileSync(filePath, "utf8");
      const frontmatter = matter(contents);
      const data = { text: frontmatter.data.title, link: `/wiki/${file.replace(/\.md$/, "")}` }
      // @ts-ignore
      sidebar.push(data)
    }
  });
  return sidebar
}

export const sidebar = getSidebar(dir)
