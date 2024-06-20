const fs = require('node:fs');
const path = require('node:path');

const { copyFileSync, existsSync } = fs;
const { dirname } = path;

function copyFiles(sourceDir, destinationDir) {
  const dir = dirname(destinationDir);
  if (existsSync(dir)) {
    copyFileSync(sourceDir, destinationDir);
    console.log('文件已成功复制 =========>', destinationDir);
  }
  else {
    console.error('文件复制失败，目标路径不存在');
  }
}

function moveFiles(sourceDir, destinationDir) {
  const files = fs.readdirSync(sourceDir);

  for (const file of files) {
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(destinationDir, file);
    if (fs.statSync(srcPath).isFile()) {
      fs.renameSync(srcPath, destPath);
      console.log('文件移动成功 =========>', destinationDir);
    }
  }
}

function removeFiles(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        removeFiles(curPath);
      }
      else { // delete file
        fs.unlinkSync(curPath);
      }
    }

    fs.rmdirSync(dirPath);
    console.log('file deleted successfully: ', dirPath);
  }
  catch (err) {
    console.error(`Error deleting directory: ${dirPath}`, err);
  }
}

exports.copyFiles = copyFiles;
exports.moveFiles = moveFiles;
exports.removeFiles = removeFiles;
