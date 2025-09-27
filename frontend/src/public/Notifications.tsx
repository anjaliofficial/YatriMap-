import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Notifications.css";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: "New Message", message: "You have a new message from John.", time: "2 min ago", read: false },
    { id: 2, title: "Hike Reminder", message: "Your hike to Poon Hill is tomorrow at 6:00 AM.", time: "1 hour ago", read: true },
    { id: 3, title: "Update Available", message: "Version 2.1.0 is now available for download.", time: "Yesterday", read: false },
    { id: 4, title: "New Follower", message: "Anna started following you.", time: "2 days ago", read: false },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="notifications-page">
      <Header />

      <section className="notifications-main">
        <div className="notifications-container">
          <div className="notifications-header">
            <h1>Notifications</h1>
            <button onClick={markAllAsRead}>Mark All as Read</button>
          </div>

          {notifications.length === 0 ? (
            <p className="empty-text">No notifications yet.</p>
          ) : (
            <div className="notifications-grid">
              {notifications.map(notification => (
                <div
                  key={notification.id}
                  className={`notification-card ${notification.read ? "read" : "unread"}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="notification-info">
                    <h3>{notification.title}</h3>
                    <p>{notification.message}</p>
                    <span className="notification-time">{notification.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Notifications;
