import { Site } from '@deep/shared/types/sites';
import Model from '../types/Model';

export default class Sites extends Model {
  MODEL_NAME = 'Sites';
  static updateName() {
    super.MODEL_NAME = this.MODEL_NAME;
  }
  static override create(values: Site): Promise<Site> {
    this.updateName();
    return super.create(values);
  }
  static override delete(id: string): Promise<Site> {
    this.updateName();
    return super.delete(id);
  }
  static override update(id: string, values: Site): Promise<boolean> {
    this.updateName();
    super.MODEL_NAME = this.MODEL_NAME;
    return super.update(id, values);
  }
  static override findAll(): Promise<Site[]> {
    this.updateName();
    return super.findAll();
  }
}
