import fs from "fs";
import path from "path";
import { getTableOfContents } from "./shared";
function saveFile() {
  return new Promise((rslv, rjct) => {
    getTableOfContents(
      fs.readFileSync("./docs/wiki/emulation.md", "utf8"),
    ).then((foo) => {
      console.log(JSON.stringify(foo, null, 2));
    });
  });
}

saveFile();
