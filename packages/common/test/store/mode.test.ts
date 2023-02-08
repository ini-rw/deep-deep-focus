import { modeSlice, modeReducer } from '../../src/store/slice/mode.slice';
import { BlockModeType } from '../../src/types/mode';

describe('modeSlice', () => {
  it('modeSlice.actions.setMode', () => {
    expect(modeSlice.actions.setMode(BlockModeType.ALLOW).payload).toBe(BlockModeType.ALLOW);
  });
  it('modeSlice.actions.setMode', () => {
    expect(modeSlice.actions.toggleStatus().payload).toBe(undefined);
  });
  it('modeReducer', () => {
    expect(
      modeReducer({ active: false, blockMode: BlockModeType.ALLOW }, modeSlice.actions.setMode(BlockModeType.BLOCK))
        .blockMode
    ).toBe(BlockModeType.BLOCK);
    expect(
      modeReducer({ active: false, blockMode: BlockModeType.ALLOW }, modeSlice.actions.toggleStatus()).active
    ).toBe(true);
  });
});
