import { BlockModeType } from './mode';
import { SiteListRecord } from './sites';

export interface RootStorageObject {
  sites: {
    allow: SiteListRecord;
    block: SiteListRecord;
  };
  mode: {
    type: BlockModeType;
    active: boolean;
  };
}
export interface StorageResponse<T> {
  success: boolean;
  data?: T;
  error?: Error;
}
