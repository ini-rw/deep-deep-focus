import { initializeModels } from '@deep/api/models';
chrome.runtime.onInstalled.addListener(() => {
  initializeModels();
});

chrome.declarativeNetRequest.getDynamicRules((result) => {});
export {};
