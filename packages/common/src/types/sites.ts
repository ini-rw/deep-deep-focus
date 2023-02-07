export interface Site {
  name?: string;
  favicon?: string;
  url?: string;
}
export type SiteList = Record<string, Site[]>;
