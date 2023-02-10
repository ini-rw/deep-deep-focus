const fs = require('fs');
const path = require('path');
const outputDirPath = path.join(__dirname, 'extension');
const resourcesPath = path.join(__dirname, 'resources');
if (!fs.existsSync(outputDirPath)) fs.mkdirSync(outputDirPath);
function copyToResources(filename) {
  fs.copyFile(path.join(resourcesPath, filename), path.join(outputDirPath, filename), () => {
    console.log(filename + ' written successfully');
  });
}
(async () => {
  const resources = await fs.readdirSync(path.resolve('resources'));
  resources.map((resource) => {
    copyToResources(resource);

    fs.watch(path.join(resourcesPath, resource), (eventType, filename) => {
      if (eventType == 'change') copyToResources(filename);
    });
  });
})();
