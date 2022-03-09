export default async function sendMessage(message): Promise<string | any> {
  return new Promise(async (resolve, reject) => {
    try {
      await chrome.runtime.sendMessage({ message: message });
      resolve(message);
    } catch (error) {
      reject(error);
    }
  });
}
