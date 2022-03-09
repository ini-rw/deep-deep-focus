import { useEffect, useReducer, useState } from "react";
import {
  siteReducer,
  initialState,
  addSite,
  setData,
  removeSite,
} from "./reducer/siteReducer";
import "./App.scss";
import { getSitesDataSync } from "../../helpers/functions";

function App() {
  const [sites, dispatch] = useReducer(siteReducer, initialState);
  const [name, setName] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addSite(name));
    setName("");
  };
  useEffect(() => {
    (async function () {
      const site = await getSitesDataSync();
      dispatch(setData(site));
    })();
  }, []);
  return (
    <div>
      <h1>List of allowedSite</h1>
      {sites.allowedSites &&
        sites.allowedSites.map((element) => (
          <div key={element.id} className="row">
            <p>
              {element.name}, {element.id}
            </p>
            <button>Edit</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeSite(element.id));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="hidden"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={onSubmit}>Add site</button>
      </form>
    </div>
  );
}

export default App;
