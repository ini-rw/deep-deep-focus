import { BlockModeType } from '../../src/types/mode';
// import { describe, it, expect } from 'vitest';
describe('BlockModeType', () => {
  it('BlockModeType should have valid enum  values', () => {
    expect(BlockModeType.ALLOW).toBe('ALLOW');
    expect(BlockModeType.BLOCK).toBe('BLOCK');
  });
});
