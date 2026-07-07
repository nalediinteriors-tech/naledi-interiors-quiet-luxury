import sharp from "sharp";
import fs from "fs";
import path from "path";

const ASSETS = new URL("../src/assets/", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

// Active portfolio folders only (skip projects-new — unused in portfolio grid)
const FOLDERS = [
  "corporate/dermatome",
  "corporate/dermatome-new",
  "residential/bathrooms",
  "residential/bedrooms",
  "residential/kids-bedrooms",
  "residential/dining",
  "residential/dressing",
  "residential/lounges",
  "renders/bathrooms",
  "renders/bedrooms",
  "renders/dining",
  "renders/dressing",
  "renders/kitchen",
];

// These PNGs must become JPEGs (PNG is huge for photos)
const PNG_CONVERT = new Set([
  "residential/bedrooms/bedroom-lakefront-i.png",
  "residential/lounges/lounge-grandeur-i.png",
  "residential/dining/dining-grandeur-i.png",
]);

// Target: JPEG quality 82 with mozjpeg; keep if already <= 150 KB
const MAX_KB = 150;
const QUALITY = 82;

let converted = 0, compressed = 0, skipped = 0;

async function processFile(folder, filename) {
  const relPath = `${folder}/${filename}`;
  const fullPath = path.join(ASSETS, folder, filename);
  const ext = path.extname(filename).toLowerCase();
  const sizeBefore = fs.statSync(fullPath).size;
  const kbBefore = Math.round(sizeBefore / 1024);

  if (PNG_CONVERT.has(relPath)) {
    // Convert PNG → JPEG, delete original PNG
    const jpgPath = fullPath.replace(/\.png$/i, ".jpg");
    await sharp(fullPath).jpeg({ quality: QUALITY, mozjpeg: true }).toFile(jpgPath);
    const kbAfter = Math.round(fs.statSync(jpgPath).size / 1024);
    fs.unlinkSync(fullPath);
    console.log(`  PNG→JPG  ${relPath}  ${kbBefore} KB → ${kbAfter} KB`);
    converted++;
    return;
  }

  if (ext !== ".jpg" && ext !== ".jpeg") {
    // Any remaining PNGs under 150 KB — leave alone
    if (kbBefore <= MAX_KB) { skipped++; return; }
    // Large PNG that isn't in our convert list — convert anyway
    const jpgPath = fullPath.replace(/\.png$/i, ".jpg");
    await sharp(fullPath).jpeg({ quality: QUALITY, mozjpeg: true }).toFile(jpgPath);
    const kbAfter = Math.round(fs.statSync(jpgPath).size / 1024);
    fs.unlinkSync(fullPath);
    console.log(`  PNG→JPG  ${relPath}  ${kbBefore} KB → ${kbAfter} KB`);
    converted++;
    return;
  }

  // JPEG — skip if already small enough
  if (kbBefore <= MAX_KB) {
    console.log(`  OK       ${relPath}  (${kbBefore} KB)`);
    skipped++;
    return;
  }

  // Compress in place
  const tmp = fullPath + ".tmp.jpg";
  await sharp(fullPath).jpeg({ quality: QUALITY, mozjpeg: true }).toFile(tmp);
  const kbAfter = Math.round(fs.statSync(tmp).size / 1024);
  fs.renameSync(tmp, fullPath);
  console.log(`  COMPRESS ${relPath}  ${kbBefore} KB → ${kbAfter} KB`);
  compressed++;
}

console.log("Compressing portfolio images...\n");
for (const folder of FOLDERS) {
  const dir = path.join(ASSETS, folder);
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter((f) => /\.(jpg|jpeg|png)$/i.test(f));
  for (const file of files) {
    await processFile(folder, file);
  }
}

console.log(`\nDone. Converted: ${converted}  Compressed: ${compressed}  Skipped (already small): ${skipped}`);
