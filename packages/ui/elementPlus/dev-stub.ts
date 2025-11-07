import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

// 开发模式下直接生成 stub 文件
function generateStubFiles() {
  const entryPath = 'index';
  const outputPath = `./dist/${entryPath}.mjs`;
  const typeOutputPath = `./dist/${entryPath}.d.ts`;
  const sourcePath = `../src/${entryPath}`;

  // 确保目录存在
  const outputDir = dirname(outputPath);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // 生成重新导出的 stub 文件
  const stubContent = `export * from '${sourcePath}';
`;
  writeFileSync(outputPath, stubContent);
  writeFileSync(typeOutputPath, stubContent);
}

generateStubFiles();
