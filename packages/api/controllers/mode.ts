import { ModeObject } from '@deep/shared/types/mode';
import Mode from '../models/Mode.Model';
export const getMode = async () => {
  return Mode.find();
};
export const updateMode = async (mode: ModeObject) => {
  return Mode.create(mode);
};
