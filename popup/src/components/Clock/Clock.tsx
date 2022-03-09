import React from "react";
import "./clock.scss";
function Clock({ time }: { time: string }) {
  return (
    <>
      <div className="clock">
        <div className="wave">{time}</div>
      </div>
    </>
  );
}

export default Clock;
