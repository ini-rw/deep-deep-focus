export enum BlockModeType {
  ALLOW = 'ALLOW',
  BLOCK = 'BLOCK',
}
export interface ModeObject {
  blockMode: BlockModeType;
  active: boolean;
}
