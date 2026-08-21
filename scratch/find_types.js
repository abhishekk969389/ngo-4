const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
    } catch (err) {
      if (err.code === 'ENOENT' || err.code === 'EACCES') return;
    }
  });
  return filelist;
};

const tsxFiles = walkSync('app').filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

let importedTypes = new Set();
let exportedTypes = new Set();

tsxFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match `import type { A, B } from "@/app/data"` or similar
  // Or `import { type A, type B } from ...`
  const importRegex = /import\s+(?:type\s+)?{([^}]+)}\s+from\s+['"](?:@\/app\/data|(?:\.\.\/)+data)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const types = match[1].split(',').map(s => {
      let t = s.trim();
      if (t.startsWith('type ')) t = t.substring(5).trim();
      return t;
    }).filter(Boolean);
    types.forEach(t => importedTypes.add(t));
  }
});

console.log("Imported Types:", Array.from(importedTypes));

// Now map these imported types to their dynamic paths in SiteData
// I will just print them out for now so I can inspect.
