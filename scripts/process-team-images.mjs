import sharp from "sharp";
import fs from "fs";
import path from "path";

// Copies team headshots from Downloads into src/assets/team, resizing + compressing
// to keep the site fast (same approach as scripts/compress-images.mjs).
const SRC = "C:\\Users\\ic\\Downloads\\Team Images";
const DEST = new URL("../src/assets/team/", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

const MAX_WIDTH = 900; // portraits are displayed at a fraction of this on the page
const QUALITY = 82;

const MAP = [
  { folder: "Lise", src: "Lise.jpg", dest: "lise.jpg" },
  { folder: "Daphney", src: "Daphney.jpg", dest: "daphney.jpg" },
  { folder: "Tshire", src: "Tshire.jpg", dest: "tshire-founder.jpg", crop: [2, 3], position: "north" },
  { folder: "Tsitsi/final", src: "basetsana rantao.jpg", dest: "basetsana.jpg" },
];

fs.mkdirSync(DEST, { recursive: true });

for (const { folder, src, dest, crop, position } of MAP) {
  const srcPath = path.join(SRC, folder, src);
  const destPath = path.join(DEST, dest);
  const sizeBefore = fs.statSync(srcPath).size;

  const meta = await sharp(srcPath).metadata();

  let w = meta.width ?? 0;
  let h = meta.height ?? 0;

  // Optional aspect-ratio crop (e.g. [2, 3] for a 2:3 portrait frame)
  if (crop && w && h) {
    const [rw, rh] = crop;
    h = Math.min(h, Math.round((w * rh) / rw));
  }

  // Scale down if wider than the max display width, preserving the chosen crop
  if (w > MAX_WIDTH) {
    const scale = MAX_WIDTH / w;
    w = MAX_WIDTH;
    h = Math.round(h * scale);
  }

  const pipeline = sharp(srcPath);
  if (w !== meta.width || h !== meta.height) {
    pipeline.resize({ width: w, height: h, fit: "cover", position: position || "centre" });
  }

  await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toFile(destPath);

  const after = await sharp(destPath).metadata();
  const sizeAfter = fs.statSync(destPath).size;
  console.log(
    `${dest}: ${after.width}x${after.height} ${Math.round(sizeBefore / 1024)}KB -> ${Math.round(
      sizeAfter / 1024
    )}KB`
  );
}
