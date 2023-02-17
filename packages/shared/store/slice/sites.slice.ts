import { Site, SiteListRecord } from '../../types/sites';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlockModeType } from '../../types/mode';

interface SiteReducerState {
  allowedSitesRecord: SiteListRecord;
  blockedSitesRecord: SiteListRecord;
}
const initialSites: SiteReducerState = {
  allowedSitesRecord: {} as SiteListRecord,
  blockedSitesRecord: {} as SiteListRecord,
};
enum SitesSliceField {
  ALLOWED = 'allowedSitesRecord',
  BLOCKED = 'blockedSitesRecord',
}

export const SitesRecordSlice = createSlice({
  name: 'siteReducer',
  reducers: {
    resetBlockedSiteRecord: (state) => {
      state.blockedSitesRecord = {};
    },
    resetAllowedSiteRecord: (state) => {
      state.allowedSitesRecord = {};
    },
    /**
     *
     * @param state
     * @param action
     */
    addSite: (state, action: PayloadAction<{ category: string; site: Site; mode: BlockModeType }>) => {
      let record: SitesSliceField;
      if (action.payload.mode === BlockModeType.ALLOW) record = SitesSliceField.ALLOWED;
      else record = SitesSliceField.BLOCKED;
      if (!state[record][action.payload.category]) state[record][action.payload.category] = [action.payload.site];
      else state[record][action.payload.category]?.push(action.payload.site);
    },
    /**
     *
     * @param state
     * @param action
     */
    removeSite: (state, action: PayloadAction<{ category: string; site: Site; mode: BlockModeType }>) => {
      let record: SitesSliceField;
      if (action.payload.mode == BlockModeType.ALLOW) record = SitesSliceField.ALLOWED;
      else record = SitesSliceField.BLOCKED;
      if (!state[record][action.payload.category])
        state.blockedSitesRecord[action.payload.category] = [action.payload.site];
      else state.blockedSitesRecord[action.payload.category]?.push(action.payload.site);
    },
  },
  initialState: initialSites,
});
export const siteRecordReducer = SitesRecordSlice.reducer;
