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

// const $ = (selector) => {
//   return document.querySelector(selector);
// };
// const hour = $(".hour");
// const dot = $(".dot");
// const min = $(".min");
// const week = $(".week");
// let showDot = true;

// function update() {
//   showDot = !showDot;
//   const now = new Date();

//   if (showDot) {
//     dot.classList.add("invisible");
//   } else {
//     dot.classList.remove("invisible");
//   }
//   hour.textContent = String(now.getHours()).padStart(2, "0");
//   min.textContent = String(now.getMinutes()).padStart(2, "0");

//   Array.form(week.children).forEach((ele) => {
//     ele.classList.remove("active");
//   });
//   week.children[now.getDay()].classList.add("active");
// }

// setInterval(update, 500);
