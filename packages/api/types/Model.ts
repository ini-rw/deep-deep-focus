import { SyncStorage } from '@deep/common/services/SyncStorage';
import { uuid } from 'uuidv4';
export interface ModelObject {
  id: string;
  [a: string]: unknown;
}

export default abstract class Model {
  static PersistentStorage = SyncStorage;
  static MODEL_NAME: string;
  private _values: object;
  set values(values: object) {
    this._values = values;
  }
  get values(): object {
    return this._values;
  }

  constructor(values: object) {
    this.values = values;
  }
  static async create(values: object): Promise<object> {
    const previousData = (await (await Model.PersistentStorage.get<object[]>(Model.MODEL_NAME)).data) || [];
    await Model.PersistentStorage.set<object[]>(Model.MODEL_NAME, [...previousData, { ...values, id: uuid() }]);
    return values;
  }
  static async update(id: string, values: Partial<object>): Promise<boolean> {
    let result: object;
    const previousData = (await (await Model.PersistentStorage.get<ModelObject[]>(Model.MODEL_NAME)).data) || [];
    const updatedData = previousData.map((data) => {
      if (data.id === id) return { ...data, ...values };
      result = { ...data, ...values };
      return data;
    });
    await Model.PersistentStorage.set<object>(Model.MODEL_NAME, updatedData);
    return true;
  }
  static async delete(id: string): Promise<object> {
    const previousData = (await (await Model.PersistentStorage.get<ModelObject[]>(Model.MODEL_NAME))?.data) || [];
    const updatedData = previousData.filter((data) => data.id === id);
    await Model.PersistentStorage.set<object>(Model.MODEL_NAME, updatedData);
    return updatedData;
  }
  static async truncate(): Promise<boolean> {
    (await (await Model.PersistentStorage.set<object[]>(Model.MODEL_NAME, [])).data) || [];
    return true;
  }
  static async findOne(id: string): Promise<object | null> {
    const datas = (await (await Model.PersistentStorage.get<ModelObject[]>(Model.MODEL_NAME)).data) || [];
    return datas.find((data) => data.id === id) || null;
  }
  async save() {
    await Model.create(this.values);
  }
  static async findAll(): Promise<object[]> {
    const data = (await this.PersistentStorage.get<object[]>(this.MODEL_NAME)).data || [];
    return data;
  }
}
