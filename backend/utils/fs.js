import fs from 'fs';
import { random } from './string.js';

export function uploadImageBase64(encodedFile, folder = null) {
  let dir = `backend/storage/${folder || ''}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const img = random(32) + '.png';
  fs.writeFile(`${dir}/${img}`, encodedFile, 'base64', (err) => {
    if (err) console.log(err);
  });
  if (folder) return '/storage/' + folder + '/' + img;
  return '/storage/' + img;
}