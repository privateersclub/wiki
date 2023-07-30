import fs from "fs";
import path from "path";
import matter, { type GrayMatterFile } from "gray-matter";
import { buildTOC } from "./toc";

const dir = path.join(__dirname, "/wiki/");

function getMetadata(path: string): GrayMatterFile<string> {
  const contents = fs.readFileSync(path, "utf8");
  return matter(contents);
}

export function generateSidebar(locale: string): any[] {
  let localePath = "";
  let items: { text: string; link: string }[] = [];

  buildTOC();

  if (locale !== "en-us") {
    localePath = `${dir}/${locale}/wiki`;
  } else {
    localePath = `${dir}`;
  }

  fs.readdirSync(localePath).forEach((file) => {
    const filePath = path.join(localePath, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile() && path.extname(file) === ".md") {
      const title = getMetadata(filePath).data.title;

      if (!title) throw new Error("Cannot find title in metadata: " + filePath);

      items.push({
        text: title,
        link: `/wiki/${file.replace(/\.md$/, "")}`,
      });
    }
  });
  return items;
}
