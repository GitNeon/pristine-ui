const path = require('node:path');
const { copyFiles, rewriteDeclareFiles } = require('./file-opt.cjs');

const fp = _path => path.resolve(__dirname, _path);

// 复制package.json
copyFiles(
  fp('../other/package.json'),
  fp('../build/package.json'),
);

// 重写components.d.ts
rewriteDeclareFiles();
