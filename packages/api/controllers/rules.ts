import { type Site } from '@deep/shared/types/sites';
import Sites from '../models/Site.Model';
export const addSite = (site: Site) => {
  return Sites.create(site);
};
export const deleteSite = (id: string) => {
  return Sites.delete(id);
};
export const fetchSite = () => {
  return Sites.findAll();
};
