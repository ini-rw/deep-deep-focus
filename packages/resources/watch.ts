const fs = require('fs');
const path = require('path');
const outputDirPath = path.resolve(__dirname, '..', '..', 'extension');
const resourcesPath = path.resolve(__dirname, 'assets');
if (!fs.existsSync(outputDirPath)) fs.mkdirSync(outputDirPath);
function copyToResources(filename: string) {
  fs.copyFile(path.join(resourcesPath, filename), path.join(outputDirPath, filename), () => {
    console.log(filename + ' written successfully');
  });
}
(async () => {
  const resources = await fs.readdirSync(path.resolve(resourcesPath));
  resources.map((resource: string) => {
    copyToResources(resource);
    if (process.env['WATCH']) {
      fs.watch(path.join(resourcesPath, resource), (eventType: 'change' | 'updated', filename: string) => {
        if (eventType == 'change') copyToResources(filename);
      });
    }
  });
})();
