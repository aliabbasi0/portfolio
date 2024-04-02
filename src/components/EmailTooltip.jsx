import { useState } from "react";

const EmailTooltip = ({ icon, email }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="emailTooltipContainer" onClick={toggleVisibility}>
      <img src={icon} alt="Email Icon" className="emailIcon" />
      <div className={`tooltip ${isVisible ? "visible" : ""}`}>{email}</div>
    </div>
  );
};

export default EmailTooltip;
