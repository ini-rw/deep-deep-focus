import { BlockModeType } from '@deep/shared/types/mode';
import Mode from './Mode.Model';
import Sites from './Site.Model';
export const initializeModels = () => {
  Mode.create({
    active: false,
    blockMode: BlockModeType.ALLOW,
  });
  Sites.initialize();
  console.log('Model initialized');
};
