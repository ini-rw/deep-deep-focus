export interface RequestRule {
  id: string;
  priority: 1;
  action: {
    type: 'allow' | 'block';
  };
  condition: {
    url: string;
    resourceTypes: ['main_frame'];
  };
}
export default class RequestController {
  enableRules(rules: RequestRule[]) {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: rules,
    });
  }

  disableAllRules() {
    chrome.declarativeNetRequest.getDynamicRules((rules) => {
      chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: rules.map((rule) => rule.id),
      });
    });
  }
}
