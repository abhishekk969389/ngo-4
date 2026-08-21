const fs = require('fs');
let content = fs.readFileSync('app/data/index.ts', 'utf8');

if (content.charCodeAt(0) === 0xFFFE || content.charCodeAt(0) === 0xFEFF || content.indexOf('\0') !== -1) {
    content = fs.readFileSync('app/data/index.ts', 'utf16le');
}

const endIndex = content.indexOf('export type PageBannerData = {');
if (endIndex === -1) {
    console.error('Could not find PageBannerData');
    process.exit(1);
}

let topContent = content.substring(0, endIndex);

const linesToExclude = ['TaxBenefits', 'EventDetail', 'JobDetail', 'NotFound', 'ProgramDetail'];
topContent = topContent.split('\n').filter(line => !linesToExclude.some(term => line.includes(term))).join('\n');

const codeToRead = fs.readFileSync('scratch/write_index_v2.js', 'utf8');
const aliases = codeToRead.split('let aliases = `')[1].split('`;')[0];

fs.writeFileSync('app/data/index.ts', topContent + aliases, 'utf8');
console.log('Success');
