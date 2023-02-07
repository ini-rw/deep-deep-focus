import { Site, SiteListRecord } from '../../types/sites';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SiteReducerState {
  allowedSitesRecord: SiteListRecord;
  blockedSitesRecord: SiteListRecord;
}
const initialSites: SiteReducerState = {
  allowedSitesRecord: {} as SiteListRecord,
  blockedSitesRecord: {} as SiteListRecord,
};

export const SitesRecordSlice = createSlice({
  name: 'siteReducer',
  reducers: {
    resetBlockedSiteRecord: (state) => {
      state.blockedSitesRecord = {};
    },
    resetAllowedSiteRecord: (state) => {
      state.allowedSitesRecord = {};
    },
    addBlockedSite: (state, action: PayloadAction<{ category: string; site: Site }>) => {
      state.blockedSitesRecord[action.payload.category].push(action.payload.site);
    },
    addAllowedSite: (state, action: PayloadAction<{ category: string; site: Site }>) => {
      state.allowedSitesRecord[action.payload.category].push(action.payload.site);
    },
  },
  initialState: initialSites,
});
export const siteRecordReducer = SitesRecordSlice.reducer;
