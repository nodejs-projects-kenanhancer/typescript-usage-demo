import 'reflect-metadata';
import path from "path";
import fs from "fs/promises";

// import { IocContainer } from "./nut-ioc";

// const iocContainer = new IocContainer();

// console.log(IocContainer, Helper);

(async () => {
  const directoryPath = path.join(__dirname, "domain");

  const files = await fs.readdir(directoryPath);

  const dependencies = await Promise.all(
    files
      .filter((fileName) => path.extname(fileName) === ".ts")
      .map(async (fileName) => await import(path.join(directoryPath, fileName)))
  );

  console.log(dependencies);

})();

export {};
