import fs from "fs";
import { exec, ExecException } from "child_process";
import path from "path";

const filePath: string = path.join(__dirname, "../../epic-designer/dist/index.js");

if (fs.existsSync(filePath)) {
  console.log("已满足启动条件，正在启动...");
} else {
  console.log("引用文件未编译，正在编译请稍等...");
  exec(
    "cd ../../ && npm run lib",
    { maxBuffer: 50 * 1024 * 1024 },
    (error: ExecException | null) => {
      if (error) {
        console.error(`执行 npm lib 时出错: ${error}`);
        return;
      }
      console.log(`编译完成`);
    }
  );
}
