import fs from "fs";

async function buildFileIndex() {
  let fileIndex = [];
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
  return fileIndex;
}

export { buildFileIndex };