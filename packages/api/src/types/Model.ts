import { SyncStorage } from '@deep/common/src/services/SyncStorage';
import { StorageResponse } from '@deep/common/src/types/storage';
import { uuid } from 'uuidv4';
export interface ModelObject {
  id: string;
  [a: string]: unknown;
}

export default abstract class Model<T> {
  static PersistentStorage = SyncStorage;
  static MODEL_NAME: string;
  private _values: T;
  set values(values: T) {
    this._values = values;
  }
  get values(): T {
    return this._values;
  }

  constructor(values: T) {
    this.values = values;
  }
  static async create<T>(values: T): Promise<T> {
    const previousData = (await (await Model.PersistentStorage.get<T[]>(Model.MODEL_NAME)).data) || [];
    await Model.PersistentStorage.set<T[]>(Model.MODEL_NAME, [...previousData, { ...values, id: uuid() }]);
    return values;
  }
  static async update<T>(id: string, values: Partial<T>): Promise<T> {
    const previousData = (await (await Model.PersistentStorage.get<ModelObject[]>(Model.MODEL_NAME)).data) || [];
    const updatedData = previousData.map((data) => {
      if (data.id === id) return { ...data, ...values };
      return data;
    }) as unknown as T[];
    await Model.PersistentStorage.set<T[]>(Model.MODEL_NAME, updatedData)) 
    return values;
  }
  static async delete<T>(id: string): Promise<StorageResponse<T[]>> {
    const previousData = (await (await Model.PersistentStorage.get<ModelObject[]>(Model.MODEL_NAME)).data) || [];
    const updatedData = previousData.filter((data) => data.id === id) as unknown as T[];
    return Model.PersistentStorage.set<T[]>(Model.MODEL_NAME, updatedData);
  }
  static async truncate<T>(): Promise<T[]> {
    return (await Model.PersistentStorage.set<T[]>(Model.MODEL_NAME, []).data) || [];
  }
  static async findOne<T>(id: string): Promise<T | null> {
    const datas = (await (await Model.PersistentStorage.get<ModelObject[]>(Model.MODEL_NAME)).data) || [];
    return datas.find((data) => data.id === id) as unknown as T;
  }
  async save() {
    await Model.create(this.values);
  }
  static findAll() {
    return this.PersistentStorage.get(this.MODEL_NAME);
  }
}
