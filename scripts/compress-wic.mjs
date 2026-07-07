import sharp from "sharp";
import fs from "fs";

const fp = "C:/Users/ic/OneDrive/Desktop/naledi-interiors-quiet-luxury/src/assets/projects-new/Makindye Walk in closet i.jpg";
const tmp = fp + ".tmp";

// Resize to max 1920px wide AND compress — hero images never need more than 1920px
const kbBefore = Math.round(fs.statSync(fp).size / 1024);
await sharp(fp)
  .resize({ width: 1920, withoutEnlargement: true })
  .jpeg({ quality: 75, mozjpeg: true })
  .toFile(tmp);

const kbAfter = Math.round(fs.statSync(tmp).size / 1024);
fs.renameSync(tmp, fp);
console.log(`Makindye Walk in closet i.jpg: ${kbBefore} KB → ${kbAfter} KB`);
