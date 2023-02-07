import { createContext } from 'react';
import { RootStorageObject } from '../types/storage';

export const initalData: RootStorageObject = {
  sites: {
    allow: {
      default: [],
    },
    block: {
      default: [],
    },
  },
  mode: {
    type: 'allow',
    active: false,
  },
};
export const storeContext = createContext<RootStorageObject>(initalData);
export const StoreProvider = storeContext.Provider;
