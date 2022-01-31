import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

interface AlertProps {
  /**
   * Status alert
   */
  type: "success" | "info" | "warning" | "danger";
  /**
   * Alert name - text
   */
  label: string;
  /**
   * background alert
   */
  bgColor?: string;
}

const Alert: React.FC<AlertProps> = ({
  type = "info",
  label = "Hellow world",
  bgColor,
}) => {
  const alertClass = `alert  alert-${type}`;
  const style = {
    backgroundColor: bgColor,
  };

  return (
    <div className={alertClass} style={style}>
      {label}
    </div>
  );
};

export default Alert;
