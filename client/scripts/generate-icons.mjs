import { deflateSync, inflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * PWA icon generator for Conceptual OBGYN.
 * Uses the official 'logo obygn.png' file to generate
 * all standard icon formats and favicons.
 *
 * Usage: node scripts/generate-icons.mjs
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = resolve(__dirname, '..', '..');
const OUT_DIR = resolve(__dirname, '..', 'public', 'icons');
const PUBLIC_DIR = resolve(__dirname, '..', 'public');
const BRAND_DIR = resolve(__dirname, '..', 'public', 'brand');
const LOGO_SRC = resolve(ROOT_DIR, 'logo obygn.png');

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(BRAND_DIR, { recursive: true });

/* ------------------------------------------------------------------ PNG ---- */

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

const crc32 = (buf) => {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i += 1) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, 'latin1'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
};

const encodePng = (width, height, rgba) => {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // colour type: truecolour + alpha
  ihdr[10] = 0; // deflate
  ihdr[11] = 0; // adaptive filtering
  ihdr[12] = 0; // no interlace

  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y += 1) {
    raw[y * (stride + 1)] = 0; // filter type: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
};

/* ------------------------------------------------------------- decode PNG ---- */

const decodePng = (buffer) => {
  let idats = [];
  let offset = 8;
  let width = 0;
  let height = 0;
  while (offset < buffer.length) {
    const len = buffer.readUInt32BE(offset);
    const type = buffer.slice(offset + 4, offset + 8).toString('ascii');
    if (type === 'IHDR') {
      width = buffer.readUInt32BE(offset + 8);
      height = buffer.readUInt32BE(offset + 12);
    } else if (type === 'IDAT') {
      idats.push(buffer.slice(offset + 8, offset + 8 + len));
    }
    offset += 8 + len + 4;
  }
  const raw = inflateSync(Buffer.concat(idats));
  const bpp = 4;
  const stride = width * bpp;
  const unfilter = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y += 1) {
    const filterType = raw[y * (stride + 1)];
    const rowStart = y * (stride + 1) + 1;
    const outStart = y * stride;
    for (let x = 0; x < stride; x += 1) {
      const val = raw[rowStart + x];
      const a = x >= bpp ? unfilter[outStart + x - bpp] : 0;
      const b = y > 0 ? unfilter[outStart - stride + x] : 0;
      const c = x >= bpp && y > 0 ? unfilter[outStart - stride + x - bpp] : 0;
      let recon = 0;
      if (filterType === 0) recon = val;
      else if (filterType === 1) recon = (val + a) & 0xff;
      else if (filterType === 2) recon = (val + b) & 0xff;
      else if (filterType === 3) recon = (val + Math.floor((a + b) / 2)) & 0xff;
      else if (filterType === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        recon = (val + (pa <= pb && pa <= pc ? a : pb <= pc ? b : c)) & 0xff;
      }
      unfilter[outStart + x] = recon;
    }
  }
  return { width, height, pixels: unfilter };
};

/* ------------------------------------------------------------- sampling & icons ---- */

const srcBuf = readFileSync(LOGO_SRC);
const { width: srcW, height: srcH, pixels: srcPixels } = decodePng(srcBuf);

const sampleBilinear = (u, v) => {
  const x0 = Math.max(0, Math.min(srcW - 1, Math.floor(u)));
  const y0 = Math.max(0, Math.min(srcH - 1, Math.floor(v)));
  const x1 = Math.max(0, Math.min(srcW - 1, x0 + 1));
  const y1 = Math.max(0, Math.min(srcH - 1, y0 + 1));
  const fx = u - x0;
  const fy = v - y0;
  const i00 = (y0 * srcW + x0) * 4;
  const i10 = (y0 * srcW + x1) * 4;
  const i01 = (y1 * srcW + x0) * 4;
  const i11 = (y1 * srcW + x1) * 4;
  const res = [0, 0, 0, 0];
  for (let c = 0; c < 4; c += 1) {
    const top = srcPixels[i00 + c] * (1 - fx) + srcPixels[i10 + c] * fx;
    const bot = srcPixels[i01 + c] * (1 - fx) + srcPixels[i11 + c] * fx;
    res[c] = top * (1 - fy) + bot * fy;
  }
  return res;
};

const renderSquareIcon = (size, { bg = null, padRatio = 0.08, rounded = false } = {}) => {
  const out = Buffer.alloc(size * size * 4);
  const emblemCenterX = 341;
  const emblemCenterY = 185;
  const emblemW = 421;
  const emblemH = 281;
  const targetAreaSize = size * (1 - padRatio * 2);
  const scale = Math.min(targetAreaSize / emblemW, targetAreaSize / emblemH);
  const cornerRadius = rounded ? size * 0.22 : 0;

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const outIdx = (y * size + x) * 4;
      if (rounded) {
        const dx = Math.max(0, Math.max(cornerRadius - x, x - (size - 1 - cornerRadius)));
        const dy = Math.max(0, Math.max(cornerRadius - y, y - (size - 1 - cornerRadius)));
        if (Math.hypot(dx, dy) > cornerRadius) {
          out[outIdx + 3] = 0;
          continue;
        }
      }
      if (bg) {
        out[outIdx] = bg[0];
        out[outIdx + 1] = bg[1];
        out[outIdx + 2] = bg[2];
        out[outIdx + 3] = bg[3];
      }
      const srcX = emblemCenterX + (x - size / 2) / scale;
      const srcY = emblemCenterY + (y - size / 2) / scale;
      if (srcX >= 0 && srcX < srcW && srcY >= 0 && srcY < srcH) {
        const px = sampleBilinear(srcX, srcY);
        const alpha = px[3] / 255;
        if (alpha > 0) {
          if (!bg) {
            out[outIdx] = Math.round(px[0]);
            out[outIdx + 1] = Math.round(px[1]);
            out[outIdx + 2] = Math.round(px[2]);
            out[outIdx + 3] = Math.round(px[3]);
          } else {
            const bgA = out[outIdx + 3] / 255;
            const outA = alpha + bgA * (1 - alpha);
            out[outIdx] = Math.round((px[0] * alpha + out[outIdx] * bgA * (1 - alpha)) / outA);
            out[outIdx + 1] = Math.round((px[1] * alpha + out[outIdx + 1] * bgA * (1 - alpha)) / outA);
            out[outIdx + 2] = Math.round((px[2] * alpha + out[outIdx + 2] * bgA * (1 - alpha)) / outA);
            out[outIdx + 3] = Math.round(outA * 255);
          }
        }
      }
    }
  }
  return encodePng(size, size, out);
};

/* ----------------------------------------------------------------- emit ---- */

const targets = [
  { file: resolve(OUT_DIR, 'pwa-192x192.png'), size: 192, padRatio: 0.08 },
  { file: resolve(OUT_DIR, 'pwa-512x512.png'), size: 512, padRatio: 0.08 },
  { file: resolve(OUT_DIR, 'maskable-512x512.png'), size: 512, bg: [11, 15, 23, 255], padRatio: 0.22 },
  { file: resolve(OUT_DIR, 'apple-touch-icon.png'), size: 180, bg: [11, 15, 23, 255], padRatio: 0.12 },
  { file: resolve(OUT_DIR, 'favicon-32x32.png'), size: 32, padRatio: 0.05 },
];

for (const t of targets) {
  const png = renderSquareIcon(t.size, { bg: t.bg, padRatio: t.padRatio, rounded: t.rounded });
  writeFileSync(t.file, png);
  process.stdout.write(`✓ ${t.file.replace(process.cwd(), '.')} (${t.size}×${t.size}, ${(png.length / 1024).toFixed(1)} kB)\n`);
}

const b64Icon192 = readFileSync(resolve(OUT_DIR, 'pwa-192x192.png')).toString('base64');
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="100%" height="100%">
  <image href="data:image/png;base64,${b64Icon192}" width="192" height="192" preserveAspectRatio="xMidYMid meet"/>
</svg>
`;
writeFileSync(resolve(PUBLIC_DIR, 'favicon.svg'), faviconSvg);
process.stdout.write('✓ ./public/favicon.svg\n');

const b64Logo = srcBuf.toString('base64');
const logoMarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="131 45 421 281" width="100%" height="100%" fill="none" role="img" aria-label="Conceptual OBGYN">
  <image href="data:image/png;base64,${b64Logo}" x="0" y="0" width="682" height="366" preserveAspectRatio="xMidYMid meet"/>
</svg>
`;
writeFileSync(resolve(BRAND_DIR, 'logo-mark.svg'), logoMarkSvg);
writeFileSync(resolve(BRAND_DIR, 'logo-mark.png'), srcBuf);
process.stdout.write('✓ ./public/brand/logo-mark.svg & logo-mark.png\n');
