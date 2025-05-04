import fs from "fs/promises";

async function buildFileIndex() {
  let fileIndex = [];
  try {
    const files = await fs.readdir("./movies");
    files.forEach((file) => {
      console.log("File:", file);
      let link = encodeURI(`/movies/${file}`);
      let newFileEntry = {
        name: file,
        link: link,
      };
      fileIndex.push(newFileEntry);
    });
  } catch (err) {
    console.error("Error reading directory:", err);
  }
  console.log("File index:", fileIndex);
  return fileIndex;
}

export { buildFileIndex };