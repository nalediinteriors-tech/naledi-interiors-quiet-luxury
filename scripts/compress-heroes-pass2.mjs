import sharp from "sharp";
import fs from "fs";

const DIR = "C:/Users/ic/OneDrive/Desktop/naledi-interiors-quiet-luxury/src/assets/projects-new/";

// Files still over 200 KB after first pass
const FILES = [
  { file: "Fb banner supporting iii.jpg", quality: 75 },
  { file: "bedroom.jpg",                  quality: 75 },
  { file: "Modern Classic Mansion ii.jpg",quality: 75 },
  { file: "Makindye Walk in closet i.jpg",quality: 65 }, // very large photo needs more compression
];

for (const { file, quality } of FILES) {
  const fp = DIR + file;
  if (!fs.existsSync(fp)) { console.log(`SKIP (not found): ${file}`); continue; }
  const kbBefore = Math.round(fs.statSync(fp).size / 1024);
  const tmp = fp + ".tmp";
  await sharp(fp).jpeg({ quality, mozjpeg: true }).toFile(tmp);
  const kbAfter = Math.round(fs.statSync(tmp).size / 1024);
  fs.renameSync(tmp, fp);
  console.log(`${file}  ${kbBefore} KB → ${kbAfter} KB  (q${quality})`);
}
console.log("Done.");
