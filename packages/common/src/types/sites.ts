export interface Site {
  name?: string;
  favicon?: string;
  url?: string;
}
export type SiteListRecord = Record<string, Site[]>;
