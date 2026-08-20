const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('app/components');
let updatedFiles = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let modified = false;
  
  // Fix the previously broken ones first!
  if (content.includes('/ sizes=')) {
    content = content.replace(/\/ sizes="([^"]+)">/g, 'sizes="$1" />');
    modified = true;
  }

  // Also catch any Image with fill but no sizes
  const newContent = content.replace(/<Image([^>]*?)(\/?)>/g, (match, p1, p2) => {
    if (match.includes('fill') && !match.includes('sizes=')) {
      modified = true;
      return `<Image${p1} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" ${p2}>`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(f, newContent);
    updatedFiles++;
  }
});

console.log('Updated ' + updatedFiles + ' files.');
