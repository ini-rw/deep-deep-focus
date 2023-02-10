import { siteRecordReducer, SitesRecordSlice } from '../../src/store/slice/sites.slice';
import { BlockModeType } from '../../src/types/mode';
import { Site } from '../../src/types/sites';
let dummySite: Site = {
  favicon: 'favion',
  name: 'name',
  url: 'url',
};
describe('modeSlice', () => {
  it("modeReducer.addSite create new category if doesn't exists", () => {
    let dummySite: Site = {
      id: '1',
      favicon: 'favion',
      name: 'name',
      url: 'url',
    };
    expect(
      siteRecordReducer(
        { allowedSitesRecord: {}, blockedSitesRecord: {} },
        SitesRecordSlice.actions.addSite({ category: 'Default', mode: BlockModeType.ALLOW, site: dummySite })
      ).allowedSitesRecor
    ).toHaveProperty('Default');
    expect(
      siteRecordReducer(
        { allowedSitesRecord: {}, blockedSitesRecord: {} },
        SitesRecordSlice.actions.addSite({ category: 'Default', mode: BlockModeType.BLOCK, site: dummySite })
      ).blockedSitesRecord
    ).toHaveProperty('Default');
  });
  it('modeReducer.addSite create append site category if exists', () => {
    expect(
      siteRecordReducer(
        {
          allowedSitesRecord: {
            default: [dummySite],
          },
          blockedSitesRecord: {},
        },
        SitesRecordSlice.actions.addSite({ category: 'default', mode: BlockModeType.ALLOW, site: dummySite })
      ).allowedSitesRecord['default']
    ).toHaveLength(2);
    expect(
      siteRecordReducer(
        {
          allowedSitesRecord: {},
          blockedSitesRecord: { default: [dummySite] },
        },
        SitesRecordSlice.actions.addSite({ category: 'default', mode: BlockModeType.BLOCK, site: dummySite })
      ).blockedSitesRecord['default']
    ).toHaveLength(2);
  });
});
