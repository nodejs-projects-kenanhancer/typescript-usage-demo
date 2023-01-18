import path from "path";
import fs from "fs/promises";

import { iocContainer } from "./ioc-container";

const getDependencyMetadata = (dependencies: any) => {
  let depName: string = "";

  const depMetadata = Object.keys(dependencies).reduce((pv, cv) => {
    if (iocContainer.dependencyMetadataContainer.has(cv)) {
      depName = cv;
      return { ...pv, register: dependencies[cv] };
    }

    return { ...pv, resolve: dependencies[cv] };
  }, {});

  if (depName) {
    return { name: depName, [depName]: depMetadata };
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

        return {
          ...dependencyMetadata,
          filePath: path.join(directoryPath, path.parse(fileName).name),
        };
      })
  );

  let imports: Array<string> = [];
  let exports: Array<string> = [];
  let fileContent: string = "";

  dependencies.forEach((item) => {
    const { name, filePath } = item;
    imports.push(`import { ${name} } from "${filePath}"`);

    exports.push(`${name}`);
  });

  fileContent = `${imports.join("\n")}
  
export { ${exports.join(", ")} };`;

  console.log(dependencies);
})();

export {};
