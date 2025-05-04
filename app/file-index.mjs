import fs from "fs";

import { CINEMA_PORT, CINEMA_HOST } from './consts.mjs';

var fileIndex = [];

function buildFileIndex() {
  fileIndex = [];
  fs.readdir("./movies", (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }
    files.forEach((file) => {
      let link = encodeURI(`/movies/${file}`);
      let newFileEntry = {name:file,
        link:link,
      };
      fileIndex.push(newFileEntry);
    });
  });
}

export { buildFileIndex, fileIndex };