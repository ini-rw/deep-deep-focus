import { useEffect, useRef, useState } from 'react';
import './App.scss';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';

import React from 'react';
const text: { focus: string; unfocus: string } = {
  focus: 'You are in focus mode, so try to focus',
  unfocus: 'Even though you are not in focus mode, you need to focus',
};
function App() {
  const [focusMode, setFocusMode] = useState(false);
  const inputElement = useRef(null);
  const changeHandler = async () => {
    // inputElement?.current.click();
    // await setFocusModeSync(inputElement.current?.checked);
  };
  useEffect(() => {
    (async () => {
      // const focusModeSync = await getFocusModeSync();
      // setFocusMode(focusModeSync);
    })();
  }, []);
  return (
    <main>
      <h1>Welcome to deep deep focus</h1>
      <p>{focusMode ? text.focus : text.unfocus}</p>
      <div className="input">
        <label htmlFor="focusMode">Focus mode</label>
        <input
          className="hidden"
          type="checkbox"
          id="focusMode"
          ref={inputElement}
          checked={focusMode}
          name="focusMode"
          onChange={(e) => {
            setFocusMode(e.target.checked);
          }}
        />
        <ToggleSwitch active={focusMode} changeHandler={changeHandler} />
      </div>
    </main>
  );
}

export default App;
