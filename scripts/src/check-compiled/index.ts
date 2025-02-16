import fs from "fs";
import { exec, ExecException } from "child_process";
import path from "path";
import type { CAC } from "cac";
import { getPackage } from "../utils";

async function run() {
  const pkg = await getPackage("epic-designer");
  if (!pkg) return;

  // 定义目标文件的路径
  const filePath: string = path.join(pkg.dir, "/dist/index.js");

  // 检查目标文件是否存在
  if (fs.existsSync(filePath)) {
    // 如果文件存在，直接启动
    console.log("已满足启动条件，正在启动...");
  } else {
    // 如果文件不存在，提示用户正在编译
    console.log("引用文件未编译，正在编译请稍等...");

    // 执行编译命令
    exec(
      "npm run build", // 切换到上级目录并执行 npm run lib 命令
      { cwd: pkg.dir, maxBuffer: 50 * 1024 * 1024 }, // 设置最大缓冲区大小为50MB
      (error: ExecException | null) => {
        if (error) {
          // 如果执行命令时出错，打印错误信息
          console.error(`[checkCompiled]执行出错: ${error}`);
          return;
        }
        // 编译成功，打印完成信息
        console.log("编译完成");
      }
    );
  }
}

export function defineCheckCompiledCommand(cac: CAC) {
  cac.command("checkCompiled").action(run);
}
