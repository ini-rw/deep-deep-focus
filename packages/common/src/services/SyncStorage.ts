export class SyncStorage {
  static async get<T>(key: string) {
    try {
      const { sites } = await chrome.storage.sync.get(key);
      const result: T = JSON.parse(sites);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error };
    }
  }
  static async set<T>(key: string, value: T) {
    try {
      await chrome.storage.sync.set({
        [key]: JSON.stringify(value),
      });
      return { success: true, data: value };
    } catch (error) {
      return { success: false, error };
    }
  }
}

//

//   export async function setSitesDataSync(data: SiteData) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         await chrome.storage.sync.set({ sites: JSON.stringify(data) });
//         resolve(data);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   }
// }

// export async function set(value: boolean): Promise<boolean> {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const data: = await getSitesDataSync();
//         if (value) {
//           const listSitesToBlock = [
//             {
//               id: 1,
//               priority: 1,
//               action: {
//                 type: "block",
//               },
//               condition: {
//                 urlFilter: "*",
//                 resourceTypes: ["main_frame"],
//               },
//             },
//             ...data.allowedSites.map((element) => {
//               return {
//                 id: element.id,
//                 priority: 1,
//                 action: { type: "allow" },
//                 condition: {
//                   urlFilter: element.name,
//                   resourceTypes: ["main_frame"],
//                 },
//               };
//             }),
//           ];
//           chrome.declarativeNetRequest.updateDynamicRules({
//             addRules: listSitesToBlock,
//           });
//         } else {
//           chrome.declarativeNetRequest.getDynamicRules((rules) => {
//             chrome.declarativeNetRequest.updateDynamicRules({
//               removeRuleIds: rules.map((rule) => rule.id),
//             });
//           });
//         }
//         await chrome.storage.sync.set({ focusMode: value });
//         resolve(value);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   }
