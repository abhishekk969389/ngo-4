const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'app', 'data', 'ngoData_structured.json');
let data = fs.readFileSync(jsonPath, 'utf8');

const json = JSON.parse(data);

function updateOutlets(obj) {
    if (!obj || typeof obj !== 'object') return;
    
    if (obj.outlets && Array.isArray(obj.outlets) && obj.badge === 'IN THE PRESS') {
        obj.outlets.forEach(outlet => {
            if (outlet.icon && !outlet.icon.startsWith('/')) {
                outlet.icon = '/media-icons/' + outlet.icon + '.svg';
            }
        });
    }
    
    for (const key in obj) {
        updateOutlets(obj[key]);
    }
}

updateOutlets(json);

fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
console.log('Updated JSON file recursively');
