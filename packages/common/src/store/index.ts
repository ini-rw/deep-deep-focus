import { configureStore } from '@reduxjs/toolkit';
import { modeReducer } from './slice/mode.slice';
import { siteRecordReducer } from './slice/sites.slice';

export const store = configureStore({
  reducer: {
    sites: siteRecordReducer,
    mode: modeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
