import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlockModeType } from '../../types/mode';

export interface {
  blockMode: BlockModeType;
  active: boolean;
}
const initialSites:  = {
  blockMode: BlockModeType.ALLOW,
  active: false,
};

export const modeSlice = createSlice({
  name: 'mode',
  reducers: {
    setMode: (state, action: PayloadAction<BlockModeType>) => {
      state.blockMode = action.payload;
    },
    toggleStatus: (state) => {
      state.active = !state.active;
    },
  },
  initialState: initialSites,
});
export const modeReducer = modeSlice.reducer;
