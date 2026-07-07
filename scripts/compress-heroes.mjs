// Compress all actively-used projects-new images.
// PNGs are converted to JPG (photos don't benefit from PNG).
// Target: ≤ 200 KB per image at quality 82 (heroes can be slightly larger).
import sharp from "sharp";
import fs from "fs";
import path from "path";

const DIR = "C:/Users/ic/OneDrive/Desktop/naledi-interiors-quiet-luxury/src/assets/projects-new/";

// Files actively imported in TSX pages
const FILES = [
  "Fb banner Hero Main i.png",
  "Fb banner supporting ii.png",
  "Fb banner supporting iii.jpg",
  "004 Tlokweng Modern Haven ii.png",
  "004 Tlokweng Modern Haven.png",
  "004 lougne.png",
  "Modern Classic Mansion (1).jpg",
  "Makindye Walk in closet i.jpg",
  "bedroom.png",
  "Makindye speakeasy (1).jpg",
  "Modern Classic Mansion ii.png",
];

for (const file of FILES) {
  const src = DIR + file;
  const ext = path.extname(file).toLowerCase();
  const isPng = ext === ".png";
  const dest = isPng ? src.replace(/\.png$/i, ".jpg") : src;
  const tmp = dest + ".tmp";

  const kbBefore = Math.round(fs.statSync(src).size / 1024);

  await sharp(src)
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(tmp);

  const kbAfter = Math.round(fs.statSync(tmp).size / 1024);
  fs.renameSync(tmp, dest);

  if (isPng) {
    fs.unlinkSync(src); // remove original PNG
    console.log(`PNG→JPG  ${file}  ${kbBefore} KB → ${kbAfter} KB`);
  } else {
    console.log(`COMPRESS ${file}  ${kbBefore} KB → ${kbAfter} KB`);
  }
}

console.log("\nDone.");
