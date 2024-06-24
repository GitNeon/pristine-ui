const path = require('node:path');
const { copyFiles, moveFiles, removeFiles } = require('./file-opt.cjs');

const fp = _path => path.resolve(__dirname, _path);

const PATH_SRC_1 = fp('../packages/pristine-ui/package.json');
const PATH_DEST_1 = fp('../build/package.json');

const PATH_SRC_2 = fp('../build/es/pristine-ui');
const PATH_DEST_2 = fp('../build/es');

const PATH_SRC_3 = fp('../build/lib/pristine-ui');
const PATH_DEST_3 = fp('../build/lib');

const PATH_SRC_4 = fp('../packages/pristine-ui/global.d.ts');
const PATH_DEST_4 = fp('../build/global.d.ts');

// 复制package.json
copyFiles(PATH_SRC_1, PATH_DEST_1);
// 复制global.d.ts
copyFiles(PATH_SRC_4, PATH_DEST_4);

// 调整build/es/pristine-ui
moveFiles(PATH_SRC_2, PATH_DEST_2);
removeFiles(PATH_SRC_2);

// 调整build/lib/pristine-ui
moveFiles(PATH_SRC_3, PATH_DEST_3);
removeFiles(PATH_SRC_3);
