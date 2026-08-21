const fs = require('fs');
const lines = fs.readFileSync('app/data/index.ts', 'utf8').split('\n');
const newLines = lines.slice(0, 256); // Keep up to line 256
fs.writeFileSync('app/data/index.ts', newLines.join('\n'));
