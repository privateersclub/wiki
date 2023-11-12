import fs from "fs";
import path from "path";
import matter, { type GrayMatterFile } from "gray-matter";
import { getTableOfContents, Items } from "../shared";

const dir = path.join(__dirname, "/wiki/");

async function getMetadata(
  path: string,
): Promise<{ frontmatter: GrayMatterFile<string>; toc: Items }> {
  const contents = fs.readFileSync(path, "utf8");
  const frontmatter = matter(contents);
  const toc = await getTableOfContents(contents);
  return { frontmatter, toc };
}

export function generateSidebar(locale: string): any[] {
  let localePath = "";
  let localeUri = "";
  const items: {
    text: string;
    link: string;
    base: string;
    items: { text: string; link: string }[];
  }[] = [];

  if (locale !== "en-us") {
    localeUri = `/${locale}/wiki/`;
    localePath = path.join(__dirname, localeUri);
  } else {
    // default directory for en-us
    localeUri = "/wiki/";
    localePath = dir;
  }

  fs.readdirSync(localePath).forEach(async (file) => {
    const filePath = path.join(localePath, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile() && path.extname(file) === ".md") {
      const { frontmatter, toc } = await getMetadata(filePath);
      const title = frontmatter.data.title;
      if (!title) throw new Error("Cannot find title in metadata: " + filePath);
      const tocItems = toc.items?.map((item) => ({
        text: item.title,
        link: `${file.replace(/\.md$/, "")}${item.url}`,
      }));
      items.push({
        text: title,
        link: `${file.replace(/\.md$/, "")}`,
        base: `${localeUri}`,
        items: tocItems!,
      });
    }
  });
  const sidebar = [{ items: items }];
  return sidebar;
}
