import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlockModeType, ModeObject } from '../../types/mode';

const initialModeData: ModeObject = {
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
  initialState: initialModeData,
});
export const modeReducer = modeSlice.reducer;
