import { AvailableMode } from './mode';
import { SiteList } from './sites';

export interface RootStorageObject {
  sites: {
    allow: SiteList;
    block: SiteList;
  };
  mode: {
    type: AvailableMode;
    active: boolean;
  };
}
