interface Site {
  id: string;
  match: string;
  name: string;
}
interface SiteData {
  lastId: string;
  allowedSites: Site[];
}
export async function getSitesDataSync() {
  return new Promise(async (resolve, reject) => {
    try {
      const { sites } = await chrome.storage.sync.get("sites");
      resolve(JSON.parse(sites));
    } catch (error) {
      reject(error);
    }
  });
}

export async function setFocusModeSync(value: boolean): Promise<boolean> {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await getSitesDataSync();
      if (value) {
        const listSitesToBlock = [
          {
            id: 1,
            priority: 1,
            action: {
              type: "block",
            },
            condition: {
              urlFilter: "*",
              resourceTypes: ["main_frame"],
            },
          },
          ...data.allowedSites.map((element) => {
            return {
              id: element.id,
              priority: 1,
              action: { type: "allow" },
              condition: {
                urlFilter: element.name,
                resourceTypes: ["main_frame"],
              },
            };
          }),
        ];
        chrome.declarativeNetRequest.updateDynamicRules({
          addRules: listSitesToBlock,
        });
      } else {
        chrome.declarativeNetRequest.getDynamicRules((rules) => {
          chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: rules.map((rule) => rule.id),
          });
        });
      }
      await chrome.storage.sync.set({ focusMode: value });
      resolve(value);
    } catch (error) {
      reject(error);
    }
  });
}
export async function getFocusModeSync(): Promise<boolean> {
  return new Promise(async (resolve, reject) => {
    try {
      const { focusMode } = await chrome.storage.sync.get("focusMode");
      resolve(focusMode);
    } catch (error) {
      reject(error);
    }
  });
}

export async function setSitesDataSync(data: SiteData) {
  return new Promise(async (resolve, reject) => {
    try {
      await chrome.storage.sync.set({ sites: JSON.stringify(data) });
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}
