import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const cycle = path.join(root, '.paperclip/daily-content/2026-10-05');
const blog = JSON.parse(fs.readFileSync(path.join(cycle, 'blog-vira-74-manifest.json'), 'utf8'));
const research = JSON.parse(fs.readFileSync(path.join(cycle, 'research-vira-73-manifest.json'), 'utf8'));
const files = new Set(blog.entries.map((x) => x.imagePath));
for (const item of research.draftedItems) {
  const raw = fs.readFileSync(path.join(root, item.contentPath), 'utf8');
  files.add(raw.match(/^image:\s*(\S+)/m)[1]);
}

const results = [];
for (const imagePath of [...files].sort()) {
  const input = path.join(root, 'public', imagePath.replace(/^\//, ''));
  const source = fs.readFileSync(input);
  const metadata = await sharp(source).metadata();
  const raster = await sharp(source).png().toBuffer({ resolveWithObject: true });
  const decoded = await sharp(raster.data).raw().toBuffer({ resolveWithObject: true });
  if (!decoded.info.width || !decoded.info.height || decoded.data.length === 0) {
    throw new Error(`empty raster decode: ${imagePath}`);
  }
  results.push({
    imagePath,
    sourceFormat: metadata.format,
    sourceWidth: metadata.width,
    sourceHeight: metadata.height,
    rasterFormat: raster.info.format,
    rasterWidth: raster.info.width,
    rasterHeight: raster.info.height,
    rasterChannels: raster.info.channels,
    rasterBytes: raster.data.length,
    decodedPixelBytes: decoded.data.length,
    status: 'passed',
  });
}
const report = { status: 'passed', distinctImageCount: results.length, renderer: `sharp ${sharp.versions.sharp}; librsvg ${sharp.versions.rsvg}`, images: results };
fs.writeFileSync(path.join(cycle, 'image-raster-decode.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
