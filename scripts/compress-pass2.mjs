import sharp from "sharp";
import fs from "fs";
import path from "path";

const BASE = "C:/Users/ic/OneDrive/Desktop/naledi-interiors-quiet-luxury/src/assets/";
const files = [
  "residential/lounges/lounge-grandeur-i.jpg",
  "residential/lounges/lounge-haven-i.jpg",
  "corporate/dermatome/dermatome-waiting-area.jpg",
  "residential/lounges/lounge-manor-ii.jpg",
  "residential/bedrooms/bedroom-lakefront-i.jpg",
];

for (const f of files) {
  const fp = BASE + f;
  const kb = Math.round(fs.statSync(fp).size / 1024);
  if (kb > 150) {
    const tmp = fp + ".tmp";
    await sharp(fp).jpeg({ quality: 75, mozjpeg: true }).toFile(tmp);
    const kb2 = Math.round(fs.statSync(tmp).size / 1024);
    fs.renameSync(tmp, fp);
    console.log(f + ": " + kb + " KB -> " + kb2 + " KB");
  } else {
    console.log(f + ": " + kb + " KB (already OK)");
  }
}
console.log("Done.");
