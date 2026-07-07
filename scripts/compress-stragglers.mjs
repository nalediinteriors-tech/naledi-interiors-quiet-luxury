import sharp from "sharp";
import fs from "fs";

const BASE = "C:/Users/ic/OneDrive/Desktop/naledi-interiors-quiet-luxury/src/assets/";

// Any file still over 150 KB gets one more pass at quality 70
const files = [
  "corporate/dermatome/dermatome-waiting-area.jpg",
  "residential/bedrooms/bedroom-lakefront-i.jpg",
];

for (const f of files) {
  const fp = BASE + f;
  const kb = Math.round(fs.statSync(fp).size / 1024);
  const tmp = fp + ".tmp";
  await sharp(fp).jpeg({ quality: 70, mozjpeg: true }).toFile(tmp);
  const kb2 = Math.round(fs.statSync(tmp).size / 1024);
  fs.renameSync(tmp, fp);
  console.log(f + ": " + kb + " KB -> " + kb2 + " KB");
}
console.log("Done.");
