chrome.runtime.onInstalled.addListener(() => {
  //TODDO: a functionality to check if the daata already exits
  let initialData = { allowedSites: [], lastId: 1, focusMode: false };
  chrome.storage.sync.set(
    {
      sites: JSON.stringify({
        lastId: initialData.lastId,
        allowedSites: initialData.allowedSites,
      }),
    },
    () => {
      console.log("Initialized the allowedSite data");
    }
  );
  chrome.storage.sync.set({ focusMode: initialData.focusMode }, () => {
    console.log("Set the focus mode", initialData.focusMode);
  });
});

chrome.declarativeNetRequest.getDynamicRules((result) => {
  console.log(result);
});
export {};
