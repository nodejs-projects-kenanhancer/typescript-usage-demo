import "reflect-metadata";
import path from "path";
import fs from "fs/promises";

import { ClassType, iocContainer } from "./ioc-container";
import { Helper } from "./src/helper";

type DependencyMetadata = { resolve?: ClassType; register?: ClassType };

const getDependencyMetadata = (dependencies: any) => {
  const initialValue: DependencyMetadata = {};

  let dependencyName: string = "";

  const dependencyMetadata = Object.entries(dependencies).reduce(
    (acc, [fieldName, fieldValue]) => {
      const constructorParamTypes = Reflect.getMetadata(
        "design:paramtypes",
        fieldValue as any
      );

      if (constructorParamTypes) {
        dependencyName = fieldName;
        return { ...acc, register: fieldValue as ClassType };
      }

      return { ...acc, resolve: fieldValue as ClassType };
    },
    initialValue
  );

  if (dependencyName) {
    return { name: dependencyName, ...dependencyMetadata };
  }

  return undefined;
};

(async () => {
  const directoryPath = path.join(__dirname, "src");

  const files = await fs.readdir(directoryPath);

  const dependencies = await Promise.all(
    files
      .filter((fileName) => path.extname(fileName) === ".ts")
      .map(async (fileName) => {
        const filePath = path.join(directoryPath, fileName);

        const deps = await import(filePath);

        const dependencyMetadata = getDependencyMetadata(deps);

        const relativeFilePath = path.relative(__dirname, filePath);

        const [relativeFilePathWithoutExt, fileExt] =
          relativeFilePath.split(".");

        return {
          ...dependencyMetadata,
          filePath: `./${relativeFilePathWithoutExt}`,
          fileExt,
        };
      })
  );

  let imports: Array<string> = [];
  let exports: Array<string> = [];
  let fileContent: string = "";

  dependencies.forEach((item) => {
    const { name, filePath, resolve } = item;

    imports.push(`import { ${resolve?.name} } from "${filePath}"`);

    exports.push(`${name}: ${resolve?.name}`);
  });

  fileContent = `${imports.join("\n")}
  
export const Types = { ${exports.join(", ")} };`;

  console.log(dependencies);
})();

// iocContainer.register('aa', Helper)

export {};
