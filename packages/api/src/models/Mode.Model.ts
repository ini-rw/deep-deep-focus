import { ModeObject } from '@deep/common/src/types/mode';
import { UniModal } from '../types/UniModal';

export default class Mode extends UniModal<ModeObject> {
  static MODEL_NAME = 'mode';
  constructor(values: ModeObject) {
    super();
    this.values = values;
  }
  async save() {
    return Mode.PersistentStorage.set<ModeObject>(Mode.MODEL_NAME, this.values);
  }
}
