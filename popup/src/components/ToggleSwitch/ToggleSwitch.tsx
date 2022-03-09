import React from "react";
import "./toggle-switch.scss";
function ToggleSwitch({
  active,
  changeHandler,
}: {
  active: boolean;
  changeHandler: () => void;
}) {
  return (
    <div
      className={`switch ${active && "switch-active"}`}
      onClick={changeHandler}
    >
      <div className="inner"></div>
    </div>
  );
}

export default ToggleSwitch;
