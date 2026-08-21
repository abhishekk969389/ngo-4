const fs = require('fs');
const { execSync } = require('child_process');
const original = execSync('git show HEAD:app/data/index.ts', { encoding: 'utf8' });
const endIndex = original.indexOf('export type PageBannerData =');
let content = original.substring(0, endIndex);
const lastComma = content.lastIndexOf(',');
content = content.substring(0, lastComma + 1) + '\n};\n\nexport type SiteData = typeof site;\nexport default ngoDataJson;\n\n';

const linesToExclude = ['TaxBenefits', 'EventDetail', 'JobDetail', 'NotFound', 'ProgramDetail'];
content = content.split('\n').filter(line => !linesToExclude.some(term => line.includes(term))).join('\n');

const codeToRead = fs.readFileSync('scratch/write_index_v2.js', 'utf8');
const aliases = codeToRead.split('let aliases = `')[1].split('`;')[0];

fs.writeFileSync('app/data/index.ts', content + aliases);

// delete scratch files
fs.readdirSync('scratch').forEach(file => {
    if (file.endsWith('.ts') || file.endsWith('.txt')) {
        fs.unlinkSync('scratch/' + file);
    }
});
