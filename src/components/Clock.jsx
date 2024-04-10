import { useState, useEffect } from "react";

function Clock() {
  const [showDot, setShowDot] = useState(true);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
      setShowDot((prevDot) => !prevDot);
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="digital-clock">
      <div className="week">
        <div className={now.getDay() === 0 ? "active" : ""}>SUN</div>
        <div className={now.getDay() === 1 ? "active" : ""}>MON</div>
        <div className={now.getDay() === 2 ? "active" : ""}>TUE</div>
        <div className={now.getDay() === 3 ? "active" : ""}>WED</div>
        <div className={now.getDay() === 4 ? "active" : ""}>THU</div>
        <div className={now.getDay() === 5 ? "active" : ""}>FRI</div>
        <div className={now.getDay() === 6 ? "active" : ""}>SAT</div>
      </div>
      <div className="time">
        <div className="hour">{now.getHours().toString().padStart(2, "0")}</div>
        <div className={`dot ${showDot ? "" : "invisible"}`}>:</div>
        <div className="min">
          {now.getMinutes().toString().padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}

export default Clock;
