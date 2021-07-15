import React, { useState, useEffect } from "react";

type PropsTimer = {
  initialMinute: number;
  initialSeconds: number;
};

const Timer: React.FC<PropsTimer> = ({
  initialMinute = 0,
  initialSeconds = 0,
}) => {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <h1 style={{ color: "white" }}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
    </div>
  );
};

export default Timer;
