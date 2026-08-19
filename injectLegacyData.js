const fs = require('fs');

const oldData = JSON.parse(fs.readFileSync('./app/data/ngoData.json', 'utf8'));
const newData = JSON.parse(fs.readFileSync('./app/data/ngoData_structured.json', 'utf8'));

if (!newData.NGO) newData.NGO = { sections: {} };
if (!newData.NGO.sections) newData.NGO.sections = {};

const oldKeys = Object.keys(oldData);
for (const key of oldKeys) {
  if (!newData.NGO.sections[key]) {
    newData.NGO.sections[key] = {
      variants: {
        ["Legacy_" + key]: oldData[key]
      }
    };
  } else {
    newData.NGO.sections[key].variants["Legacy_" + key] = oldData[key];
  }
}

fs.writeFileSync('./app/data/ngoData_structured.json', JSON.stringify(newData, null, 2));
console.log('Legacy data successfully injected into structured JSON!');
