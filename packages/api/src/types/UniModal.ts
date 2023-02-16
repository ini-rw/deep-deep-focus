import { SyncStorage } from '@deep/common/src/services/SyncStorage';
import { StorageResponse } from '@deep/common/src/types/storage';

export abstract class UniModal<T> {
  static PersistentStorage = SyncStorage;
  static MODEL_NAME: string;
  protected _values: T;
  set values(values: T) {
    this._values = values;
  }
  get values(): T {
    return this._values;
  }
  constructor() {}

  abstract save(): Promise<StorageResponse<T>>;
  static find<T>() {
    return this.PersistentStorage.get<T>(UniModal.MODEL_NAME);
  }
  static delete() {}
}
