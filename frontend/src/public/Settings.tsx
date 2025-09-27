import React, { useState } from "react";
import Header from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/Settings.css";

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    username: "JohnDoe",
    email: "john@example.com",
    notifications: true,
    darkMode: false,
    password: "",
    newPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
    // Add API call to save settings
  };

  return (
    <div className="settings-page">
      <Header />

      <section className="settings-main">
        <div className="settings-container">
          <h1>User Settings</h1>

          <div className="settings-section">
            <h2>Profile Info</h2>
            <div className="settings-field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={settings.username}
                onChange={handleChange}
              />
            </div>
            <div className="settings-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="settings-section">
            <h2>Security</h2>
            <div className="settings-field">
              <label>Current Password</label>
              <input
                type="password"
                name="password"
                value={settings.password}
                onChange={handleChange}
              />
            </div>
            <div className="settings-field">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={settings.newPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="settings-section">
            <h2>Preferences</h2>
            <div className="settings-field checkbox-field">
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
              <label>Enable Notifications</label>
            </div>
            <div className="settings-field checkbox-field">
              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
              />
              <label>Enable Dark Mode</label>
            </div>
          </div>

          <button className="save-button" onClick={handleSave}>
            Save Settings
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Settings;
