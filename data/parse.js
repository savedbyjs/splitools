/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

(async () => {
  const finalData = [];
  const files = fs.readdirSync(__dirname);

  const allData = [];

  files.forEach((file) => {
    if (path.extname(file) === '.csv') {
      const data = fs.readFileSync(`${__dirname}/${file}`, 'utf8');
      allData.push(data);
    }
  });

  for (const data of allData) {
    const response = await csv().fromString(data);
    finalData.push(...response);
  }

  fs.writeFileSync(`${__dirname}/sellers.json`, JSON.stringify(finalData, null, 2))
})();
