import { SyncStorage } from '@deep/common/services/SyncStorage';
export default abstract class UniModal {
  static PersistentStorage = SyncStorage;
  static MODEL_NAME: string;

  constructor() {}

  static async create(values: object): Promise<object> {
    await UniModal.PersistentStorage.set<object>(UniModal.MODEL_NAME, values);
    return values;
  }
  static async find(): Promise<object | null> {
    const data = (await this.PersistentStorage.get<object>(UniModal.MODEL_NAME)).data || null;
    return data;
  }
}
