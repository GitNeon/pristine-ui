const fs = require('node:fs');
const path = require('node:path');

// 创建打包后的package.json描述文件，用于发布
function createPkg() {
  const configObject = getConfigContent('config.txt');
  const fileStr = `
{
  "name": "${configObject.name}",
  "version": "${configObject.version}",
  "description": "A Vue3 UI Components Library",
  "main": "./lib/index.js",
  "module": "./es/index.js",
  "types": "./dist/index.d.ts",
  "keywords": ["UI Library", "vue3"],
  "author": "yunyan",
  "license": "ISC"
}
  `;
  const filePath = path.join('./build', 'package.json');
  fs.writeFile(filePath, fileStr, { encoding: 'utf-8' }, (err) => {
    if (err) {
      throw err;
    }
    console.log('写入文件成功');
  });
}

// 获取config.txt中的内容
function getConfigContent(fileName = '') {
  const configObject = {};

  try {
    const filePath = path.join(__dirname, fileName);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').filter(line => line.trim() !== '' && !line.startsWith('#'));

    lines.forEach((line) => {
      const [key, value] = line.split('=');
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();
      if (trimmedKey && trimmedValue) {
        configObject[trimmedKey] = trimmedValue;
      }
    });
  }
  catch (err) {
    console.error('读取文件时发生错误：', err);
  }

  return configObject;
}

createPkg();
