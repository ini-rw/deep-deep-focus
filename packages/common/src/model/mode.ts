import { SyncStorage } from '../services/SyncStorage';
import { Dispatch } from '../store';
import { modeSlice } from '../store/slice/mode.slice';
import { BlockModeType } from '../types/mode';

class ModeModel {
  static async setMode(dipatch: Dispatch, options: { mode: BlockModeType }) {
    SyncStorage.set('blockMode', options.mode);
    dipatch(mod);
  }
}
