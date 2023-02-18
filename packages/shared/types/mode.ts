export enum BlockModeType {
  ALLOW = 'ALLOW',
  BLOCK = 'BLOCK',
}
export interface ModeObject extends Object {
  blockMode: BlockModeType;
  active: boolean;
}
