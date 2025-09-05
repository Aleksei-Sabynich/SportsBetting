import React from "react";
import "./Notification.css";

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return <div className="notification">{message}</div>;
};

export default Notification;