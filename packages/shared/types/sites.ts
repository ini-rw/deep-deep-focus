export interface Site {
  id?: string;
  name?: string;
  favicon?: string;
  url?: string;
}
export type SiteListRecord = Record<string, Site[]>;
