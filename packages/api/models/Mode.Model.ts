import UniModal from '../types/UniModal';
import { ModeObject } from '@deep/shared/types/mode';

export default class Mode extends UniModal {
  static MODEL_NAME = 'Sites';
  static updateName() {
    super.MODEL_NAME = this.MODEL_NAME;
  }
  static create(values: ModeObject) {
    this.updateName();
    return super.create(values);
  }
}
