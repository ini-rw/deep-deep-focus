export class Message {
  static async send<T>(message: T): Promise<{ success: boolean; message: T; error?: any }> {
    return new Promise(async (resolve) => {
      try {
        await chrome.runtime.sendMessage({ message: message });
        resolve({
          success: true,
          message,
        });
      } catch (error) {
        resolve({
          success: false,
          message,
          error,
        });
      }
    });
  }
}
