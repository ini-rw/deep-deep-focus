import randomUID from '../functions/randomUID';
import { setSitesDataSync } from '';

const ADD_SITE = 'ADD_SITE';
const REMOVE_SITE = 'REMOVE_SITE';
const UPDATE_SITE = 'UPDATE_SITE';
const SET_DATA = 'SET_DATA';
export const initialState = { allowedSites: [], lastId: 2 };
export const addSite = (name: string) => ({
  type: ADD_SITE,
  payload: { match: `*://*.${name}/*`, name },
});
export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});
export const removeSite = (id) => ({
  type: REMOVE_SITE,
  payload: { id },
});
export function siteReducer(state = initialState, action) {
  let updatedAllowedSite: any;
  let updatedState: any;
  let duplicate: any;
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    case ADD_SITE:
      const id = randomUID(state.lastId);
      duplicate = state.allowedSites.find((site) => site.name === action.payload.name);
      if (!duplicate) {
        updatedState = {
          allowedSites: [...state.allowedSites, { id, ...action.payload }],
          lastId: state.lastId + 1,
        };
        console.log(updatedState);
        setSitesDataSync(updatedState);
        return updatedState;
      }
      return state;
    case REMOVE_SITE:
      updatedAllowedSite = state.allowedSites.filter((site) => site.id !== action.payload.id);
      updatedState = Object.assign({}, state, {
        allowedSites: updatedAllowedSite,
      });
      setSitesDataSync(updatedState);
      return updatedState;
    case UPDATE_SITE:
      updatedAllowedSite = state.allowedSites.map((site) => {
        if (site.id === action.payload.id) {
          return { ...site, ...action.payload };
        }
        return site;
      });
      updatedState = Object.assign({}, state, {
        allowedSites: updatedAllowedSite,
      });
      setSitesDataSync(updatedState);
      return updatedState;
    default:
      return state;
  }
}
